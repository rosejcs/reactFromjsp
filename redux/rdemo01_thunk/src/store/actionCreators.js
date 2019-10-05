import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionTypes";
import axios from "axios";
import store from "./index";

export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});

export const addItemAction = () => ({
  type: ADD_ITEM
});

export const delItemAction = value => ({
  type: DEL_ITEM,
  value
});

export const getListAction = value => ({
  type: GET_LIST,
  value
});

export const getTodoList = () => {
  return () => {
    axios
      .get(
        "https://www.easy-mock.com/mock/5d92ff5c68fbce0e4ca78b1f/ReactDemo01/xjj"
      )
      .then(res => {
        console.log(res.data.data)
        let value = res.data.data
        const action = getListAction(value)
        store.dispatch(action)
      })
      .catch(error => {
        console.log(error);
      });
  };
};
