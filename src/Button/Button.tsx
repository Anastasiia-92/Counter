import React from 'react';
import styles from "./Button.module.css"


type ButtonPropsType = {
    setCount: () => void
    title: string
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button
                className={props.disabled ? styles.disabledButton : styles.button}
                onClick={props.setCount}
                disabled={props.disabled}>
                {props.title}
            </button>

        </div>
    )
}