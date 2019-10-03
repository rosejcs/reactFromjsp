import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import axios from "axios";
import { getListAction } from "./actionCreators";

// generator
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList);
}

function* getList() {
  // axios
  //   .get(
  //     "https://www.easy-mock.com/mock/5d92ff5c68fbce0e4ca78b1f/ReactDemo01/xjj"
  //   )
  //   .then(res => {
  //     console.log(res.data.data);
  //     let value = res.data.data;
  //     const action = getListAction(value);
  //     put(action);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  console.log('jspang');
  const url = "https://www.easy-mock.com/mock/5d92ff5c68fbce0e4ca78b1f/ReactDemo01/xjj"
  const res = yield axios({
    url,method:'GET',
    headers:{'content-type':'application/x-www-form-urlencoded'}
  })
  const action = getListAction(res.data.data)
  yield put(action)
}

export default mySaga;
