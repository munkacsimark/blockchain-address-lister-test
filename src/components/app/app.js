import React from 'react';
import style from './app.module.css';

const App = () => {
  console.log(style)
  return (
    <div className={style.test}>
      helloka
    </div>
  );
}

export default App;
