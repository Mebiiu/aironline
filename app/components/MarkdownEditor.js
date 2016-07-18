var React = require('react');
var showdown  = require('showdown')
var converter = new showdown.Converter();

module.exports = React.createClass({
  getInitialState: function() {
    return {value: '# 我是一级大标题'};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.value});
  },
  conponentDidMount: function(){
    console.log(this.refs.textarea);
  },
  conponentWillMount: function(){
    // dangerouslySetInnerHTML这种功能主要用来与 DOM 字符串操作类库一起使用，
    // 所以提供的 HTML 必须要格式清晰
    // console.log(converter.makeHtml(this.state.value));
  },
  render: function() {
    return (
      <div className="MarkdownEditor">
        <h3>输入</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h3>输出</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(this.state.value)
          }}
        />
      </div>
    );
  }
});