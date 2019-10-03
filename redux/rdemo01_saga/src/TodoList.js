import React, { Component } from "react";
// import store from './store/index'
import store from "./store";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from './store/actionTypes'
import {
  changeInputAction,
  addItemAction,
  delItemAction,
  getMyListAction
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
// import axios from 'axios'


class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log(store.getState());
    // this.state={}
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
    this.clickBtn = this.clickBtn.bind(this)
    this.delItem = this.delItem.bind(this)
  }
  componentDidMount() {
    const action = getMyListAction()
    store.dispatch(action)
    console.log(action);
  }
  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        delItem={this.delItem}
      />
    )
  }

  changeInputValue(e) {
    // console.log(e.target.value)
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // };
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  storeChange() {
    // console.log(store.getState());
    this.setState(store.getState());
  }

  clickBtn() {
    // const action = {
    //   type: ADD_ITEM,
    // };
    const action = addItemAction();

    store.dispatch(action);
  }

  delItem(index) {
    // console.log(index);
    // const action = {
    //   type: DEL_ITEM,
    //  index
    // };
    const action = delItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
