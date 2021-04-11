import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { debugContextDevtool } from 'react-context-devtool';
import App from './components/App';
import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

const container = document.getElementById('root');
debugContextDevtool(container);
