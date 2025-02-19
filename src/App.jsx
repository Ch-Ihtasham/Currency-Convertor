import { useState } from 'react'
import UseCurrencyInfo from './hooks/UseCurrencyInfo'
import { InputBox } from './components'

function App() {

  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState('')
  const currencyInfo = UseCurrencyInfo(from)
  const options = currencyInfo ? Object.keys(currencyInfo) : [];
  function convert() {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    } else {
      setConvertedAmount(0);
    }
  }
  function swap() {
    setFrom(preFrom => {
      setTo(preFrom)
      return to
    })
  }
  return (

    <div>
      <h1>Currency Convertor</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        convert()
      }}>
        <InputBox
          label={'From'}
          amount={amount}
          currencyOptions={options}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          selectCurrency={from}
        />
        <button onClick={swap}>swap</button>
        <InputBox
          label={'to'}
          amount={convertedAmount}
          currencyOptions={options}
          onAmountChange={setConvertedAmount}
          onCurrencyChange={setTo}
          selectCurrency={to}
        />
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  )
}

export default App
