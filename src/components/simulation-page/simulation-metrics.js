import React from 'react';

import styled from 'styled-components';

const MetricsTable = (props) => {
  Object.keys(props.data).forEach(function (item) {
    props.data[item] = Math.floor(props.data[item] * 100) + '%';
  });

  //console.log('Metrics table data', props.data);

  return (
    <Wrapper>
      <Card>
        <h3>Annualized Return</h3>
        <Percent v="p">{props.data.cagr}</Percent>
      </Card>
      <Card>
        <h3>Ulcer Index</h3>
        <Percent v="p">{props.data.ulcerIndex}</Percent>
      </Card>
      <Card>
        <h3>Maximum Drawdown</h3>
        <Percent v="n">-{props.data.maxDD}</Percent>
      </Card>
    </Wrapper>
  );
};

//custom styles
const Wrapper = styled.section`
  display: flex;

  max-width: 1280px;
  margin: 0px auto 0px auto;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const Card = styled.div`
  padding: 1rem 0.5rem;
  background-color: rgba(48, 51, 107, 1);
  background-color: transparent;
  border-radius: 10px;

  height: 100px;
  width: 33%;
  color: white;
  font-size: 1.75rem;
  font-weight: 900;

  h3 {
    text-align: left;
    margin-top: auto;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.color.tertiary};
  }
`;

const Percent = styled.span`
  color: ${({ v, theme }) =>
    v === 'p' ? theme.color.accent : theme.color.tertiary};
  color: white;
`;

export default MetricsTable;
