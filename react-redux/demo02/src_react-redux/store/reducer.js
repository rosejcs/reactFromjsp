import { CHANGE_INPUT, ADD_LIST, DEL_ITEM } from './actionTypes'


const defaultState = {
  inputValue: "jspang",
  list:['one','two','three']
}

export default (state = defaultState, action) => {

  if(action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if(action.type === ADD_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    // newState.list.push(state.inputValue)
    newState.list = [...state.list,state.inputValue]
    newState.inputValue = ''
    return newState
  }

  if(action.type === DEL_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value,1)
    return newState
  }



  return state
}