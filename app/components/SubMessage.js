var React = require('react');
module.exports = React.createClass({
	componentWillReceivePros:function(nextProp){
		console.log("子组件将要获得prop")
	},
	shouldComponentUpdate:function(nextProp,nextState){
		if(nextProp.count<5) return false; 
		return true;

	},
	render:function(){
		return(
			<h3>当前计数为：{this.props.count}</h3>
		)
	}
})