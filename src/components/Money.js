import React, { useContext } from 'react';
import { MoneyLoanContext } from '../context/MoneyLoanContext';

const Money = () => {
  const { money, setMoney } = useContext(MoneyLoanContext);
  const minMoney = 0;
  const maxMoney = 5000;

  function handleChange(e) {
    setMoney(e.target.value)
  }

  return (
    <div>
      <h3>Money Selector</h3>
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
              min={minMoney}
              max={maxMoney}
              step="100"
              value={money}
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
            <div>{minMoney}</div>
            <div>{maxMoney}</div>
          </div>
        </div>
        <div>Money selected: {money} €</div>
    </div>
  );
}

export default Money;