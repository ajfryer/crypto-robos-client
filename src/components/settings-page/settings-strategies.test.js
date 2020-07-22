import React from 'react';
import SettingsStrategies from 'components/settings-page/settings-strategies';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'contexts/context.js';

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <SettingsStrategies
        title={'1. Select Robo:'}
        setName={'selectedStrategy'}
        controlFunc={'function'}
        type={'radio'}
        options={[
          {
            name: 'Equal Weight Robo',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. liquip ex ea commodo consequat. ',
            source: 'https://doi.org/10.1093/rfs/hhm075',
            value: 'EQUAL_DOLLAR_STRATEGY',
          },
          {
            name: 'Risk Parity Robo',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. liquip ex ea commodo consequat.',
            source: 'https://doi.org/10.3905/jpm.2012.38.3.056',
            value: 'RISK_PARITY_STRATEGY',
          },
          {
            name: 'Minimum Variance Robo',
            description:
              'The leftmost portfolio on the mean-variance efficient frontier, the GMV portfolio possesses the smallest attainable volatility among all the mean-variance efficient portfolios.',
            source: 'https://www.jstor.org/stable/j.ctt1bh4c8h',
            value: 'MINIMUM_VARIANCE_STRATEGY',
          },
        ]}
        selectedOptions={'EQUAL_DOLLAR_STRATEGY'}
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
