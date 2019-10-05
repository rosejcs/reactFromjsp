import { INPUT_CHANGE, ADD_LIST, DEL_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

export const inputChangeAction = (value) => ({
  type: INPUT_CHANGE, value
})
export const addListAction = () => ({
  type: ADD_LIST
})  

export const delItemAction = (value) => ({
  type: DEL_ITEM, value
})

export const getListAction = (value) =>({
  type: GET_LIST, value
})

export const getAxiosListAction = () => {
  return (dispatch) => {
    axios.get("https://www.easy-mock.com/mock/5d92ff5c68fbce0e4ca78b1f/ReactDemo01/xjj").then(res=>{
      const value = res.data.data
      const action = getListAction(value)
      console.log(value);
      dispatch(action)
    })
  }
}