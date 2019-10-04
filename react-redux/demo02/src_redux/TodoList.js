import React, { Component } from 'react'

import { Input, List, Button } from 'antd'
import 'antd/dist/antd.css'


import store from './store'

import { inputChangeAction, addListAction, delItemAction } from './store/actionCreators'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()


    // 实时更新store中的数据到组件中
    //__________start___________
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange) //订阅Redux的状态
    //__________en'd___________

  }

  render() {
    return (
      <div style={{margin: "10px 0 0 10px"}}>

        <div>
          <Input 
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          <Button 
            type="success"
            onClick={this.addList.bind(this)}
          >添加</Button>
        </div>

        <div>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index)=>(
              <List.Item
                onClick={()=>{
                  this.delItem(index)
                }}
              >{item}</List.Item>
            )}
          />
        </div>

      </div>
    )
  }

  // store的刷新
  storeChange() {
    this.setState(store.getState())
  }

  inputChange(e) {
    // console.log(e.target.value);
    const action = inputChangeAction(e.target.value)
    store.dispatch(action)
  }

  addList() {
    const action = addListAction()
    store.dispatch(action)
  }

  delItem(index) {
    const action = delItemAction(index)
    store.dispatch(action)
  }





}

export default TodoList