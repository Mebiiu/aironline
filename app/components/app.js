var React = require("react");

module.exports = React.createClass({
	render:function(){
		return (
			 <ul>
		        {this.props.list.map(function(child){
		        	return <li>{child}</li>;
		        })}
      </ul>


			)	
	}
		
	
})
 	
