import React from 'react';
import SettingsStrategies from 'components/settings-page/settings-strategies';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'contexts/context.js';

const mockOnChange = jest.fn();

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <SettingsStrategies
        title={'2. Select Cryptos:'}
        setName={'selectedSymbols'}
        type={'checkbox'}
        controlFunc={mockOnChange}
        options={[
          { symbol: 'BTC', name: 'Bitcoin' },
          { symbol: 'ETH', name: 'Ethereum' },
          { symbol: 'LTC', name: 'Litecoin' },
          { symbol: 'XRP', name: 'Ripple' },
          { symbol: 'XTZ', name: 'Tezos' },
          { symbol: 'LINK', name: 'Chainlink' },
          { symbol: 'XMR', name: 'Monero' },
        ]}
        selectedOptions={['BTC', 'ETH', 'LINK']}
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
