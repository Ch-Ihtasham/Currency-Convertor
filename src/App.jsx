import { useState } from 'react'

import UseCurrencyInfo from './hooks/UseCurrencyInfo'
function App() {
  const [count, setCount] = useState(0)
  const currency = UseCurrencyInfo('usd')
  return (
    <div>
      hello world

    </div>
  )
}

export default App
