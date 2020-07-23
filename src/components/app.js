// node_modules imports
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// project imports
import Theme from 'components/common/theme';
import SplashPage from 'components/splash-page/splash-page';
import SettingsPage from 'components/settings-page/settings-page';
import SimulationPage from 'components/simulation-page/simulation-page';
import Loading from 'components/common/loading';
import ErrorBoundary from 'components/common/error-boundary';

import Context from 'contexts/context';

import PricesService from 'services/prices';
import SimulationService from 'services/simulation/simulation';

import CONFIG from 'configs/config.js';

const App = () => {
  // prices state: stores market price data from backend (backend refreshes prices daily)
  const [prices, setPrices] = useState(null);
  const [pricesLoaded, setPricesLoaded] = useState(false);

  // simulation state: stores simulation data from simulation service (refreshes on form submission)
  const [simulation, setSimulation] = useState(null);
  const [simulationLoaded, setSimulationLoaded] = useState(false);

  const updateSimulation = (settings) => {
    try {
      setSimulationLoaded(false);
      setSimulation(null); // set loaded state to false
      const newSim = SimulationService.simulator(settings, prices); // run simulation
      setSimulation({ data: newSim }); // set new simulation data and loaded to true
      setSimulationLoaded(true);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (pricesLoaded) {
      updateSimulation({
        symbols: CONFIG.DEFAULT_SELECTIONS.SYMBOLS,
        strategy: CONFIG.DEFAULT_SELECTIONS.STRATEGY,
        lookbackPeriod: CONFIG.DEFAULT_SELECTIONS.LOOKBACK,
        rebalancePeriod: CONFIG.DEFAULT_SELECTIONS.REBALANCE,
      });
    }
    // eslint-disable-next-line
  }, [pricesLoaded]);

  // after first render of app
  useEffect(() => {
    const updatePrices = async () => {
      try {
        const fetchedPrices = await PricesService.fetchPrices();
        setPrices(fetchedPrices);
        setPricesLoaded(true);
      } catch (e) {
        console.error(e);
      }
    };

    updatePrices();

    //eslint-disable-next-line
  }, []);

  return (
    <Context.Provider
      value={{ simulation, updateSimulation, setSimulationLoaded }}
    >
      <Theme>
        <ErrorBoundary>
          <Switch>
            <Route path="/simulation">
              {simulation && simulationLoaded ? (
                <SimulationPage />
              ) : (
                <Loading />
              )}
            </Route>
            <Route path="/settings">
              {simulation && simulationLoaded ? <SettingsPage /> : <Loading />}
            </Route>
            <Route>
              <SplashPage />
            </Route>
          </Switch>
        </ErrorBoundary>
      </Theme>
    </Context.Provider>
  );
};

export default App;
