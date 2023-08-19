import React from 'react';
import Arithmetic from "./Arithmetic";

class Buttons extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (this.props.inGame?(<div>
            <Arithmetic id='plus' value='+1' handleClick={this.props.PSHandleClick}></Arithmetic>
            <Arithmetic id='minus' value='-1' handleClick={this.props.PSHandleClick}></Arithmetic>
            <Arithmetic id='multiplate' value='*2' handleClick={this.props.PSHandleClick}></Arithmetic>
            <Arithmetic id='divide' value='/2' handleClick={this.props.PSHandleClick}></Arithmetic>
        </div>):(<div><Arithmetic id='new' value='New Game' handleClick={this.props.PSHandleClick}></Arithmetic></div>))
        }
}

export default Buttons;