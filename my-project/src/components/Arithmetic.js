import React from "react";

export default class Arithmetic extends React.Component {
    arr = ['+1', '-1', '*2', '/2']

    signsBuilder(sign) {
        return <button key={sign} value={sign} className="actionsBtns" onClick={(e)=>this.props.signClicked(e)}>{sign}</button>
    }

    render() {
        return (
            this.arr.map((sign) => this.signsBuilder(sign))
        );
    }
}

{/*onClick={ }*/}
