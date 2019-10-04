import React,{Component} from 'react'
import { Input, Button,List } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
// import { CHANGE_INPUT, ADD_LIST, DEL_ITEM } from './store/actionTypes'
import { changeInputAction, addListAction, delItemAction } from './store/actionCreators'

// class TodoList extends Component {
  // render() {
const TodoList = (props)=>{
    let { inputValue, inputChange, addList, delItem, list } = props;
    return (
      <div>
        {/* input module */}
        <div>
          {/* <input 
            value={inputValue}
            onChange={inputChange}
          /> */}
          <Input 
            placeholder="Write Something"
            onChange={inputChange}
            value={inputValue}
          />
          <Button 
            type="primary"
            onClick={addList}
          >增加</Button>
        </div>
        {/* show module */}
        <div>
          <List
            bordered
            dataSource={list}
            renderItem={(item,index)=>(
              <List.Item 
                onClick={()=>{delItem(index)}}
              >{item}</List.Item>
            )}
          />
        </div>
      </div>
    )
  // }
}


// }

const stateToProps = (state) => {
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      console.log(e.target.value);
      // let action = {
      //   type:CHANGE_INPUT,
      //   value:e.target.value
      // }
      let action = changeInputAction(e.target.value)
      dispatch(action)
    },
    addList() {
      // let action = {
      //   type: ADD_LIST
      // }
      let action = addListAction()
      dispatch(action)
    },
    delItem(index) {
      // let action = {
      //   type: DEL_ITEM,
      //   value: index
      // }
      let action = delItemAction(index)
      dispatch(action)
    }
  }
}


export default connect(stateToProps, dispatchToProps)(TodoList)