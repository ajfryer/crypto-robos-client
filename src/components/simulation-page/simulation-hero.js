import React from 'react';
import styled from 'styled-components';

const ResultsHero = (props) => {
  //console.log('results hero props', props);
  let strategy = '';
  let rebalance = '';
  let symbols = [];

  if (props.data.options) {
    strategy = props.data.options.strategyName;
    rebalance = props.data.options.rebalancePeriod;
    symbols = props.data.options.symbols;

    switch (strategy) {
      case 'EQUAL_DOLLAR_STRATEGY':
        strategy = 'Equal Weight Robo';
        break;
      case 'MINIMUM_VARIANCE_STRATEGY':
        strategy = 'Minimum Variance Robo';
        break;
      case 'RISK_PARITY_STRATEGY':
        strategy = 'Risk Parity Robo';
        break;
      default:
        break;
    }

    switch (rebalance) {
      case 90:
        rebalance = 'Quarterly Rebalance';
        break;
      case 30:
        rebalance = 'Monthly Rebalance';
        break;
      case 7:
        rebalance = 'Weekly Rebalance';
        break;
      default:
        break;
    }
  }

  return (
    <Section>
      <Header>
        <h1>{strategy}</h1>
        <p>
          {symbols.map((s, i) => {
            if (i !== symbols.length - 1) return s + ', ';
            else return s;
          })}
          <br /> {rebalance}
        </p>
      </Header>
    </Section>
  );
};

const Section = styled.section`
  background-color: ${(props) => props.theme.color.secondary};
`;

const Header = styled.header`
  max-width: 1280px;
  padding: 3rem 0;
  color: white;
  margin: 0 auto;
  padding: 3rem 0.5rem;

  h1 {
    max-width: 1280px;
    margin: 0px auto 0px auto;
    text-align: left;
    font-weight: 700;
  }

  p {
    margin: 0;
    text-align: left;
    font-weight: 400;
    margin-top: 0.5rem;
    line-height: 1.5;
    font-size: 1.15rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    p {
    }
  }
`;

export default ResultsHero;
