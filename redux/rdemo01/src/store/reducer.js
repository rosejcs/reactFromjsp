import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionTypes";
const defaultState = {
  inputValue: "",
  list: [
    "早8点开晨会,分配今天代码任务",
    "早9点开始项目会议,跟项目经理沟通项目",
    "早10点给女朋友打电话撩骚"
  ]
};

export default (state = defaultState, action) => {
  // console.log(state, action);
  // Reducer里只能接受state, 不能改变state
  // changeInput
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  // addList
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list, state.inputValue];
    newState.inputValue = "";
    return newState;
  }

  // delItem
  if (action.type === DEL_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState;
  }

  if(action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value
    return newState
  }
  return state;
};
