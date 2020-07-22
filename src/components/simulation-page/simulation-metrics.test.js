import React from 'react';
import SimulationMetrics from 'components/simulation-page/simulation-metrics';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'contexts/context.js';

const mockMetrics = {
  painIndex: 1,
  cumulativeReturn: 2,
  cagr: 3,
  maxDD: 4,
  ulcerIndex: 5,
};

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <SimulationMetrics data={mockMetrics} />
    </Theme>
  </PortfoliosContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});
