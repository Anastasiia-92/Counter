import {ActionUnionType} from "./store";


export type SetNumbIncAT = {
    type: "SET-NUMB-INC"
}
export type SetNumbResetAT = {
    type: "SET-NUMB-RESET"
}
export type SetControlTableAT = {
    type: "SET-CONTROL-TABLE"
}
export type getStartValueAT = {
    type: "GET-START-VALE",
    value: number,
}
export type getMaxValueAT = {
    type: "GET-MAX-VALE",
    value: number,
}

export type CounterStateType = {
    counter: number
    startValue: number
    maxValue: number
    settingsActive: boolean

}
let counterInitialState: CounterStateType = {
    counter: 0,
    startValue: 0,
    maxValue: 1,
    settingsActive: false,
}

export const counterReducer = (state = counterInitialState, action: ActionUnionType): CounterStateType => {
    switch (action.type) {
        case "GET-START-VALE":{
            return {
                ...state,
                startValue: +action.value,
                settingsActive: true
            }
        }
        case "GET-MAX-VALE":{
            return {
                ...state,
                maxValue: +action.value,
                settingsActive: true
            }
        }
        case "SET-NUMB-INC": {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case "SET-NUMB-RESET": {
            return {
                ...state,
                counter: state.startValue
            }
        }
        case "SET-CONTROL-TABLE": {
            return {
                ...state,
                counter: state.startValue,
                settingsActive: false
            }
        }
        default:
            return state
    }
}

export const SetNumbInAC = ():SetNumbIncAT => ({type: "SET-NUMB-INC"})

export const SetNumbResetAC = ():SetNumbResetAT => {
    return {type: "SET-NUMB-RESET"}
}
export const SetControlTableAC = ():SetControlTableAT => {
    return {type: "SET-CONTROL-TABLE"}
}
// export const SetControlTableAC = (startValue: number):SetControlTableAT => {
//     return {type: "SET-CONTROL-TABLE", startValue}
// }

export const getStartValueAC = (value: number): getStartValueAT => {
    return { type: "GET-START-VALE", value}
};
export const getMaxValueAC = (value: number): getMaxValueAT => {
    return { type: "GET-MAX-VALE", value}
};