export function manageFriends(state, action){

  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id}]}
      break;
    case "REMOVE_FRIEND":
      const newFriends = state.friends.filter((fr)=>{ return fr.id !== action.id})
      return {friends: [...newFriends]}
      break;
    default: return state

  }
}
