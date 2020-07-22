import React from 'react';
import SymbolLogo from 'components/common/symbol-logo';

import Theme from 'components/Common/theme';
// react context
import SimulationContext from 'contexts/context.js';

const component = (
  <SimulationContext.Provider value={mockContext}>
    <Theme>
      <SymbolLogo symbol={'symbol'} />
    </Theme>
  </SimulationContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});
