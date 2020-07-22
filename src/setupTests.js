import '@testing-library/jest-dom/extend-expect';
// node_modules imports
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

global.React = React;
global.ReactDOM = ReactDOM;
global.act = act;
global.renderer = renderer;
global.Enzyme = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

global.Providers = (props) => (
  <MemoryRouter initialEntries={['/']} initialIndex={0}>
    {props.children}
  </MemoryRouter>
);

global.mockContext = {
  simulation: {
    data: {
      results: {
        equityCurve: [1, 2, 3],
        weightsByAsset: [
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ],
      },
      options: {
        dates: [1, 2, 3],
        symbols: [1, 2, 3],
      },
    },
    loaded: null,
  },
  updateSimulation: () => null,
  setSimulationLoaded: () => null,
};
