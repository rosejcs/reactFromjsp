import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import axios from 'axios'
import { getListAction } from './actionCreators'


function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  console.log('jspang')
  const url = 'https://www.easy-mock.com/mock/5d92ff5c68fbce0e4ca78b1f/ReactDemo01/xjj'
  const res = yield axios.get(url)
  const action = getListAction(res.data.data)
  yield put(action)
}

export default mySaga
