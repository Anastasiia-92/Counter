import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {ControlTable} from "./ControlTable";


function App() {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [counter, setCounter] = useState<number>(startValue);
    const [settingsActive, setSettingsActive] = useState(false);

    const getStartValue = (value: string) => {
        setStartValue(+value)
        setSettingsActive(true)
    }

    const getMaxValue = (value: string) => {
        setMaxValue(+value)
        setSettingsActive(true)
    }

    const setNumbInc = () => {
        setCounter(counter + 1)
    }
    const setNumbReset = () => {
        setCounter(startValue)
    }

    const setControlTable = () => {
        setCounter(startValue)
        setSettingsActive(false)
    }

    return (
        <div className="App">

            <div>
                <ControlTable
                    getStartValue={getStartValue}
                    getMaxValue={getMaxValue}
                    setNumbInc={setNumbInc}
                    startValue={startValue}
                    maxValue={maxValue}
                    setControlTable={setControlTable}
                    settingsActive={settingsActive}

                />
            </div>

            <div>
                <Counter
                    numb={counter}
                    setNumbInc={setNumbInc}
                    setNumbReset={setNumbReset}
                    maxValue={maxValue}
                    startValue={startValue}
                    settingsActive={settingsActive}
                />
            </div>
        </div>
    );
}

export default App;