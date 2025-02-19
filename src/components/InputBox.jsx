import React from 'react'

export default function InputBox(
    {
        label,
        amount,
        onAmountChange,
        selectCurrency,
        onCurrencyChange,
        currencyOptions = []
    }
) {
    return (
        <div className='flex border border-black'>
            <div className='flex flex-col'>
                <label htmlFor="">{label}</label>
                <input type="number"
                    placeholder='Enter the amount'
                    id=""
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div>
                <div>Select Currency</div>
                <select name="" id="" value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
