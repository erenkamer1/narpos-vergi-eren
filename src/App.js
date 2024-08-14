import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(100);
  const [tlLevy, setTlLevy] = useState(1);
  const [getFundLevy, setGetFundLevy] = useState(2.5);
  const [covidLevy, setCovidLevy] = useState(1);
  const [NHIL, setNHIL] = useState(2.5);
  const [VAT, setVAT] = useState(15);
  const [total, setTotal] = useState(0);
  const [amountAfterVat, setAmountAfterVat] = useState("");
  const [valueBeforeVat, setValueBeforeVat] = useState("N/A");

  let handleChange = (event) => {
    let amount = parseFloat(event.target.value) ;
    setValue(amount);

    if (amount < 1) {
      setTlLevy(0);
      setGetFundLevy(0);
      setCovidLevy(0);
      setNHIL(0);
      setTotal(0);
      setValueBeforeVat("N/A");
    } else {
      const tlLevyValue = (amount * 0.01).toFixed(2);
      const getFundLevyValue = (amount * 0.025).toFixed(2);
      const covidLevyValue = (amount * 0.01).toFixed(2);
      const NHILValue = (amount * 0.025).toFixed(2);
      setTlLevy(tlLevyValue);
      setGetFundLevy(getFundLevyValue);
      setCovidLevy(covidLevyValue);
      setNHIL(NHILValue);
     
   
      let temp = (amount + parseFloat(tlLevyValue) + parseFloat(getFundLevyValue) + parseFloat(covidLevyValue) + parseFloat(NHILValue))
      setValueBeforeVat(temp.toFixed(2));
      const VATValue = (temp * VAT / 100);
      setAmountAfterVat(VATValue.toFixed(2));

      setTotal((temp + VATValue).toFixed(2));
    }
  };

  return (
    <>
    <h1 className='eren'>Eren Kamer</h1>
    <div className="our-invoice">
      <div className='titles'>
        <h1 className='our'>Our invoice</h1>
        <h1 className='amount-title'>Amount</h1>
      </div>
      <div className='invoice-item'>
        <h2>Value</h2>
        <input className='input' type="number" value={value} onChange={handleChange} />
      </div>
      <div className='invoice-item'>
        <h2>TL Levy (1%)</h2>
        <input className='input' readOnly value={tlLevy} />
      </div>
      <div className='invoice-item'>
        <h2>Get Fund Levy - 2.5%</h2>
        <input className='input' readOnly value={getFundLevy} />
      </div>
      <div className='invoice-item'>
        <h2>Covid Levy - 1%</h2>
        <input className='input' readOnly value={covidLevy} />
      </div>
      <div className='invoice-item'>
        <h2>NHIL (2.5%)</h2>
        <input className='input' readOnly value={NHIL} />
      </div>
      <div className='invoice-item'>
        <h2>Value before VAT</h2>
        <input className='input' readOnly value={valueBeforeVat} />
      </div>
      <div className='invoice-item'>
        <h2>VAT 15%</h2>
        <input className='input' readOnly  value={amountAfterVat} />
      </div>
      <div className='invoice-item'>
        <h2>All taxes inclusive</h2>
        <input className='input' readOnly value={total} />
      </div>
    </div>
    <div className="our-invoice">
    <div className='titles'>
      <h1 className='our'>Converting an Amount from Inclusive to Exclusive</h1>
      <h1 className='amount-title'>Amount</h1>
    </div>
    <div className='invoice-item'>
      <h2>Sales amount - Inclusive of all taxes and VAT</h2>
      <input className='input' type="number" readOnly value={total}  />
    </div>
    <div className='invoice-item'>
      <h2>Sales amount - Exclusive of all taxes and VAT</h2>
      <input className='input' readOnly value={value} />
    </div>
    
  </div>

    </>
  );
}

export default App;
