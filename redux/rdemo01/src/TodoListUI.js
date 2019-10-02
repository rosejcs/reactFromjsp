import React, { Component } from 'react'
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

// 无状态组件
// 没有state,性能高一些,大项目中多用
const TodoListUI = (props) => {
  return (
      <div style={{ margin: "10px 0 0 10px" }}>
        <h1>hello redux</h1>
        <div>
          <Input
            placeholder="Write Something"
            style={{ width: "250px", marginRight: "10px" }}
            onChange={props.changeInputValue}
            value={props.inputValue}
          />
          <Button type="primary" onClick={props.clickBtn}>
            增加
          </Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
            <List
              bordered
              dataSource={props.list}
              renderItem={(item, index) => (
                
                  <List.Item onClick={()=>{props.delItem(index)}}>
                    {item}
                  </List.Item>
              )}
            />
        </div>
      </div>
    )
}


// class TodoListUI extends Component {
//   render() {
//     console.log('child----render---->>>');
//     return (
//       <div style={{ margin: "10px 0 0 10px" }}>
//         <h1>hello redux</h1>
//         <div>
//           <Input
//             placeholder="Write Something"
//             style={{ width: "250px", marginRight: "10px" }}
//             ref={input => {
//               this.input = input;
//             }}
//             onChange={this.props.changeInputValue}
//             value={this.props.inputValue}
//           />
//           <Button type="primary" onClick={this.props.clickBtn}>
//             增加
//           </Button>
//         </div>
//         <div style={{ margin: "10px", width: "300px" }}>
//             <List
//               bordered
//               dataSource={this.props.list}
//               renderItem={(item, index) => (
                
//                   <List.Item onClick={()=>{this.props.delItem(index)}}>
//                     {item}
//                   </List.Item>
//               )}
//             />
//         </div>
//       </div>
//     )
//   }

//   // shouldComponentUpdate
//   // shouldComponentUpdate(nextProps,nextState) {
//   //   return nextProps.inputValue !== ''
//   // }
//   shouldComponentUpdate(nextProps,nextState) {
//     return nextProps.list !== this.props.list
//   }

// }

export default TodoListUI