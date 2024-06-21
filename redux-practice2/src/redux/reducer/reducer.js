// 리듀서은 함수
// 리듀서는 2개의 매개변수를 받는다
// state, action

const initialState = {
    count: 0,
}

function reducer(state = initialState, action) {

    //들어오는 액션의 종류에 따라 다른 동작을 한다.
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
    }

    return { ...state };

}

export default reducer;