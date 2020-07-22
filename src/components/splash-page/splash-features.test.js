import React from 'react';
import SplashFeatures from 'components/splash-page/splash-features';

import Theme from 'components/Common/theme';
// react context
import SimulationContext from 'contexts/context.js';

const component = (
  <SimulationContext.Provider value={mockContext}>
    <Theme>
      <SplashFeatures />
    </Theme>
  </SimulationContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});
