export default (state = {
  history: [{
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: true,
}, action) => {
  let newState;
  switch(action.type){
    case 'NEXT':
    let newState = Object.assign({}, action.state);
    console.log(newState);
    newState.history[newState.history.length - 1].squares[action.i] = newState.xIsNext ? 'X' : 'O';
    newState.xIsNext = !newState.xIsNext;
    return newState;

  }


  return state;
};
