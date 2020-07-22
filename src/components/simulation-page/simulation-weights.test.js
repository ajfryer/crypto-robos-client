import React from 'react';
import SimulationWeights from 'components/simulation-page/simulation-weights';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'contexts/context.js';

const mockStackedVictoryAreaData = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
].map((weights, i) => {
  return weights.map((w, idx) => ({
    a: new Date(),
    b: w,
    c: 1,
    style: {
      fill: 'transparent',
      stroke: 'white',
    },
  }));
});

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <SimulationWeights data={mockStackedVictoryAreaData} />
    </Theme>
  </PortfoliosContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});
