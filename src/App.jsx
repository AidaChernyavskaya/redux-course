import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispath = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    console.log(cash);

    const addCash = (cash) => {
        dispath({type: 'ADD_CASH', payload: cash});
    }

    const getCash = (cash) => {
        dispath({type: 'GET_CASH', payload: cash});
    }

    return (
    <div className="App">
        <div style={{fontSize: '30px', margin: '80px 0 0 0', textAlign: 'center'}}>
            {cash}
        </div>
        <div style={{display: 'flex'}}>
          <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
          <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        </div>
    </div>
    );
}

export default App;
