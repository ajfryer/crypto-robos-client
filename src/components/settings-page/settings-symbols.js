import React from 'react';
import styled, { css } from 'styled-components';
import SymbolLogo from 'components/common/symbol-logo';

const SymbolsCheckboxGroup = (props) => (
  <Card>
    <Fieldset>
      <Legend>
        <h2>{props.title}</h2>
      </Legend>
      <Options>
        {props.options.map((option, i) => {
          return (
            <OptionLabel
              htmlFor={option.symbol}
              key={i}
              selected={props.selectedOptions.indexOf(option.symbol) > -1}
            >
              <OptionSymbolLogo symbol={option.symbol} />
              <OptionSymbol>{option.symbol}</OptionSymbol>
              <OptionName>{option.name}</OptionName>

              <OptionInput
                id={option.symbol}
                name={props.setName}
                onChange={props.controlFunc}
                value={option.symbol}
                checked={props.selectedOptions.indexOf(option.symbol) > -1}
                type={props.type}
              />
            </OptionLabel>
          );
        })}
      </Options>
    </Fieldset>
  </Card>
);

// custom styled components
const Card = styled.div`
  border-radius: 10px;

  padding: 1rem 0.5rem;
  margin: 2rem 0 0rem 0;
  /*box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);*/
  display: flex;
  flex-direction: column;
  justify-content: center;

  /*
  box-shadow: 0 10px 20px rgba(19, 15, 64, 0.19),
    0 6px 6px rgba(19, 15, 64, 0.23);*/
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    padding: 1rem 1rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    height: 300px;
  }
`;

const Fieldset = styled.fieldset`
  border: none;
  outline: none;
  padding: 0;
`;

const Legend = styled.legend`
  width: 100%;
  margin-bottom: 1rem;
  h2 {
    padding: 0;
    margin: 0;
    color: white;
  }
`;

const OptionSymbol = styled.h3`
  margin-bottom: 0.5rem;
`;

const OptionSymbolLogo = styled(SymbolLogo)`
  color: red;
  fill: red;
  stroke: red;
  background-color: red;

  g {
  }

  & > circle {
    fill: '#FFF';
  }
`;

const OptionName = styled.div``;

const OptionInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  .visually-hidden {
    /* Note, you may want to position the checkbox over top the label and set the opacity to zero instead. It can be better for accessibilty on some touch devices for discoverability. */
  }
`;

const OptionLabel = styled.label`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 1rem 0;
  border: 2px solid;
  border-radius: 10px;

  ${({ selected, ...props }) => {
    return selected
      ? css`
          background-color: ${props.theme.color.primary};
          border-color: ${props.theme.color.primary};
          color: white;

          /*
          box-shadow: 0 3px 6px rgba(19, 15, 64, 0.16),
            0 3px 6px rgba(19, 15, 64, 0.23);*/
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          box-shadow: rgba(72, 52, 212, 0.8) -1px -1px 50px,
            rgba(72, 52, 212, 0.1) 0px 1px 50px;
        `
      : css`
          border-color: rgba(255, 255, 255, 0.5);
          border-color: ${props.theme.color2.grey};
          color: rgba(255, 255, 255, 0.5);
          color: ${props.theme.color2.grey};
          border-style: dashed;
          &:hover {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
          }
          svg {
            opacity: 0.2;
          }
        `;
  }}
`;

const Options = styled.div`
  margin: 0 0 0rem 0;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));

  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`;

export default SymbolsCheckboxGroup;
