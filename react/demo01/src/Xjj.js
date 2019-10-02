// 2019.9.30
import React, { Component, Fragment } from "react";
import XjjItem from "./XjjItem";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// 2019.10.1
import Boss from "./Boss";

class Xjj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      list: ["基础按摩", "精油推背"],
      avname: "古川",
      show: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.addList = this.addList.bind(this);
    this.delItem = this.delItem.bind(this);
  }

  // 生命周期函数
  // componentWillMount() {
  //   console.log('componentWillMount----组件将要挂载在页面的时刻');
  // }

  // componentDidMount() {
  //   console.log('componentDidMount----组件完成挂载');
  // }

  // shouldComponentUpdate() {
  //   console.log('1-shouldComponentUpdate');
  //   return true
  // }

  // componentWillUpdate() {
  //   console.log('2-componentWillUpdate----组件即将更新');
  // }

  componentWillMount() {}

  // 只加载一次,适合渲染数据的远程请求
  componentDidMount() {
    console.log("componentDidMount");
    axios.defaults.headers["content-type"] =
      "application/x-www-form-urlencoded";
    axios
      .get(
        "https://www.easy-mock.com/mock/5d92ff5c68fbce0e4ca78b1f/ReactDemo01/xjj#!method=get"
      )
      .then(res => {
        console.log("axios 获取数据成功: " + JSON.stringify(res));
        this.setState({
          list: res.data.data
        });
      })
      .catch(error => {
        console.log("axios 获取数据失败: " + error);
      });
  }

  render() {
    // console.log('3-render----组件正在渲染');
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputVal}
            ref={input => {
              this.input = input;
            }}
            onChange={this.handleChange}
          />
          <button onClick={this.addList}>添加服务</button>
        </div>
        <div>
          <ul
            ref={ul => {
              this.ul = ul;
            }}
          >
            <TransitionGroup>
              { this.state.list.map((item, index) => (
                <CSSTransition
                  timeout={2000}
                  classNames="boss-text"
                  onEntered={el => {
                    {/* el是当前动画节点 */}
                    {/* el.style.color="red" */}
                  }}
                  unmountOnExit
                  appear={true}
                  key={index + item}
                >
                  <XjjItem
                    key={index + item}
                    content={item}
                    index={index}
                    avname={this.state.avname}
                    delItem={this.delItem}
                  />
                </CSSTransition>
              )) }
            </TransitionGroup>
          </ul>
          <Boss />
        </div>
      </Fragment>
    );
  }

  handleChange() {
    this.setState({
      inputVal: this.input.value
    });
  }

  addList() {
    if (this.state.inputVal === "") return;
    // this.setState是一个异步方法,所以相关的参数应该在setState的回调中获取
    this.setState(
      {
        list: [...this.state.list, this.state.inputVal],
        inputVal: "",
      },
      () => {
        console.log(this.ul.querySelectorAll("li").length);
      }
    );
  }

  delItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list
    });
  }
}

export default Xjj;
