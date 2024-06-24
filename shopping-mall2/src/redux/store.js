import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
// import rootReducer from './reducers/'
// index로 하면 뒤에 파일을 적어주지 않아도 된다.
import { composeWithDevTools } from '@redux-devtools/extension';

import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./reducers/authenticateReducer";
import productReducer from "./reducers/productReducer";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productReducer,
    }
})

export default store;