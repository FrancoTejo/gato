import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';

const App = () => {

const [turn, setTurn]= useState ('x');
const [squares, setSquares] = useState (Array(9).fill(null));
const [score, setScore] = useState ({
  x:0,
  o:0,
});

  const checkWinner = squares =>{
    setTurn(turn ==='x' ? 'o': 'x')
  }



  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkWinner(newSquares);
  }

  
  return (
    <div className="container">
      <Board turn = {turn} squares={squares} onClick={handleClick}/>
    </div>
  );
}

export default App;
