import React from 'react';
import styles from "./Counter.module.css"
import {Button} from "./Button";


type CounterPropsType = {
    numb: number
    setNumbInc: () => void
    setNumbReset: () => void
    maxValue: number
    startValue: number
    settingsActive: boolean
}

export const Counter = (props: CounterPropsType) => {


    const onClickIncDisabled = props.numb >= props.maxValue || props.settingsActive;
    const onClickResetDisabled = props.numb <= props.startValue || props.startValue < 0;

    const showMessage = () => {
        if (props.settingsActive && props.startValue >= 0 && props.startValue < props.maxValue) {
            return <div className={styles.text}>
                enter values and press set</div>
        } else if (props.startValue < 0 || props.startValue >= props.maxValue) {
            return <div className={styles.error}>
                incorrect value</div>
        } else {
            return <div className={props.numb >= props.maxValue ? styles.maxNumb : ""}>{props.numb}</div>
        }

    }

    return (

        <div className={styles.wrapper}>
            <div className={styles.number}>
                {showMessage()}
                {/*{props.settingsActive ?*/}
                {/*    <div className={props.startValue >= 0 && props.startValue < props.maxValue ? styles.text : ""}>*/}
                {/*        enter values and press set</div> :*/}
                {/*    <div className={props.numb >= props.maxValue ? styles.maxNumb : ""}>{props.numb}</div>}*/}
            </div>
            <div className={styles.buttonForm}>
                <Button
                    setCount={props.setNumbInc}
                    title={"Inc"}
                    disabled={onClickIncDisabled}/>
                <Button
                    setCount={props.setNumbReset}
                    title={"Reset"}
                    disabled={onClickResetDisabled}/>
            </div>
        </div>

    )
}
