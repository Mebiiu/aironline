var React = require('react');
var Css = require('../css/base')
module.exports = React.createClass({
	render:function(){
		return (
			<a href="http://www.wzp924.com" className="orange">{this.props.name}</a>
			)
	}
})