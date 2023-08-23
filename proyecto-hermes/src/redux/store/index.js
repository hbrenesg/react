//Creación de un "store" en el proyecto

import { combineReducers, createStore } from "redux";
import mouseEncimaReducer from './MouseEncima/reducer';

//Se crean los reducers
const myReducer = combineReducers({
    mouseEncimaReducer
});

export default () => {
    return {
        ...createStore(myReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    }
};