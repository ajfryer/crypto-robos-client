// node modules imports
import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';

// project imports
import Navbar from 'components/common/navbar';
import SimulationHero from 'components/simulation-page/simulation-hero';
import SimulationMetrics from 'components/simulation-page/simulation-metrics';
import SimulationEquity from 'components/simulation-page/simulation-equity';
import SimulationWeights from 'components/simulation-page/simulation-weights';
import SimulationContext from 'contexts/context';

// displays the simulation from context with metrics and charts
const SimulationPage = (props) => {
  let { simulation } = useContext(SimulationContext);

  //console.log('simulation page simulation', simulation);

  const simulationData = simulation.data;
  const simulationEquityCurve = simulationData.results.equityCurve;
  const simulationDates = simulationData.options.dates;

  const victoryLineData = simulationEquityCurve.map((r, idx) => ({
    a: new Date(simulationDates[idx]),
    b: r,
  }));

  const stackedVictoryAreaData = simulationData.results.weightsByAsset.map(
    (weights, i) => {
      return weights.map((w, idx) => ({
        a: new Date(simulationDates[idx]),
        b: w,
        c: simulationData.options.symbols[i],
        style: {
          fill: 'transparent',
          stroke: 'white',
        },
      }));
    }
  );

  const metrics = {
    painIndex: simulationData.results.painIndex,
    cumulativeReturn: simulationData.results.cumulativeReturn,
    cagr: simulationData.results.cagr,
    maxDD: simulationData.results.maxDD,
    ulcerIndex: simulationData.results.ulcerIndex,
  };
  return (
    <Wrapper {...props}>
      <Navbar />

      <SimulationHero data={simulationData} />

      <SimulationMetrics data={metrics} />

      <SimulationEquity data={victoryLineData} />

      <SimulationWeights data={stackedVictoryAreaData} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: ${(props) => props.theme.color.secondary};
  min-height: 100vh;

  padding: 0 0rem 3rem 0rem;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.results}) {
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
  }
`;

export default SimulationPage;
