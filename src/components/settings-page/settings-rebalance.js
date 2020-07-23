import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const StrategiesRadioGroup = (props) => {
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
              <OptionLabel htmlFor={option.value} selected={selected} key={idx}>
                <OptionName>{option.name}</OptionName>
                <Header>
                  <HL>every</HL>
                  <RebalanceIcon className="fa-stack fa-3x" selected={selected}>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="fa-stack-2x"
                    />
                    <CalendarNum className="fa-stack-1x" selected={selected}>
                      {option.value}
                    </CalendarNum>
                  </RebalanceIcon>
                  <HL>days&nbsp;&nbsp;</HL>
                </Header>

                <OptionInput
                  id={option.value}
                  className="form-checkbox"
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

const Card = styled.div`
  border-radius: 10px;
  padding: 1rem 0.5rem;
  margin: 2rem 0 0.5rem 0;

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
    color: white;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 900;
`;

const HL = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
`;

const OptionName = styled.h3`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 2rem;
  text-transform: capitalize;
`;

const OptionInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const OptionLabel = styled.label`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 2rem 1rem;
  border: 2px solid;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ selected, ...props }) => {
    return selected
      ? css`
          background-color: ${props.theme.color.primary};
          border-color: ${props.theme.color.primary};
          color: white;
          box-shadow: rgba(72, 52, 212, 0.8) -1px -1px 50px,
            rgba(72, 52, 212, 0.1) 0px 1px 50px;
        `
      : css`
          border-color: ${props.theme.color2.grey};
          border-style: dashed;
          color: ${props.theme.color2.grey};
          svg {
            opacity: 0.2;
          }
        `;
  }}
`;

const RebalanceIcon = styled.span`
  ${({ selected, ...props }) => {
    return selected
      ? css`
          color: white;
        `
      : css``;
  }}
`;

const CalendarNum = styled.strong`
  margin-top: 2.3rem;
  ${({ selected, ...props }) => {
    return selected
      ? css`
          color: ${props.theme.color.primary};
          background-color: inherit;
        `
      : css`
          color: ${props.theme.color2.grey};
        `;
  }}
`;

const Options = styled.div`
  margin: 0 0 0rem 0;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }
`;

export default StrategiesRadioGroup;
