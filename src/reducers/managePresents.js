export function managePresents(state, action){
  switch(action.type){
    case 'INCREASE':
      return {...state, numberOfPresents: state.numberOfPresents + 1}
      break
    case 'DECREASE':
      return {...state, numberOfPresents: state.numberOfPresents - 1}
      break
  }
  return state
}
