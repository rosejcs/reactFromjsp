import { INPUT_CHANGE, ADD_LIST, DEL_ITEM } from './actionTypes'

export const inputChangeAction = (value) => ({
  type: INPUT_CHANGE, value
})

export const addListAction = () => ({
  type: ADD_LIST
})

export const delItemAction = (value) => ({
  type: DEL_ITEM,value
})