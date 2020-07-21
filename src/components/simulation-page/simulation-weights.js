// node_modules imports
import React, { useState, useRef, useLayoutEffect, useContext } from 'react';
import styled from 'styled-components';
import * as V from 'victory';
import { ThemeContext } from 'styled-components';
import Color from 'color';

/*
  Chart component renders Victory Line chart with chart datas.
  Fills parent component with useRef.
  Displays legend. 
*/
export const Chart = ({ data, height, width }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <V.VictoryChart
        scale={{ x: 'time' }}
        theme={V.VictoryTheme.material}
        height={height}
        width={width}
        standalone={true}
        padding={{ top: 5, bottom: 0, left: 0, right: 0 }}
        domainPadding={{ x: [0, 0], y: [0, 5] }}
        containerComponent={
          <V.VictoryVoronoiContainer
            responsive={false}
            height={height}
            width={width}
            labels={({ datum }) =>
              `${datum.a.toISOString().split('T')[0]} : ${datum.c} : ${(
                datum.b * 100
              ).toFixed(2)}%`
            }
            voronoiDimension="x"
            labelComponent={
              <V.VictoryTooltip
                cornerRadius={42}
                flyoutStyle={{ fill: 'white' }}
              />
            }
          />
        }
      >
        <V.VictoryStack>
          {data.map((d, i) => {
            //console.log('weights data point', (i * 10) / 100);
            return (
              <V.VictoryArea
                style={{
                  data: {
                    fill: Color(Object.values(theme.color2)[i + 1])
                      .lighten(0)
                      .hex(),
                    fillOpacity: 0,
                    stroke: Object.values(theme.color2)[i + 1],
                    strokeWidth: 6,
                  },
                }}
                key={i}
                data={d}
                x="a"
                y="b"
              />
            );
          })}
        </V.VictoryStack>

        <V.VictoryAxis
          offsetY={30}
          style={{
            axis: { stroke: 'none', width: 0 },
            ticks: { stroke: 'white', size: 0 },
            grid: {
              strokeOpacity: 0.5,
            },
            tickLabels: {
              fill: 'white',
              fontWeight: 900,
              fontSize: 20,
              padding: 5,
            },
            stroke: 'white',
          }}
        />
        <V.VictoryAxis
          dependentAxis
          offsetX={60}
          style={{
            axis: { stroke: 'none', width: 0 },
            ticks: { stroke: 'white', size: 0 },
            tickLabels: {
              fill: 'white',
              fontWeight: 900,
              fontSize: 20,
              padding: 10,
            },
            grid: {
              strokeOpacity: 0.5,
            },
          }}
          tickFormat={(y) => {
            return `${y * 100}%`;
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
  const theme = useContext(ThemeContext);
  //console.log('this is the legend', data);
  return (
    <LegendContainer>
      <h3>Weights By Crypto</h3>
      <LegendContent>
        {data.map((d, i) => (
          <Item key={i}>
            <h4>{d[d.length - 1].c} </h4>
            <h5> {d[d.length - 1].b.toFixed(3) * 100}%</h5>
            <Line
              stroke={Color(d[i].style.fill)
                .lighten(1 - (i * 10) / 100)
                .hex()}
              fill={Object.values(theme.color)[i + 1]}
            />
          </Item>
        ))}
      </LegendContent>
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
  margin: 2rem auto 0px auto;
  width: 100%;
  max-width: 1280px;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 10px;

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
`;

const LegendContainer = styled.div`
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

const LegendContent = styled.div`
  background-color: transparent;
  color: white;
  padding: 0.5rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`;

const Item = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  width: 35px;

  background-color: ${({ fill }) => fill};
  border: 0px solid ${({ stroke }) => stroke};
  align-self: center;
  margin: auto 0;
  height: 10px;
  margin-left: 0.5rem;
`;

export default chartWrapper(Chart);
