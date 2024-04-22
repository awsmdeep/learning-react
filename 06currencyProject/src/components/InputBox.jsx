import React, { useRef } from 'react'; // Importing React and useRef hook

// InputBox component definition
function InputBox({ 
  label, 
  amount, 
  onAmountChange, 
  onCurrencyChange, 
  currencyOptions = [], 
  selectCurrency = "usd", 
  amountDisable = false, 
  currencyDisable = false, 
  className = "" 
}) {
  const amountInputId = useRef(); // Using useRef hook to generate a unique ID for amount input

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        {/* Label for the amount input */}
        <label htmlFor={amountInputId.current} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        {/* Input for amount */}
        <input
          id={amountInputId.current}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        {/* Dropdown for currency selection */}
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* Mapping over currency options */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox; // Exporting the InputBox component
