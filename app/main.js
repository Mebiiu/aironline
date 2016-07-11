var React = require('react');
var ReactDOM = require('react-dom');
var App = require("./components/app");
var TagList = [<a href="#">Facebook</a>,
  <a href="#">Google</a>];
ReactDOM.render(<App list={TagList} />, document.getElementById("app"));

	
