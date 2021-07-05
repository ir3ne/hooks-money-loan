import './App.css';
import MoneyLoanProvider from './context/MoneyLoanProvider';
import Money from './components/Money';
import Interests from './components/Interests';
import TotalRefound from './components/TotalRefound';
import Months from './components/Months';

function App() {
  return (
    <div className="App">
      App
      <MoneyLoanProvider>
        <Money />
        <Interests />
        <TotalRefound />
        <Months />
      </MoneyLoanProvider>
    </div>
  );
}

export default App;
