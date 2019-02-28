import React from "react";
import ReactDOM from "react-dom";

//=============================================
// イベントハンドリング
//=============================================
// onClickなどのイベントハンドラの練習
// 発火させたい処理を {メソッド名} で指定する
// ハンドラ内でthisを使う場合にはconstructor内でbindして束縛する必要がある

class ToggleBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        // ハンドラの中でのthisは束縛する
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // setStateの中で前のstateを使いたい場合はfunctionを渡す
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button className="btn" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <ToggleBtn/>,
    document.getElementById('app1')
);
