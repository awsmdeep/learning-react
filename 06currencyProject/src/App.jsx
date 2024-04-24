import React, { useState } from 'react'; // Importing React and useState from 'react'
import InputBox from './components/InputBox'// Importing the InputBox component
import useCurrencyInfo from './hooks/usecurrencyinfo'; // Importing the custom hook useCurrencyInfo

function App() {
  const [amount, setAmount] = useState(''); // State for the amount to be converted
  const [from, setFrom] = useState('usd'); // State for the currency from which conversion is done
  const [to, setTo] = useState('inr'); // State for the currency to which conversion is done
  const [converted, setConverted] = useState(0); // State for the converted amount

  const CurrencyInfo = useCurrencyInfo(from); // Fetching currency info based on 'from' currency
  const options = Object.keys(CurrencyInfo); // Extracting currency options from CurrencyInfo object

  const swap = () => { // Function to swap 'from' and 'to' currencies
    // Swapping 'from' and 'to' currencies
    setFrom(to);
    setTo(from);
    // Swapping amount and converted values
    setAmount(converted.toString());
    setConverted(amount);
  };

  const convert = () => { // Function to perform currency conversion
    // Converting amount to 'to' currency
    const convertedAmount = parseFloat(amount) * CurrencyInfo[to];
    // Setting the converted amount
    setConverted(convertedAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert(); // Calling convert function when form is submitted
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setAmount('');
                  setFrom(currency); // Updating 'from' currency state with selected currency
                }}
                selectCurrency={from}
                onAmountChange={(amount) => {
                  setAmount(amount); // Updating amount state with new value
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={converted}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency); // Updating 'to' currency state with selected currency
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
