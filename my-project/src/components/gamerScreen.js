// import React from "react";
// import Buttons from "./buttons";
// class PlayerScreen extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       player: this.props.name,
//       number: Math.floor(Math.random() * 99),
//       steps: 0,
//       stepsOfAll: [],
//       inGame: true,
//       status:(this.props.startGame)&&(this.props.myTurn===this.props.key)?true:false,
//     };
//   }
//   PSHandleClick = (arith) => {
//     this.state.status && this.setState({ steps: this.state.steps + 1 });
//     switch (arith) {
//       case "plus":
//         this.state.status && this.setState({ number: this.state.number + 1 });
//         break;
//       case "minus":
//         this.state.status && this.setState({ number: this.state.number - 1 });
//         break;
//       case "multiplate":
//         this.state.status && this.setState({ number: this.state.number * 2 });
//         break;
//       case "divide":
//         this.state.status && this.setState({ number: this.state.number / 2 });
//         break;
//       case "new":
//         this.setState({
//           stepsOfAll: [...this.state.stepsOfAll, this.state.steps],
//         });
//         this.setState({ steps: 0 });
//         this.setState({ number: Math.floor(Math.random() * 99) });
//         this.setState({ inGame: true });
//         break;
//       default:
//         break;
//     }
//   };
//   func(){
//       this.setState({ inGame: false });

//   }
//   render() {

//     if (this.state.number === 100 && this.state.inGame === true)
//       this.func();
//             return (
//       <div style={{borderStyle: 'solid', borderWidth: 2, borderColor: 'black' }} >

//         <h2>
//           Player: {this.state.player}|||{this.state.status?'enable':'disable'}
//         </h2>
//         <h2>Number: {this.state.number}</h2>
//         <h2>Steps: {this.state.steps}</h2>
//         <Buttons
//           inGame={this.state.inGame}
//           PSHandleClick={this.PSHandleClick}
//         ></Buttons>
//         <h2>
//             {this.state.player}'s stepsOfAll{this.state.stepsOfAll.map((step) => `: ${step}  `)}{" "}
//         </h2>
//         {this.props.myTurn}
//         {this.props.key}
//       </div>
//     );
//   }
// }
// export default PlayerScreen;