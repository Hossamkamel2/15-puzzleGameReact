import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import ReactDOM from "react-dom";



const layout = _.range(0, 16).map((n) => {
  const row = Math.floor(n / 4);
  const col = n % 4;
  return [80 * col, 80 * row];
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tilesPos: [
        1,
        2,
        0,
        4,
        5,
        6,
        3,
        8,
        9,
        10,
        7,
        12,
        13,
        14,
        11,
        15,
      ],
    };
  }

  componentDidMount() {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.background = "#eee";
    document.body.style.fontFamily = "Helvetica, sans-serif";
  }
  handleClick(index) {
    let { tilesPos } = this.state;
    let emptyIndex = tilesPos.indexOf(0);
    let targetIndex = tilesPos.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex);
    if (dif === 1 || dif === 4) {
      tilesPos[emptyIndex] = index;
      tilesPos[targetIndex] = 0;
      this.setState({ tilesPos });
      let win = _.every(initialConfiguration, (value, index, array) => {
        value = value || 16;
        console.log(array[index - 1], value);
        return (
          index === 0 ||
          (parseInt(array[index - 1]) <= parseInt(value) &&
            array[index - 1] !== 0)
        );

      }
      
      );
      console.log(win);
      if (win === true) {
        this.onSolveCallback();
     }
    }
  }
  onSolveCallback() {
    window.alert("Gongratulations!!! you win");
  }

  render() {
    return (
      <div className="board">
        {this.state.tilesPos.map((key) => {
          let cellClass = key ? "cell" : "empty cell";
          let [x, y] = layout[this.state.tilesPos.indexOf(key)];
          return (
            <div
              key={key}
              className={cellClass}
              onClick={() => this.handleClick(key)}
              style={{ transform: `translate3d(${x}px,${y}px,0) scale(1.1)` }}
            >
              {key}
            </div>
          );
        })}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("main"));

//export default App;
// const style1 = {
//   margin: "auto auto",
//   textalign: "center",
//   lineheight: "70px",
//   width: "348px",
//   height: "348px",
// };
// const styleCell = {
//   width: "70px",
//   height: "70px",
//   marginright: "7px",
//   borderradius: "4px",
//   marginbottom: "7px",
//   background: "#fff",
//   boxshadow: "rgba(0,0,0,0.2) 0 1px 2px 0",
//   color: "#333",
//   fontsize: " 1.2rem",
//   fontweight: "bold",
//   cursor: "pointer",
//   transition: "all 0.3s ease-in",
//   position: "absolute",
// };



// import React, {Component } from 'react';
// import classnames from 'classnames';

// // the exported component can be either a function or a class

// export default class Board extends Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//       tilesPos: props.initialConfiguration,
     
//     };
   
//   }
  
//   handleClick(index) {

//           let { tilesPos } = this.state;
//     let emptyIndex = tilesPos.indexOf(0);
//     let targetIndex = tilesPos.indexOf(index);
//     const dif = Math.abs(targetIndex - emptyIndex);
//     if (dif === 1 || dif === 4  ) {
//       tilesPos[emptyIndex] = index;
//       tilesPos[targetIndex] = 0;
//       let lastClick=index;
//       this.setState({ tilesPos});
        
//     }
//     for(let i=1;i<=15;i++){
//   if(tilesPos[i-1]!==i)
//   break;
//   if(i===15)
//    this.props.onSolveCallback();
// }
//   }
 
// render() {
//  return(
//   <div className="board">
//         {this.state.tilesPos.map((key) => {
//           let cellClass = key ? "tile" : "empty tile";
          
//           return (
//             <div
//               key={key}
//               className={cellClass}
//               onClick={() => this.handleClick(key)}
              
//             >
//               {key}
//             </div>
//           );
//         })}
//       </div>);}
// }

