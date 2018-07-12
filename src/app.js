console.log("App.js Is Running");

//JSX - JavaScript XML

var app ={
    tittle:'Some Title',
    subtitle:'Subtitle',
    options : ['one', 'two']
};
var template = (
    <div>
        <h1>{app.tittle}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
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
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.name >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
