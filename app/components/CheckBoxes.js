var React = require("react");
module.exports = React.createClass({
	render:function(){
		return(
			<span>
				A
				<input type="checkbox" name="goodCheck" value="A" onChange={this.props.handleCheck} />
				B
				<input type="checkbox" name="goodCheck" value="B" onChange={this.props.handleCheck} />
				C
				<input type="checkbox" name="goodCheck" value="C" onChange={this.props.handleCheck} />
			</span>
			)
	}
})