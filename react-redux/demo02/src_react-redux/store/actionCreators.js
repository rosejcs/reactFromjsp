import
{
  CHANGE_INPUT,
  ADD_LIST,
  DEL_ITEM
} from './actionTypes'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addListAction = () => ({
  type: ADD_LIST
})

export const delItemAction = (value) => ({
  type: DEL_ITEM,
  value
})