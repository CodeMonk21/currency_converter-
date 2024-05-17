
function InputBox({ label, amount, currency, handleAmountChange, handleCurrencyChange, currencyOptions = ["usd", "inr"] }) {

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="" style={{ width: "60%" }}>
                <label className="text-black/40 mb-3 inline-block text-lg">{label}</label>
                <input
                    className="outline-none w-full bg-transparent py-1.5 text-lg"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-3 w-full text-lg">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" onChange={handleCurrencyChange} value={currency} >
                    {
                        currencyOptions.map((currency) => {
                            return (
                                <option value={currency}>{currency}</option>
                            )
                        })
                    }

                </select>
            </div>
        </div>
    );
}

export default InputBox;
