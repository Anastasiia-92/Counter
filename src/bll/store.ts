import {applyMiddleware, combineReducers, createStore} from "redux";
import {
    counterReducer,
    getMaxValueAT,
    getStartValueAT,
    SetControlTableAT,
    SetNumbIncAT,
    SetNumbResetAT
} from "./counterReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localstorage-utils";

export type ActionUnionType =
    SetNumbIncAT |
    getStartValueAT |
    getMaxValueAT |
    SetNumbResetAT |
    SetControlTableAT

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>

