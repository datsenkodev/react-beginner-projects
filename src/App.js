import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = React.useState('BTC')
  const [toCurrency, setToCurrency] = React.useState('ETH')
  const [fromPrice, setFromPrice] = React.useState(0)
  const [toPrice, setToPrice] = React.useState(0)

  const [rates, setRates] = React.useState({})

  // const ratesPrice = rates.data[1].price_usd

  React.useEffect(() => {
    fetch('https://api.coinlore.net/api/tickers/')
    .then((res) => res.json())
    .then((json) => {
      setRates(json)
      // console.log(json.data[0])
      // console.log(json.data[0].price_usd)
    })
    .catch((err) => alert(err))
  }, [])

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromPrice]
    const result = price * rates[toPrice]
    setToPrice(result)
    setFromPrice(value)
    console.log(rates)
    console.log(price)
    console.log(result)
    // console.log(value)
  }

  const onChangeToPrice = (value) => {
    setToPrice(value)
  }




  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice} />
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice} />
    </div>
  );
}

export default App;
