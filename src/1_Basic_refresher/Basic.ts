import axios from 'axios';
//2) [X] create a function that concatenates/combines 2 words
export const concat = (string1, string2) => {
    return string1.concat(string2);
}
//4) [X] create a class called "Car" that has properties brand of type string and price of type number
export class Car {
    brand: string;
    price: number;
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }

    honk() {
        return 'honk';
    }
    title(name){
        return `my name is ${name} and my brand is ${this.brand}`;
    }
}
//6) [ ] add a honk method to the Car class that returns the string 'honk'.
//8) [ ] add a title method to the Car class that takes a name argument and returns the string 'my name is <name> and my brand is <brand>'
//10) [ ] Create an array called parking
export const parking: Car[] = [];
//12) [ ] Create a function called "totalPrice" that returns the total price of all cars.
export const totalPrice = () => {
    let result = 0;
    for(let car of parking){
        result += car.price;
    }
    return result;
}
//14) [ ] Create a getData function that retrieves data from "https://jsonplaceholder.typicode.com/todos/1"

export async function getData () {
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    return result;
}
//14 note:  axios returns data in { data: (....) } key.
// The returned data has the following object format
// {
//  "userId": 1,
//  "id": 1,
//  "title": "delectus aut autem",
//  "completed": false
// }

