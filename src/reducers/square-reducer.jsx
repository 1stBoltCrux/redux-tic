

export default (state = {
  history: [{
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: true,
  winner: false
}, action) => {
  switch(action.type){
  case 'NEXT': {
    const newState = Object.assign({}, action.state);
    const stateSlice = newState.history.slice(0, newState.stepNumber + 1);
    const current = stateSlice[stateSlice.length - 1];
    const squares = current.squares.slice();
    if (newState.winner === true || squares[action.i] ) {
      return newState;
    }
    squares[action.i] = newState.xIsNext ? 'X' : 'O';
    newState.xIsNext = !newState.xIsNext;
    const endState = Object.assign({}, {history:stateSlice.concat({
      squares: squares
    }),
    stepNumber: stateSlice.length,
    xIsNext: newState.xIsNext,
    winner: newState.winner
    });
    return endState;
  }
  case 'WINNER': {
    const winnerState = action.state;
    winnerState.winner = true;
    return winnerState;
  }
  case 'JUMP': {
    const jumpState = Object.assign({}, state, {
      stepNumber: action.stepNumber,
      xIsNext:action.xIsNext
    });
    return jumpState;
  }
  }

  return state;
};
