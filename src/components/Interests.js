import React, { useContext, useEffect } from "react";
import { MoneyLoanContext } from '../context/MoneyLoanContext';

const Interest = () => {
  const { money, interest, setInterest } = useContext(MoneyLoanContext);

  useEffect(() => {
    calcInt();
  }, [money]);

  function calcInt() {
    const intMoney = parseInt(money);
    if (intMoney === 0) {
      setInterest(0)
    } else if (intMoney > 0 && intMoney < 2500) {
      setInterest(16)
    } else {
      setInterest(24)
    }
  }

  return (
    <div>
      <h3>Interests</h3>
      <div>
        Interests: {interest}
        {interest !== 0 && `%`}
      </div>
    </div>
  );
};

export default Interest;
