import React from 'react';
import SimulationHero from 'components/simulation-page/simulation-hero';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'contexts/context.js';

const mockSimulationData = {
  results: {
    equityCurve: [1, 2, 3],
    weightsByAsset: [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
  },
  options: {
    dates: [1, 2, 3],
    symbols: [1, 2, 3],
  },
};

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <SimulationHero data={mockSimulationData} />
    </Theme>
  </PortfoliosContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});
