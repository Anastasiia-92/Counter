import React, {ChangeEvent} from 'react';
import styles from "./CounterTable.module.css"
import {Button} from "../Button/Button";


type ControlTablePropsType = {
    getMaxValue:(value: string) => void
    getStartValue:(value: string) => void
    setNumbInc: () => void
    startValue: number
    maxValue: number
    setControlTable:() =>void
    settingsActive: boolean

}

export const ControlTable = (props: ControlTablePropsType) => {

    const buttonDisable = !props.settingsActive || props.startValue < 0 || props.startValue >= props.maxValue ;
    const errorStyle = props.startValue < 0 || props.startValue >= props.maxValue;


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.getMaxValue(e.currentTarget.value)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.getStartValue(e.currentTarget.value)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.counterValue}>
                <div>
                    max value:
                    <input
                        className={errorStyle ? styles.error : ""}
                        value={props.maxValue}
                        type="number"
                        onChange={onChangeMaxValue}
                    />
                </div>
                <div>
                    start value:
                    <input
                        value={props.startValue}
                        className={errorStyle ?  styles.error : ""}
                        type="number"
                        onChange={onChangeStartValue}
                    />
                </div>
            </div>
            <div className={styles.buttonForm}>
                <Button setCount={props.setControlTable} title={'set'} disabled={buttonDisable}/>
            </div>
        </div>
    )
}