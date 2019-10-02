import React, { Component } from "react";

// - TransitionEvent
// - CSSTransition
// - TransitionGroup
import { CSSTransition } from "react-transition-group";

class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
    this.toToggle = this.toToggle.bind(this);
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
          unmountOnExit
          appear={true}
        >
          <div>Boss级人物-孙悟空</div>
        </CSSTransition>

        <div>
          <button onClick={this.toToggle}>召唤Boss</button>
        </div>
      </div>
    );
  }

  toToggle() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  // 生命周期函数
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isShow !== this.state.isShow;
  }
}

export default Boss;
