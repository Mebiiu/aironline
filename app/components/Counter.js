var React = require('react');
module.exports = React.createClass({
	
	render:function(){
		var clickNum = this.props.clickCounter;
		return(<div>
				<p>我被点击了{clickNum}次</p>
			</div>)
	}
})