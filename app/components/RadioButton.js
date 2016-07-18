var React = require('react');
module.exports = React.createClass({
	render:function(){
		return (
			<span>
				A
				<input type="Radio" name="goodRadio" value="A" onChange={this.props.handleRadio}/>
				B
				<input type="Radio" name="goodRadio" value="B" onChange={this.props.handleRadio}/>
				C
				<input type="Radio" name="goodRadio" value="C" onChange={this.props.handleRadio}/>
			</span>
			)
	}
	})