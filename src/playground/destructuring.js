/*
//Object Destructuring
const person = {
    name : 'Sharath',
    age : 25,
    location: {
        city : 'Karur',
        temp : 95
    }
};

const {name : firstName = 'ananymous', age } = person;

console.log(`${firstName} is ${age} year(s) old`);

const {city, temp: temprature} = person.location;

if(city && temprature) {
    console.log(`It is ${temprature} at ${city}`);
}

const book = {
    title : 'Test Book',
    author : 'Tester',
    publisher : {
        name : 'Penguin'
    }
};

let {name : publisherName = "Self Publisher"} = book.publisher;
console.log(publisherName);
*/

//Array Destructuring
const address = ['20 Periya Kalipalayam', 'Karur', 'TN', '639004'];

const [, city, state] = address;

console.log(`You are in ${city} from ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [cofeeType, , mediumPrice] = item;
console.log(`A medium ${cofeeType} costs ${mediumPrice}`);