import React, { FC } from 'react';
import styles from './assets/scss/style.module.scss'

const App: FC = () => {  
  return (
    <div className="App">
      <p className={ styles.red }>example text</p>
    </div>
  );
}

export default App;
