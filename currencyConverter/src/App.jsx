


import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currencies, setCurrencies] = useState({});
  const [amount, setAmount] = useState(12);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const fetchCurrencies = async () => {
    try {
      let response = await fetch('https://api.frankfurter.app/currencies');
      let data = await response.json();
      setCurrencies(data);
    } catch (error) {
      console.log(`Found error: `, error);
    }
  };

  const convertCurrency = async () => {
    try {
      let response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      let data = await response.json();
      setConvertedAmount(data.rates[toCurrency]);
    } catch (error) {
      console.log(`Found error: `, error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConvert = () => {
    convertCurrency();
  };

  return (
    <>
      <div className='max-w-xl mx-auto my-10 p-5 rounded-lg bg-slate-300 shadow-md'>
        <h1 className='text-5xl text-blue-700 flex justify-center items-center font-extrabold mb-5'>Currency Converter</h1>

        <div className='mb-5'>
          <label htmlFor="Amount" className='block text-sm font-medium text-gray-700'>Amount:</label>
          <input 
            onChange={handleAmountChange} 
            type="number" 
            value={amount} 
            className='p-2 w-full' 
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="fromCurrency" className='block text-sm font-medium text-gray-700'>From:</label>
          <select 
            id="fromCurrency" 
            value={fromCurrency} 
            onChange={(e) => setFromCurrency(e.target.value)} 
            className='p-2 w-full'
          >
            {Object.entries(currencies).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </div>

        <div className='mb-5'>
          <label htmlFor="toCurrency" className='block text-sm font-medium text-gray-700'>To:</label>
          <select 
            id="toCurrency" 
            value={toCurrency} 
            onChange={(e) => setToCurrency(e.target.value)} 
            className='p-2 w-full'
          >
            {Object.entries(currencies).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </div>

        <div className='flex justify-end mt-6'>
          <button 
            onClick={handleConvert} 
            className='text-xl py-3 px-5 bg-indigo-700 text-white rounded-lg hover:bg-indigo-900 focus:ring-2 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2'
          >
            Convert
          </button>
        </div>

        {convertedAmount && (
          <div className='flex justify-end mt-5 text-green-600 text-xl'>
            Converted amount: {convertedAmount}
          </div>
        )}
      </div>
    </>
  );
}

export default App;

