var React = require('react');
var Counter = require("./Counter");
module.exports = React.createClass({
	getInitialState:function(){
		return {Liked:true,clickCounter:0}
	},
	handClick:function(event){
		this.setState({Liked:!this.state.Liked,clickCounter:this.state.clickCounter+1})
	},
	render:function(){
		var text = this.state.Liked?"喜欢":"讨厌";
		return(<div>
              <p onClick = {this.handClick}>我{text}你</p>
              <Counter clickCounter = {this.state.clickCounter} />
			</div>)
	}
})