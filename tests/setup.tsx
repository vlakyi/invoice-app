import React, { ReactElement } from 'react';
import {
  render as rtlRender,
  cleanup,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// Import your own reducer
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import rootReducer from '../src/store/rootReducer';
import { initialState } from '../src/store';

beforeEach(async () => {
  jest.clearAllMocks();
});

afterEach(cleanup);

export function windowResize(width: number): void {
  global.innerWidth = width;
  global.dispatchEvent(new Event('resize'));
}

interface ExtendedRenderOptions extends RenderOptions {
  MemoryRouterOptions?: MemoryRouterProps;
}

function render(
  ui: ReactElement,
  renderOptions?: ExtendedRenderOptions,
  preloadedState = initialState
): RenderResult {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });
  const Wrapper: React.FC = ({ children }) => {
    return (
      <Provider store={store}>
        <MemoryRouter {...renderOptions?.MemoryRouterOptions}>
          {children}
        </MemoryRouter>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
