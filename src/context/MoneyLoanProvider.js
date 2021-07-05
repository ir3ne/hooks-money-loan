import React, {useState, createContext } from 'react';

export const MoneyLoanContext = createContext();

const MoneyLoanProvider = (props) => {
  const [money,setMoney] = useState(0);
  const [interest,setInterest] = useState(0);
  const [tolalRefound,setTolalRefound] = useState(0);
  const [months, setMonths] = useState(0);

  const contextValue = {
    money, 
    interest,
    tolalRefound,
    setMoney,
    setInterest,
    setTolalRefound,
    months,
    setMonths
  };

  return (
    <MoneyLoanContext.Provider value={contextValue}>
      {props.children}
    </MoneyLoanContext.Provider>
  );
}

export default MoneyLoanProvider;