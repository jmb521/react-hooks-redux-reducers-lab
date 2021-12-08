export function managePresents(state = {numberOfPresents: 0}, action) {
  console.log(action)
  switch(action.type) {
    case "presents/increase": 
      return {...state, numberOfPresents: state.numberOfPresents +1}

    default: 
      return state
  }
}
