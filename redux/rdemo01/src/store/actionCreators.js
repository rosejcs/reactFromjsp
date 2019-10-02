import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'


export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = ()=>({
  type: ADD_ITEM,
})

export const delItemAction = (value) => ({
  type: DEL_ITEM,
  value
})

export const getListAction = (value) => ({
  type: GET_LIST,
  value
})

