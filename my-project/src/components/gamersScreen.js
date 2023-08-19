import React from "react";
import Arithmetic from "./Arithmetic";
import Buttons from "./buttons";

export default class GamersScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: this.props.name,
            number: Math.floor(Math.random() * 99),
            steps: 0,
            scores: [],
            inGame: true,
            index: this.props.index,
            optionToLeave: false,
            
            // status: (this.props.startGame) && (this.props.myTurn === this.props.key) ? true : false,
        };
    }
    checkFinish = () => {
        this.setState({optionToLeave: true})
        this.setState({number: Math.floor(Math.random() * 99)})
        this.setState({scores: [...this.state.scores,",", this.state.steps ]})
        alert("finish!")
    }
    // setTurn = () => {
    //     debugger
    //     this.props.setTurn = (this.props.index < this.props.gamers.length - 1) ? this.props.index + 1 : 0;
    // }

    clickedSign = (e) => {
        let action = e.target.value;
        this.setState({optionToLeave: false})
        debugger
        switch (action) {
            case '+1':
                this.setState((prevState) => ({ number: prevState.number + 1 }));
                this.setState((prevState) => ({ steps: prevState.steps + 1 }));
                //this.setTurn();
                if (this.state.number == 99) {
                    this.checkFinish();
                }
                break;
            case '-1':
                this.setState((prevState) => ({ number: prevState.number - 1 }));
                this.setState((prevState) => ({ steps: prevState.steps + 1 }));
                //this.setTurn();
                if (this.state.number == 101) {
                    this.checkFinish();
                }
                break;
            case '*2':
                this.setState((prevState) => ({ number: prevState.number * 2 }));
                this.setState((prevState) => ({ steps: prevState.steps + 1 }));
                //this.setTurn();
                if (this.state.number == 50) {
                    this.checkFinish();
                }
                break;
            case '/2':
                this.setState((prevState) => ({ number: prevState.number / 2 }));
                this.setState((prevState) => ({ steps: prevState.steps + 1 }));
                //this.setTurn();
                if (this.state.number == 200) {
                    this.checkFinish();
                }
                break;
        }
    }
    clickLeave=()=>{
        this.setState({optionToLeave: false})
        // להוסיף שכשמגיע לפה הקומפוננטה שלו נעלמת
        // add שכשעובר התור לאחד הבא נגמר לו האפשרות לצאת מהמשחק
    }

    render() {
        return (
            <div className="gamer">
                <h1 className="gamerProps"><span> {this.state.index + 1}</span></h1>
                <h1 className="gamerProps"><b>name:</b> <span>{this.state.player}</span></h1>
                <h1 className="gamerProps"><b>number:</b><span> {this.state.number}</span></h1>
                <h1 className="gamerProps"><b>steps:</b> <span>{this.state.steps}</span></h1>
                <h1 className="gamerProps"><b>scores:</b><span> {this.state.scores}</span></h1>
                {this.state.optionToLeave && <button onClick={this.clickLeave} className="leaveBtn"> Leave the game</button>} <br></br>
                <Arithmetic signClicked={(e) => this.clickedSign(e)} />
            </div>
        )
    }
}