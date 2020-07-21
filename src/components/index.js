// common components
import Common from 'components/common/index';

// home components
import Splash from 'components/splash/index';

// dashboard components
import Dashboard from 'components/dashboard/index';
export { default as equityChart } from 'components/dashboard/equity-chart';
export { default as metricsChart } from 'components/dashboard/metrics-chart';
export { default as rebalanceRadioGroup } from 'components/dashboard/';
export { default as strategiesRadioGroup } from 'components/dashboard/strategies-radio-group';
export { default as symbolsCheckboxGroup } from 'components/dashboard/';

export default {
  Common,
  Splash,
  Dashboard,
};
