var namevar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', namevar);

let nameLet = 'Jen';
nameLet ='Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Block scoping

const fullName = 'Valeria Hernandez';
let firstName;

if(fullName){
    let firstName = fullName.split('')[0];
    console.log(firstName);
}

console.log(firstName);