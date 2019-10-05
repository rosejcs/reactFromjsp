import { INPUT_CHANGE, ADD_LIST, DEL_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
  inputValue: '',
  list: ['敲代码','出bug','找bug','改bug']
}

export default (state = defaultState, action)=> {
  if(action.type === INPUT_CHANGE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if(action.type === ADD_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = [...state.list,state.inputValue]
    newState.inputValue = ''
    return newState
  }

  if(action.type === DEL_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value,1)
    return newState
  }

  if(action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value
    return newState
  }


  return state
}