import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {
    CounterStateType,
    getMaxValueAC,
    getStartValueAC,
    SetControlTableAC,
    SetNumbInAC,
    SetNumbResetAC
} from "./bll/counterReducer";
import {ControlTable} from "./ControlTable/ControlTable";
import {Counter} from "./Counter/Counter";





function App() {


    const state = useSelector<AppRootStateType, CounterStateType>(state => state.counter)

    const dispatch = useDispatch()

    const getStartValue = (value: string) => {
        dispatch(getStartValueAC(+value))
    }

    const getMaxValue = (value: string) => {
        dispatch(getMaxValueAC(+value))
    }

    const setNumbInc = () => {
        dispatch(SetNumbInAC())
    }
    const setNumbReset = () => {
        dispatch(SetNumbResetAC())
    }

    const setControlTable = () => {
        dispatch(SetControlTableAC())
    }

    return (
        <div className="App">

            <div>
                <ControlTable
                    getStartValue={getStartValue}
                    getMaxValue={getMaxValue}
                    setNumbInc={setNumbInc}
                    startValue={state.startValue}
                    maxValue={state.maxValue}
                    setControlTable={setControlTable}
                    settingsActive={state.settingsActive}

                />
            </div>

            <div>
                <Counter
                    numb={state.counter}
                    setNumbInc={setNumbInc}
                    setNumbReset={setNumbReset}
                    maxValue={state.maxValue}
                    startValue={state.startValue}
                    settingsActive={state.settingsActive}
                />
            </div>
        </div>
    );
}

export default App;