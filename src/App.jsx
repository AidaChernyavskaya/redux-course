import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash});
    }

    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash});
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
    <div className="App">
        <div style={{fontSize: '30px', margin: '80px 0 0 0', textAlign: 'center'}}>
            Баланс: {cash}
        </div>
        <div style={{display: 'flex'}}>
            <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
            <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
            <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
            <button onClick={() => dispatch(fetchCustomers())}>Добавить всех клиентов</button>
        </div>

        {customers.length > 0 ?
            <div>
                {customers.map(customer =>
                    <div
                        onClick={() => removeCustomer(customer)}
                        style={{fontSize: '30px', textAlign: 'center', border: '1px solid black', padding: '10px', marginTop: 5}}
                    >
                        {customer.name}
                    </div>)}
            </div>
            :
            <div style={{fontSize: '30px', textAlign: 'center'}}>Клиенты отсутствуют!</div>
        }
    </div>
    );
}

export default App;
