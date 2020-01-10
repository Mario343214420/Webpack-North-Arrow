var React = require('react');
var ReactDOM = require('react-dom');
var style = require('./index.css');

ReactDOM.render(
  <div>
    <h1 className={style.h1}>This is css-h1</h1>
    <h2 className="h2">This is css-h2</h2>
  </div>,
  document.getElementById("app")
)
