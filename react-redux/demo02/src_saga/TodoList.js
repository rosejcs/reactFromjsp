import React, { Component } from 'react'
import { Input,Button,List } from 'antd'
import 'antd/dist/antd.css'

import store from './store'
import { getMyListAction, inputChangeAction, addItemAction, delItemAction,getListAction } from './store/actionCreators' 


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)

    this.inputChange = this.inputChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.delItem = this.delItem.bind(this)
  }

  componentDidMount() {
    const action = getMyListAction()
    store.dispatch(action)
  }

  render() {
    return (
      <div>

        <div>
          <Input
            placeholder='Write Something'
            value={this.state.inputValue}
            onChange={this.inputChange}
          />
          <Button
            type="primary"
            onClick={this.addItem}
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

  addItem() {
    const action = addItemAction()
    store.dispatch(action)
  }

  delItem(index) {
    const action = delItemAction(index)
    store.dispatch(action)
  }




}


export default TodoList