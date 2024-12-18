import React, {useState} from 'react';
import './App.css';

export const LocalStorage = () => {

    const [value, setValue] = useState(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value))
    }
    const getToLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }
    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeLocalStorageHandler = () => {
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getToLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeLocalStorageHandler}>removeLocalStorage</button>
        </div>
    );
}