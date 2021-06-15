import React, { FC } from 'react';
import styles from './assets/scss/style.module.scss'
import Balloon from './components/atoms/Balloon';

const App: FC = () => {  
  return (
    <div className="App">
      <p className={ styles.red }>example text</p>
      <Balloon>example text</Balloon>
    </div>
  );
}

export default App;
