import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import CONFIG from 'configs/config';
import SimulationContext from 'contexts/context';

import styled from 'styled-components';

import StrategiesRadioGroup from 'components/settings-page/settings-strategies';
import SymbolsCheckboxGroup from 'components/settings-page/settings-symbols';
import RebalanceRadioGroup from 'components/settings-page/settings-rebalance';

const SettingsForm = () => {
  const { DEFAULT_OPTIONS, DEFAULT_SELECTIONS } = CONFIG;
  const [state, setState] = useState({
    strategyOptions: DEFAULT_OPTIONS.STRATEGY,
    selectedStrategy: DEFAULT_SELECTIONS.STRATEGY,
    symbolOptions: DEFAULT_OPTIONS.SYMBOLS,
    selectedSymbols: DEFAULT_SELECTIONS.SYMBOLS,
    rebalanceOptions: DEFAULT_OPTIONS.REBALANCE,
    selectedRebalance: DEFAULT_SELECTIONS.REBALANCE,
    pending: false,
  });

  let { updateSimulation, setSimulationLoaded } = useContext(SimulationContext);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //await setSimulationLoaded(false);

    setState({
      ...state,
      pending: true,
    });

    setTimeout(function () {
      const formPayload = {
        symbols: state.selectedSymbols,
        strategy: state.selectedStrategy,
        lookbackPeriod: Number(30),
        rebalancePeriod: Number(state.selectedRebalance),
      };

      updateSimulation(formPayload);

      history.push('/simulation');

      setState({
        ...state,
        pending: false,
      });
    }, 100);

    //setSimulationLoaded(true);
  };

  const handleSymbolChange = (e) => {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (state.selectedSymbols.indexOf(newSelection) > -1) {
      newSelectionArray = state.selectedSymbols.filter(
        (s) => s !== newSelection
      );
    } else {
      newSelectionArray = [...state.selectedSymbols, newSelection];
    }
    setState({
      ...state,
      selectedSymbols: newSelectionArray,
    });
  };

  const handleStrategyChange = (e) => {
    setState({
      ...state,
      selectedStrategy: e.target.value,
    });
  };

  const handleRebalanceChange = (e) => {
    setState({
      ...state,
      selectedRebalance: Number(e.target.value),
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <StrategiesRadioGroup
        title={'1. Select Robo:'}
        setName={'selectedStrategy'}
        controlFunc={handleStrategyChange}
        type={'radio'}
        options={state.strategyOptions}
        selectedOptions={state.selectedStrategy}
      />
      <SymbolsCheckboxGroup
        title={'2. Select Cryptos:'}
        setName={'selectedSymbols'}
        type={'checkbox'}
        controlFunc={handleSymbolChange}
        options={state.symbolOptions}
        selectedOptions={state.selectedSymbols}
      />
      <RebalanceRadioGroup
        title={'3. Select Rebalance:'}
        setName={'selectedRebalance'}
        controlFunc={handleRebalanceChange}
        type={'radio'}
        options={state.rebalanceOptions}
        selectedOptions={state.selectedRebalance}
      />
      <Button type="submit" disabled={state.pending}>
        {!state.pending ? '4. Submit' : 'Loading...'}
      </Button>
    </FormWrapper>
  );
};

//private styled components
const Button = styled.button`
  background-color: ${(props) => props.theme.color.accent};
  border: 1px solid ${(props) => props.theme.color.accent};
  border-radius: 5px;
  padding: 1.5rem 3rem;
  color: white;
  font-weight: bold;
  letter-spacing: 0.5px;
  font-size: 1rem;
  font-weight: 600;
  width: 250px;
  margin: 6rem auto 4rem auto;
  box-shadow: rgba(34, 166, 179, 1) 1px 4px 350px,
    rgba(34, 166, 179, 0.1) -1px -4px 350px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  box-shadow: rgba(190, 46, 221, 0.2) -1px -4px 150px,
    rgba(190, 46, 221, 0.2) 0px 4px 150px;
  border-radius: 10px;
`;

export default SettingsForm;
