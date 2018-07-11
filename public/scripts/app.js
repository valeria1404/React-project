console.log("App.js Is Running");

//JSX - JavaScript XML
//var template = <h1>This is JSX  from app.js!</h1>;
var template = React.createElement(
    "h1",
     { id:"someid"},
    "Something new"
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
