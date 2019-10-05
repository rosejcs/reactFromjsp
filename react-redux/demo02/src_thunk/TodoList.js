import React, { Component } from 'react'

import { Input, List, Button } from 'antd'

import 'antd/dist/antd.css'

import { inputChangeAction, addListAction, delItemAction, getAxiosListAction } from './store/actionCreators'

import store from './store'



class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
    store.subscribe(this.storeChange.bind(this))
  }

  componentDidMount() {
    const  action = getAxiosListAction()
    store.dispatch(action)
  }

  render() {
    return (
      <div>
        <h1>Hello jsPang</h1>
        <div>
          <Input 
            placeholder="Write Something"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          <Button
            type="success"
            onClick={this.addList.bind(this)}
          >Add</Button>
        </div>

        <div>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item,index)=>(
              <List.Item
                onClick={()=>{
                  this.delItem(index)
                }}
              >
                {item}
              </List.Item>
            )}
          
          />
        </div>
      </div>
    )
  }

  storeChange() {
    this.setState(store.getState())
  }
  inputChange(e) {
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