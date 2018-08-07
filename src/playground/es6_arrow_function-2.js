// arguments object -no longer with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b; 
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound


const user = {
    name :'valeria',
    cities :['Monterrey', 'Puebla', 'Guadalajara'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }  
};
console.log(user.printPlacesLived());


//change Area
//numbers array of numbers
//multipli - function who return array wehere the number have been multiplied
const multiplier = {
    numbers : [5,15,29],
    multiplyby : 5,

    multiply(){
        return this.numbers.map((number) => number * this.multiplyby);
    }

};

console.log(multiplier.multiply());

