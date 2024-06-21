import { createStore } from 'redux';
import reducer from './reducer/reducer'

// 스토어를 만들기 위해서는 reducer 필요

const store = createStore(reducer);

export default store;