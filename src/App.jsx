import { useEffect, useState } from 'react'
import InputBox from './components/InputBox';
import useCurrency from './hooks/useCurrency';

function App() {

  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")

  const data = useCurrency(fromCurrency)

  function convertAmount(){
    let amount = (fromAmount* data[toCurrency]).toFixed(2)
    setToAmount(Number(amount))
  }

  function swapCurrency(){
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }
  
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage: `url('${"https://i.ibb.co/4d3PNcK/currency.jpg"}')`,backgroundPosition:"center",backgroundSize:"cover"}}>
      <div className="w-full">
        <div className="w-full max-w-xl mx-auto border border-gray-60 rounded-lg p-6 backdrop-blur-sm bg-white/30">
          <div>
            {/* From Input */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={fromAmount}
                currency={fromCurrency}
                handleAmountChange={(amount)=> amount<0?setFromAmount(0):setFromAmount(amount)}
                handleCurrencyChange={(currency)=> setFromCurrency(currency)}
                currencyOptions={Object.keys(data)}
              />
            </div>
            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white text-lg px-2 py-0.5" onClick={swapCurrency}>swap</button>
            </div>
            {/* To Input */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={toAmount}
                currency={toCurrency}
                handleAmountChange={(amount)=> amount<0?setToAmount(0):setToAmount(amount)}
                handleCurrencyChange={(currency)=> setToCurrency(currency)}
                currencyOptions={Object.keys(data)}
              />
            </div>
            {/* Convert button */}
            <button type="button" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convertAmount}>
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
