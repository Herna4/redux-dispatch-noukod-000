function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return statee;
  }
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

changeState(state, action)
