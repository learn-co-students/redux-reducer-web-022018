export function manageFriends(state = {
  friends: []
}, action){
  switch(action.type){

    case "ADD_FRIEND":
      return Object.assign({}, state, {
        friends: [...state.friends, action.friend
        ]
      })

    case "REMOVE_FRIEND":
      const removeFrom = state.friends.findIndex(friend => friend.id === action.id)
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, removeFrom),
          ...state.friends.slice(removeFrom + 1)
        ]
      })

    default:
      return state
  }
}
