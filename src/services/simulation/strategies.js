// strategy template

import { Strategy } from 'portfolio-tools';
import PortfolioAllocation from 'portfolio-allocation';

const calcWeights = (dateIndex, returnsByAsset, options, context) => {
  // initialize weights
  let weightByAsset = Array(returnsByAsset.length).fill(0);

  // return zero weights if date is before lookback period
  if (dateIndex + 1 < options.lookbackPeriod) return weightByAsset;

  let covarianceMatrix;
  let variancesVector;

  switch (options.strategyName) {
    case 'EQUAL_DOLLAR_STRATEGY':
      weightByAsset = PortfolioAllocation.equalWeights(returnsByAsset.length);
      break;

    case 'RISK_PARITY_STRATEGY':
      returnsByAsset = returnsByAsset.map((e) =>
        e.slice(dateIndex + 1 - options.lookbackPeriod, dateIndex + 1)
      );
      covarianceMatrix = PortfolioAllocation.sampleCovarianceMatrix(
        ...returnsByAsset
      );
      variancesVector = covarianceMatrix.getVariancesVector().data;
      weightByAsset = PortfolioAllocation.equalRiskBudgetWeights(
        variancesVector
      );
      break;

    case 'MINIMUM_VARIANCE_STRATEGY':
      returnsByAsset = returnsByAsset.map((e) =>
        e.slice(dateIndex + 1 - options.lookbackPeriod, dateIndex + 1)
      );
      covarianceMatrix = PortfolioAllocation.sampleCovarianceMatrix(
        ...returnsByAsset
      );
      weightByAsset = PortfolioAllocation.globalMinimumVarianceWeights(
        covarianceMatrix,
        {
          eps: 1e-10,
          maxIter: 10000,
        }
      );
      break;

    case 'MINIMAX_STRATEGY':
      weightByAsset = PortfolioAllocation.minimaxWeights([...returnsByAsset]);
      break;

    default:
      break;
  }

  weightByAsset = PortfolioAllocation.roundedWeights(weightByAsset, 100);

  return weightByAsset;
};

const validateOptions = (options, returnsByAsset) => {
  // throw error on invalid options properties
  if (
    typeof options.lookbackPeriod !== 'number' ||
    options.lookbackPeriod < 2 ||
    !Number.isInteger(options.lookbackPeriod) ||
    options.lookbackPeriod >= returnsByAsset[0].length
  )
    throw new Error('invalid period ' + options.lookbackPeriod);

  if (
    typeof options.rebalancePeriod !== 'number' ||
    options.rebalancePeriod < 1 ||
    !Number.isInteger(options.rebalancePeriod) ||
    options.rebalancePeriod >= returnsByAsset[0].length
  )
    throw new Error('invalid rebalancePeriod ' + options.rebalancePeriod);
};

const validateContext = () => {};

export default new Strategy(calcWeights, validateOptions, validateContext);
