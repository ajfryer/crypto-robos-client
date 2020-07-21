// node_modules imports
import React, { useState, useRef, useLayoutEffect, useContext } from 'react';
import styled from 'styled-components';
import * as V from 'victory';
import { ThemeContext } from 'styled-components';

/*
  Chart component renders Victory Line chart with chart datas.
  Fills parent component with useRef.
  Displays legend. 
*/
export const Chart = ({ data, height, width }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <svg style={{ height: 0 }}>
        <defs>
          {/*
          <linearGradient
            id="returns-chart-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(104, 109, 224,1.0)" />
            <stop offset="100%" stopColor="rgba(104, 109, 224,1.0)" />
          </linearGradient>*/}
        </defs>
        <defs>
          <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
            <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
          </pattern>
        </defs>
      </svg>
      <V.VictoryChart
        scale={{ x: 'time' }}
        theme={V.VictoryTheme.material}
        height={height}
        width={width}
        standalone={true}
        padding={{ top: 0, bottom: 16, left: 0, right: 0 }}
        domainPadding={{ x: [0, -1] }}
        containerComponent={
          <V.VictoryVoronoiContainer
            responsive={false}
            voronoiDimension="x"
            height={height}
            width={width}
            labels={({ datum }) =>
              `${datum.a.toISOString().split('T')[0]}, ${datum.b}`
            }
          />
        }
      >
        <V.VictoryArea
          style={{
            data: {
              fill: `${theme.color.accent}`,
              fillOpacity: 0,
              stroke: `#fff`,
              strokeWidth: 4,
            },
            labels: {},
            axisLabel: { fontSize: 20, padding: 5 },
          }}
          interpolation="natural"
          data={data}
          x="a"
          y="b"
          padding={{ top: 0, bottom: 0, left: 0, right: 500 }}
        />
        <V.VictoryAxis
          offsetY={50}
          style={{
            axis: { stroke: 'none', width: 0 },
            ticks: { stroke: `${theme.color.muted}`, size: 0 },
            tickLabels: {
              fill: 'white',
              fontSize: 20,

              fontWeight: 900,
            },
            grid: {
              strokeOpacity: 0.5,
            },
          }}
          padding={{ top: 0, bottom: 0, left: 10, right: 500 }}
        />
        <V.VictoryAxis
          dependentAxis
          offsetX={50}
          style={{
            axis: { stroke: 'none', width: 0 },
            ticks: { stroke: `#ffffff`, size: 0 },
            tickLabels: {
              fill: `#ffffff`,
              fontWeight: 900,
              fontSize: 20,
              padding: 10,
            },
            grid: {
              strokeOpacity: 0.5,
            },
          }}
          tickFormat={(y) => {
            return `$${y}`;
          }}
        />
      </V.VictoryChart>
    </>
  );
};

// chart fills parent container with useRef
const chartWrapper = (ChartComponent) => {
  return (props) => {
    // get chart container
    const containerRef = useRef();

    // create state for dimensions
    const [dims, setDims] = useState({
      width: 1,
      height: 1,
    });

    // updates state dimensions
    const updateDims = () => {
      const current = containerRef.current;
      setDims({
        width: Number(current.clientWidth),
        height: Number(current.clientHeight),
      });
    };

    // avoid "flicker" by updating dims after DOM update but before render
    useLayoutEffect(() => {
      updateDims();
      window.addEventListener('resize', updateDims);

      // clean up event listener
      return () => {
        window.removeEventListener('resize', updateDims);
      };
    }, []);

    return (
      <Section>
        <Card>
          <Legend data={props.data} />
          <ChartContainer ref={containerRef}>
            <ChartComponent
              {...props}
              width={dims.width}
              height={dims.height}
            />
          </ChartContainer>
        </Card>
      </Section>
    );
  };
};

// legend for chart component
const Legend = ({ data }) => {
  //console.log('equity chart legend data', data);
  //console.log('rounded number', data[data.length - 1].b.toFixed(2));
  return (
    <LegendContainer>
      <h3>Simulated Growth of $1</h3>
      <h4>${data[data.length - 1].b.toFixed(2)}</h4>
      <h5>{Math.round((data[data.length - 1].b / data[0].b - 1) * 100)}% </h5>
      {/*
      <h5>
        <i>
          {new Date(chartDatas[0].data[0].x).toDateString()} to{' '}
          {new Date(
            chartDatas[0].data[chartDatas[0].data.length - 1].x
          ).toDateString()}
        </i>
      </h5>
      <div>
        {chartDatas.map((cd, i) => (
          <Item key={i}>
            <h4>{cd.name}</h4>
            <Line color={cd.style.data.stroke} />
          </Item>
        ))}
      </div>
      */}
    </LegendContainer>
  );
};

// private styled components
const Section = styled.div`
  width: 100%;

  padding: 0 0.5rem;
  h2 {
    display: inline-block;
  }
`;

const Card = styled.div`
  margin: 2rem auto 50px auto;
  width: 100%;
  max-width: 1280px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.secondary};
  box-shadow: rgba(190, 46, 221, 0.25) 0px 4px 150px;
  padding: 1rem 0.5rem;
  color: white;

  height: auto;
  display: flex;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 420px;

  svg:not(:root) {
    overflow: visible;
  }
`;

const LegendContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  list-style: none;
  padding: 0;

  h3 {
    margin-bottom: 0.5rem;
  }

  h5 {
    margin-bottom: 0.75rem;
  }

  h4 {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  div {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default chartWrapper(Chart);
