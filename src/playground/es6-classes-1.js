class Person {
    constructor(name = 'Anonymous', age= 0){
        this.name = name;
        this.age = age;
    }
    getGrettting(){
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old. `;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name,age,major);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}`

        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGrettting(){
        let getting = super.getGrettting();

        if(this.homeLocation){
            getting += `I am visiting from ${this.homeLocation}.`;
        }
        return getting;
    }
}

const me = new Traveler('valeria', 23, 'Philadelphia');
console.log(me.getGrettting());

const other = new Traveler();
console.log(other.getGrettting());