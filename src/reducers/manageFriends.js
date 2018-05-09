export function manageFriends(state, action){
  switch (action.type){
    case 'ADD_FRIEND':
      if (action.friend){
        let newFriend = action.friend
        if (newFriend.name && newFriend.hometown && newFriend.id){
          return {...state, friends: [...state.friends, newFriend]}
        }
      }
      break;
    case 'REMOVE_FRIEND':
      if (action.id){
        return {...state, friends: state.friends.filter(x => x.id !== action.id)}
      }
      break;
  }
  return state;
}
