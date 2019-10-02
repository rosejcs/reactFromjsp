import React,{Component} from 'react'
import PropTypes from 'prop-types'

class XjjItem extends Component {
  constructor(props) {
    super(props) 
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  // 子组件中的生命周期函数
  // componentWillReceiveProps() {
  //   console.log('child----componentWillReceiveProps----即将接收props');
  // }

  // componentWillUnmount() {
  //   console.log('child----componentWillUnmount----组件删除');
  // }

  shouldComponentUpdate(nextProps,nextState) {
    return nextProps.content !== this.props.content
  }

  render() {
    console.log('child----render----子组件渲染');
    return (
      <li
        onClick={this.handleClick}
      >
        {this.props.avname}为您进行---{this.props.content}
      </li>
    )
  }

  handleClick() {
    this.props.delItem(this.props.index)
  }

}

XjjItem.propTypes = {
  avname:PropTypes.string.isRequired,
  content:PropTypes.string,
  index:PropTypes.number,
  delItem:PropTypes.func
}
XjjItem.defaultProps = {
  avname:'结城'
}
export default XjjItem

/**
 * npm install --save axios --- 安装依赖到生产环境中dependencies中
 * npm install --save-dev axios --- 安装依赖到开发模式devDependencies中
 *  */