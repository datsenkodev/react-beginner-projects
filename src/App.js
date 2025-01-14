import React from 'react';
import './index.scss';

function App() {
  const [counter, SetCounter] = React.useState(0)

  const onClickMinus = () => {
    SetCounter(counter - 1)
  }
  const onClickPlus = () => {
    SetCounter(counter + 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
