import React, { useContext, useEffect } from 'react';
import { MoneyLoanContext } from '../context/MoneyLoanContext';

const Months = () => {
  const { months, setMonths, tolalRefound } = useContext(MoneyLoanContext);
  const minMonths = 6;
  const maxMonths = 24;

  useEffect(() => {
    montlyRate(tolalRefound);
  }, [months]);

  function handleChange(e) {
    setMonths(e.target.value);
  }

  function montlyRate(tolalRefound) {
    console.log(months, 'months');
    if (tolalRefound > 0) {
      return (parseInt(tolalRefound) / parseInt(months)).toFixed(1);
    }
  }

  return (
    <div>
      <h3>Months Selector</h3>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            width: "200px"
          }}
        >
          <div>
            <input
              name="money-selector"
              type="range"
              min={minMonths}
              max={maxMonths}
              step="1"
              value={months}
              onChange={handleChange}
              style={{ width: "200px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "200px",
              padding: "0 6px",
              marginTop: "6px",
              justifyContent: "space-between"
            }}
          >
            <div>{minMonths}</div>
            <div>{maxMonths}</div>
          </div>
        </div>
        <div>Months selected: {months}</div>
        <div>Money to give per month: {montlyRate(tolalRefound)} €</div>
    </div>
  );
}

export default Months;