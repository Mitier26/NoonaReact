import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
// import rootReducer from './reducers/'
// index로 하면 뒤에 파일을 적어주지 않아도 된다.
import { composeWithDevTools } from '@redux-devtools/extension';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;