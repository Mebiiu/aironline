var React = require('react');
var ReactDOM = require('react-dom');
var SubMessage = require('./SubMessage');
module.exports = React.createClass({
	getInitialState:function(){
    return {
        count: 0,
    }
  },
  getDefaultProps:function(){
    console.log('getDefaultProps');
  },
  componentWillMount:function(){
    console.log('componentWillMount');
  },
  componentDidMount:function(){
    console.log('componentDidMount');
  },
  componentWillUnmount: function(){
    console.log('componentWillUnmount');
  },
  shouldComponentUpdate:function(nextProp,nextState){
    console.log('shouldComponentUpdate');
    if(nextState.count > 10) return false;

    return true;
  },
  componentWillUpdate:function(nextProp,nextState){
    console.log('componentWillUpdate');
  },
  componentDidUpdate:function(){
    console.log('componentDidUpdate');
  },
  killMySelf: function(){
      // 包括顶级容器一块干掉，当然在实际项目中可别干这样的傻事
      ReactDOM.unmountComponentAtNode(  document.getElementById('app') );
  },
  doUpdate:function(){
    this.setState({
        count: this.state.count + 1,
    });
  },
  render:function(){
    console.log('渲染')
    return (
        <div>
            <h1 > 计数： {this.state.count}</h1>
            <button onClick={this.killMySelf}>卸载掉这个组件</button>
            <button onClick={this.doUpdate}>手动更新一下组件（包括子组件）</button>
            <SubMessage count={this.state.count}/>
        </div>
    )
  }
})