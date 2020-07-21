import React from 'react';

export default React.createContext({
  simulations: [],
  symbols: [],
  strategies: [],
  getOrAddSimulation: () => null,
  deleteSimulation: () => null
});
