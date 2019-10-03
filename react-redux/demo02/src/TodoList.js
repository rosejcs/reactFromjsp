import React,{Component} from 'react'
import { Input, Button,List } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {/* input module */}
        <div>
          <Input 
            placeholder="Write Something"
            value={this.props.inputValue}
          />
          <Button type="primary">增加</Button>
        </div>
        {/* show module */}
        <div>
          <List
            bordered
            dataSource={this.props.list}
            renderItem={(item,index)=>(
              <List.Item >{item}</List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    inputValue:state.inputValue
  }
}


export default connect(stateToProps, null)(TodoList)