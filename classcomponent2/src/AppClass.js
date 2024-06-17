// 단축
// rafce
// rcc
// 클래스 컴포넌트는 과거의 유물
// 과거의 프로젝트는 사용할 수 있으므로 익힌다.
import React, { Component } from 'react'
import BoxClass from './components/BoxClass';

export default class AppClass extends Component {

    // 클래스를 생성할 때 필요한것은 만든다.
    constructor(props) {
        super(props);
        // state를 여기서 만든다.
        // state를 한번에 만들고 한번에 적용한다.
        this.state = {
            counter: 0,
            num: 1,
            value: 0,
        }
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1,
            value: this.state.value + 1,
        });
    }

    render() {
        return (
            <div>
                {/* 
                this는 여기
                필요한 단어의 량이 많다.
                 */}
                <div>{this.state.counter}</div>
                <button onClick={this.increase}>Click!</button>
                <BoxClass num={this.state.value} />
            </div>
        )
    }
}
