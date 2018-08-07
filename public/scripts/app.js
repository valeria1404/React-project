'use strict';

console.log("App.js Is Running");

//JSX - JavaScript XML

var app = {
    tittle: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.tittle
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var count = 0;
var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { id: 'MyId', className: 'button' },
        '+1'
    )
);

console.log(templateThree);

/*
const user = {
    name :'Valeria Hernandez',
    age : 26,
    location : 'Insurgentes Sur'
};

function getLocation(location){
    if(location){
        return <p>Location: {location} </p>;
    }else{
        return undefined;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);*/

var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
