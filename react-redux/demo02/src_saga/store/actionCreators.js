import { INPUT_CHANGE, ADD_ITEM, DEL_ITEM, GET_LIST,GET_MY_LIST } from './actionTypes'

export const inputChangeAction = (value) => ({
  type:INPUT_CHANGE, value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const delItemAction = (value) => ({
  type: DEL_ITEM, value
})

export const getListAction = (value) => ({
  type: GET_LIST,value
})

export const getMyListAction = () => ({
  type: GET_MY_LIST
})