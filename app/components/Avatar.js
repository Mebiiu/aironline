var React = require('react');
var ProfileLink = require('./ProfileLink');
var ProfilePic = require('./ProfilePic');
var MessageBox = require('./MessageBox');
var MarkdownEditor = require('./MarkdownEditor');
var FormApp = require('./FormApp');
module.exports = React.createClass({
	render:function(){
		return (
			<div>
				<ProfileLink name = {this.props.name} />
				<ProfilePic link = {this.props.link} />
				< MessageBox />
				<MarkdownEditor />
				<FormApp />
			</div>
			)
	}
})