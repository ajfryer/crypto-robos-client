import React from 'react';
import SimulationEquity from 'components/simulation-page/simulation-equity';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'contexts/context.js';

const mockVictoryLineData = [1, 2, 3].map((r, idx) => ({
  a: new Date(),
  b: r,
}));

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <SimulationEquity data={mockVictoryLineData} />
    </Theme>
  </PortfoliosContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});
