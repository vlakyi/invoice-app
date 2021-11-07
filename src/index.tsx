import * as React from 'react';
import * as ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { debugContextDevtool } from 'react-context-devtool';
import { store, persistor } from './store';

import App from './components/App';
import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

const container = document.getElementById('root');
debugContextDevtool(container);
