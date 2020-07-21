import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as EDIcon } from 'assets/img/ed_icon.svg';
import { ReactComponent as RPIcon } from 'assets/img/rp_icon.svg';
import { ReactComponent as MVIcon } from 'assets/img/mv_icon.svg';

const StrategiesRadioGroup = (props) => {
  //console.log('selected value on strategies', props.selectedOptions);
  return (
    <Card>
      <Fieldset {...props}>
        <Legend>
          <h2>{props.title}</h2>
        </Legend>
        <Options>
          {props.options.map((option, idx) => {
            const selected = props.selectedOptions === option.value;
            return (
              <OptionLabel
                htmlFor={option.symbol}
                key={idx}
                selected={selected}
              >
                {(() => {
                  switch (option.value) {
                    case 'EQUAL_DOLLAR_STRATEGY':
                      return selected ? <EDIcon /> : <EDIcon />;
                    case 'RISK_PARITY_STRATEGY':
                      return selected ? <RPIcon /> : <RPIcon />;
                    case 'MINIMUM_VARIANCE_STRATEGY':
                      return selected ? <MVIcon /> : <MVIcon />;
                    default:
                      return null;
                  }
                })()}
                <OptionName>{option.name}</OptionName>
                <OptionDescription>{option.description}</OptionDescription>

                <OptionInput
                  id={option.value}
                  name={props.setName}
                  onChange={props.controlFunc}
                  value={option.value}
                  checked={props.selectedOptions === option.value}
                  type={props.type}
                />
              </OptionLabel>
            );
          })}
        </Options>
      </Fieldset>
    </Card>
  );
};

// custom styled components
const Card = styled.div`
  border-radius: 10px;
  padding: 1rem 0.5rem;

  margin: 0 0 0rem 0;
  background-color: transparent;

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
`;

const Legend = styled.legend`
  width: 100%;
  margin-bottom: 1rem;
  h2 {
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.color.secondary};
    color: white;
  }
`;

const Options = styled.div`
  margin: 0 0 0rem 0;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
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
  padding: 1rem 1rem;
  border: 2px solid;
  border-radius: 10px;

  ${({ selected, ...props }) => {
    return selected
      ? css`
          background-color: ${props.theme.color.primary};
          border-color: ${props.theme.color.primary};
          color: white;
          box-shadow: rgba(72, 52, 212, 0.8) -1px -1px 50px,
            rgba(72, 52, 212, 0.1) 0px 1px 50px;

          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        `
      : css`
          border-color: ${props.theme.color2.grey};
          border-color: rgba(255, 255, 255, 0.5);

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

  svg {
    margin-bottom: 0.5rem;
    width: 66px;
    height: 66px;
  }
`;

const OptionName = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const OptionDescription = styled.div``;

const OptionInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export default StrategiesRadioGroup;
