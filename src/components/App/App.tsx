import { useState } from 'react';

import styles from '../../styles/app.module.scss';

const App = (): JSX.Element => {
  const [message, setMessage] = useState('Hello');
  const onClick = () => {
    setMessage('Test');
  };
  return (
    <>
      <div className={styles.header}>{`${message} World`}</div>
      <button type="button" onClick={onClick}>
        Click
      </button>
    </>
  );
};

export default App;
