export function manageFriends(state, action){
  console.log("*************************state");
  console.log(state);
  console.log("*************************action");
  console.log(action);
  console.log("*************************myaction");
  // console.log(state["friends"]);
  // console.log({...state,friends: action["friend"]} ); ///////FOCUS HERE MAN
  // console.log(Object.assign({},state,friends: action["friend"]) ); ///////FOCUS HERE MAN
  // console.log(Object.assign({},state,{friends: [...state.friends, action["friend"]]}) ); ///////FOCUS HERE MAN
  console.log(action.id);
  console.log("*************************END");
  // let friend = null;
  switch(action.type){
    case 'ADD_FRIEND':
      // return Object.assign({},state.friends,action["friend"])
      return Object.assign({},state,{friends: [...state.friends, action["friend"]]})
    case 'REMOVE_FRIEND':
      const friend = state.friends.filter((friend)=>{return friend.id != action.id})
      console.log("***************" +friend);
      return Object.assign({},state,{friends: friend})
      // return Object.assign({},state,{friends: state.friends.filter((friend)=>{friend.id != action.id})})
      // const index = state.friends.findIndex((friend)=>{return friend.id === action.id})
      // const hello = "hi"
      // return Object.assign({},state,{friends: [
      //   ...state.friends
      // ]})
    default:
      return state
  }
}
// In manageFriends.js write a function called manageFriends
// that takes in an action and the previous state as its argument.
// Unlike managePresents, here our action will also have
// an additional property called friends,
// sometimes an action contains multiple attributes for producing a
// new state.
// { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 } ] }
// *************************action
// { type: 'ADD_FRIEND',
//   friend: { name: 'Joe', hometown: 'Boston', id: 101 } }
// {...state.friends}
