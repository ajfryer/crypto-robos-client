import React from 'react';
import SettingsRebalance from 'components/settings-page/settings-rebalance';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'contexts/context.js';

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <SettingsRebalance
        title={'3. Select Rebalance:'}
        setName={'selectedRebalance'}
        controlFunc={'function'}
        type={'radio'}
        options={[
          { name: 'weekly', value: 7 },
          { name: 'monthly', value: 30 },
          { name: 'quarterly', value: 90 },
        ]}
        selectedOptions={Number(30)}
      />
    </Theme>
  </PortfoliosContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});
