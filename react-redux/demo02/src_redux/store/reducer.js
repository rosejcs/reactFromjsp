import { INPUT_CHANGE, ADD_LIST, DEL_ITEM } from './actionTypes'

const defaultState = {
  inputValue:'',
  list:['敲代码','出bug','找bug']
}

export default (state = defaultState, action) => {
  // console.log(state,action);
  if( action.type === INPUT_CHANGE ) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  } else {
    if( action.type === ADD_LIST ) {
      let newState = JSON.parse(JSON.stringify(state))
      newState.list = [...state.list,state.inputValue]
      // newState.inputValue = ''
      return newState
    }else {
      if( action.type === DEL_ITEM ) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
      }
    }
  }

  

  return state
}