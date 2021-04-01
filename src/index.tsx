import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
