import React, { useContext, useEffect } from "react";
import { MoneyLoanContext } from '../context/MoneyLoanProvider';

const TotalRefound = () => {
  const { money, interest, tolalRefound, setTolalRefound } = useContext(MoneyLoanContext);

    useEffect(() => {
      calcTotalRefound(interest);
    }, [interest, money]);

    function calcTotalRefound(interests) {
      const intMoney = parseInt(money);
      let moneyInterests = intMoney / 100 * parseInt(interests);
      let total = intMoney + moneyInterests;

      setTolalRefound(total)
 
    }

  return (
    <div>
      <h3>Total Refound</h3>
      <div>Total Refound: {tolalRefound} €</div>
    </div>
  );
};

export default TotalRefound;
