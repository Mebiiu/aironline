var React = require('react');
var RadioButton = require("./RadioButton");
var CheckBoxes = require("./CheckBoxes");
module.exports = React.createClass({
	getInitialState:function(){
		return{
			inputValue:'请输入',
			selectValue:'B',
			radioValue:'B',
			checkValue:[],
			textareaValue:"请输入。。"
		}
	},
	handleSubmit:function(e){
		e.preventDefault();
		var formData = {
			input:this.refs.goodInput.value,
			select:this.refs.goodSelect.value,
			radio:this.state.radioValue,
			check:this.state.checkValue,
			textarea:this.refs.goodTextarea.value,
		}
		console.log('the form result is:')
        console.log(formData);
	},
	handleRadio:function(e){
		this.setState({
			radioValue:e.target.value,
		})
	},
	handleCheck:function(e){
		var checkValues = this.state.checkValue.slice();
		var newVal = e.target.value; 
		var index = checkValues.indexOf(newVal);
		if(index == -1){
			checkValues.push(newVal);
		}
		else{
			checkValues.splice(index,1)
		}
		this.setState({
			checkValue:checkValues,
		})	
	},
	render:function(){
		return(	
			<form onSubmit={this.handleSubmit}>
				<input type="text" defaultValue={this.state.inputValue } ref="goodInput"/><br/>
				选项：
				<select  defaultValue = {this.state.selectValue} ref="goodSelect">
					<option>A</option>
					<option>B</option>
					<option>C</option>
					<option>D</option>
				</select>
				<p>Radio Button</p>
				<RadioButton ref="goodRadio"  handleRadio = {this.handleRadio} />
				<p>Check Button</p>
				<CheckBoxes ref= "goodCheck" handleCheck = {this.handleCheck} />
				<br/>
				<textarea defaultValue={this.state.textareaValue} ref= "goodTextarea" >
				</textarea>
				<button type="submit">提交</button>
		</form>
		)
	}
})