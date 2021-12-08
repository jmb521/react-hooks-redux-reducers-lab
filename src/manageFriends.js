export function manageFriends(state = {friends: []}, action) {
  console.log("action", action)
    switch(action.type) {
      case "friends/add": 
        return {...state, friends: [...state.friends, action.payload]}
      case "friends/remove": 
        return {...state, friends: state.friends.filter(f => f.id !== action.payload)}
      default:
        return state
    }
}
