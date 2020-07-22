import React from 'react';
import SimulationPage from 'components/simulation-page/simulation-page';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'contexts/context.js';

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <SimulationPage />
    </Theme>
  </PortfoliosContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});
