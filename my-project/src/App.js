import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import GamersScreen from './components/gamersScreen';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamers: [],
      turnNowIs: 0,
      addNew: false,
      inGame: false,
      amountOfGamers: 0,
    }
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ gamers: [...this.state.gamers, ev.target.pname.value] });
    // this.state.gamers.push(curName)
    this.setState({ addNew: false });
  };

  addNew = () => {
    this.setState({ addNew: true })
  }

  start = (e) => {
    if (e.target.value != "") {
      let curName = e.target.value;
      this.state.gamers.push(curName)
      this.setState((prevState) => ({ amountOfGamers: prevState.amountOfGamers + 1 }))
    }
  }


  checkGamerIndex = (nameOfGamer) => {
    for (let i = 0; i < this.state.gamers.length; i++) {
      if (this.state.gamers[i] == nameOfGamer) {
        console.log(nameOfGamer + "index: " + i);
        return i;
      }
    }
    // this.state.gamers.forEach((element, index) => {
    //   if (element == nameOfGamer) {
    //     return index
    //   }
    // })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 id="getTo100"> get to 100! {!this.state.inGame && (
            <div><button id="new" onClick={() => this.addNew()} >
              add a new gamer
            </button>
              <button id="start" onClick={() => !this.state.addNew && this.state.gamers.length && this.setState({ inGame: true })}>
                start to play
              </button>
            </div>
          )}
            {this.state.addNew && (
              <form onSubmit={this.handleSubmit}>
                <input type="text" id="pname" name="pname" placeholder="enter a gamer name" />
                <button id="submit">ok</button>
              </form>
            )}
          </h1>
          <div className='allGamers'>
            {this.state.gamers.map((player, index) => (
              <GamersScreen name={player} key = {player} index={index} gamers={this.state.gamers} />
            ))}
            {this.state.turnOf}
          </div>

          {/* ====== */}
        </header>
      </div>
    );
  }
}
// import React from "react";
// import PlayerScreen from "./components/gamerScreen";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       players: [],
//       turnOf: 0,
//       inGame: false,
//       showInputForNew: false,
//     };
//   }
//   handleSubmit = (ev) => {
//     ev.preventDefault();
//     this.setState({ players: [...this.state.players,ev.target.pname.value ] });
//     this.setState({showInputForNew:false});
//   };


//   render() {
//     return (
//       <div>
//         <h1>
//           get to 100 {this.state.inGame?"true":"false"}
//           {!this.state.inGame && (
//             <div><button
//               id="new"
//               onClick={() =>
//                   !this.state.showInputForNew &&
//                   this.setState({ showInputForNew: true })
//               }
//             >
//               add a new player
//             </button>
//             <button
//             id="start"
//             onClick={() =>
//                 !this.state.showInputForNew &&this.state.players.length&&
//                 this.setState({ inGame: true })
//             }
//           >
//             start to play
//           </button>
//           </div>
//           )}
//           {this.state.showInputForNew && (
//             <form onSubmit={this.handleSubmit}>
//               <input
//                 type="text"
//                 id="pname"
//                 name="pname"
//                 placeholder="enter a player name"
//               />
//               <button id="submit">ok</button>
//             </form>
//           )}
//         </h1>
//         {this.state.players.map((player) => (
//           <PlayerScreen name={player}  myTurn={this.state.inGame?this.state.turnOf:-1} startGame={this.state.inGame}></PlayerScreen>
//         ))}
//         {this.state.turnOf}
//       </div>
//     );
//   }
// }

// export default App;





{/* <button onClick={() => this.addNew()}>Add new Gamer</button>
          {this.state.addNew && <div className="newGamer">
            <form onSubmit={this.start}>
              <input type="text" id="pname" name="pname" placeholder="enter a player name" onClick={(e) => this.start(e)} />
            </form>
          </div>}
          {this.state.gamers.map((player) => (
          <gamersScreen name={player}/>
        ))} */}

{/* ====== */ }