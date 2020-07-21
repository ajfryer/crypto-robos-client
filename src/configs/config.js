export default {
  API_BASE_URL: 'http://localhost:8000/api',
  DEFAULT_OPTIONS: {
    SYMBOLS: [
      { symbol: 'BTC', name: 'Bitcoin' },
      { symbol: 'ETH', name: 'Ethereum' },
      { symbol: 'LTC', name: 'Litecoin' },
      { symbol: 'XRP', name: 'Ripple' },
      { symbol: 'XTZ', name: 'Tezos' },
      { symbol: 'LINK', name: 'Chainlink' },
      { symbol: 'XMR', name: 'Monero' },
    ],
    STRATEGY: [
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
    ],
    REBALANCE: [
      { name: 'weekly', value: 7 },
      { name: 'monthly', value: 30 },
      { name: 'quarterly', value: 90 },
    ],
  },
  DEFAULT_SELECTIONS: {
    SYMBOLS: ['BTC', 'ETH', 'LINK'],
    STRATEGY: 'EQUAL_DOLLAR_STRATEGY',
    REBALANCE: Number(30),
    LOOKBACK: Number(30),
  },
};
