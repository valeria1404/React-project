console.log("App.js Is Running");

//JSX - JavaScript XML

const app ={
    tittle:'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options : ['one', 'two']
};
const template = (
    <div>
        <h1>{app.tittle}</h1>
       {app.subtitle &&<p>{app.subtitle}</p>}
       <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;
const templateThree= (
    <div>
        <h1>Count: {count}</h1>
        <button id="MyId" className="button">+1</button>
    </div>
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

const appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
