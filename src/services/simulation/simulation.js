// calculate index returns with db data

import { Simulation } from 'portfolio-tools';
import {
  calcReturns,
  calcTotalReturns,
} from 'portfolio-tools/src/math/returns';
import PAStrategies from 'services/simulation/strategies';
import PortfolioAnalytics from 'portfolio-analytics';

export function simulator(formPayload, prices) {
  let simPricesByAsset = [];
  formPayload.symbols.forEach((s) => {
    const symbolIndex = prices.symbols.indexOf(s);
    const symbolPrices = prices.pricesByAsset[symbolIndex];
    simPricesByAsset.push(symbolPrices);
  });
  //console.log('simPricesByAsset', simPricesByAsset);

  // trim simPricesByAsset to minimum length
  const min = simPricesByAsset.reduce((prev, next) =>
    prev.length > next.length ? next : prev
  ).length;
  simPricesByAsset = simPricesByAsset.map((p) => p.slice(p.length - min));

  // trim prices.dates to same length
  const trimmedDates = prices.dates.slice(prices.dates.length - min);

  // get returns from prices
  const simReturnsByAsset = simPricesByAsset.map((e) => calcReturns(e));
  //console.log('converted prices to returns', simReturnsByAsset);

  // get formatted data from db
  const sim = new Simulation(simReturnsByAsset, PAStrategies, {
    lookbackPeriod: formPayload.lookbackPeriod,
    rebalancePeriod: formPayload.rebalancePeriod,
    symbols: formPayload.symbols,
    dates: trimmedDates,
    strategyName: formPayload.strategy,
    isReturns: true,
  });

  sim.run();

  if (!sim.results) throw new Error('no simulation results');

  // filter dates with 0 return
  let dateIndex;
  for (dateIndex = 0; dateIndex < sim.options.dates.length; dateIndex++) {
    if (sim.results.returns[dateIndex] > 0) break;
  }
  sim.results.returns = sim.results.returns.slice(dateIndex);
  sim.options.dates = sim.options.dates.slice(dateIndex);
  sim.results.weightsByAsset = sim.results.weightsByAsset.map((w) =>
    w.slice(dateIndex)
  );
  if (sim.results.returns.length === 0 || sim.options.dates.length === 0)
    throw new Error('Empty nonzero returns/timestamps');

  // calc total returns

  sim.results.equityCurve = calcTotalReturns(sim.results.returns);

  sim.results.painIndex = PortfolioAnalytics.painIndex(sim.results.equityCurve);
  sim.results.cumulativeReturn = PortfolioAnalytics.cumulativeReturn(
    sim.results.equityCurve
  );
  sim.results.cagr = PortfolioAnalytics.cagr(
    sim.results.equityCurve,
    sim.options.dates
  );
  sim.results.maxDD = PortfolioAnalytics.maxDrawdown(sim.results.equityCurve);
  sim.results.ulcerIndex = PortfolioAnalytics.ulcerIndex(
    sim.results.equityCurve
  );

  return sim;
}

export default {
  simulator,
};
