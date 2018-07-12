export default (state = {
  history: [{
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: true,
}, action) => {
  switch(action.type){
    case 'NEXT':
      const newState = Object.assign({}, action.state);
      console.log(newState, 'this is newState');
      const stateSlice = newState.history.slice(0, newState.stepNumber + 1);
      console.log(stateSlice, 'this is stateSlice');
      const current = stateSlice[stateSlice.length - 1]
      console.log(current, 'this is current');
      const squares = current.squares.slice();
      console.log(squares, 'this is squares');

      squares[action.i] = newState.xIsNext ? 'X' : 'O';
      newState.xIsNext = !newState.xIsNext;
      const endState = Object.assign({}, {history:stateSlice.concat({
        squares: squares
      }),
      stepNumber: stateSlice.length,
      xIsNext: newState.xIsNext
      })
      return endState;

  }


  return state;
};
