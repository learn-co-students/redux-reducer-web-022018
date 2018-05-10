export function manageFriends(state, action, friend){

  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
      break;
    case "REMOVE_FRIEND":
      return {friends: state.friends.filter(fr => fr.id !== action.id)}
      break;
    default:
      return state;
  }

}
