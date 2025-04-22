import {concat, Car, parking, totalPrice, getData} from './Basic'
import axios from 'axios';

//0) [X] Review package.json basics. Understand what happens when 'npm run test' is executed. 
//1) [X] Write a test for a function that concatonates two strings.
test('concat two strings', () => {
    expect(concat('one', 'two')).toBe('onetwo');
});

//3) [X] Write a test to create an instance of a car class with properties brand of type string and price of type number
test('create car class', () => {
    const myCar = new Car("Tesla", 35000);
    expect(myCar.brand).toBe('Tesla');
    expect(myCar.price).toBe(35000);
})
//5) [ ] Write a test to see if there is a method to the car class called honk that returns the string 'honk'
test('should be a method called honk that returns string honk', () => {
    const myCar = new Car("Tesla", 35000);
    expect(myCar.honk()).toBe('honk');
})
//7) [ ] Write a test to see if there is a method to the car class called title that takes a name argument and returns the string 'my name is <name> and my brand is <brand>'
test('take in name and return string of name and brand', () => {
    let brand = 'Tesla';
    let price = 35000;
    const myCar = new Car(brand, price);
    let name = 'Ashley';
    expect(myCar.title(name)).toBe(`my name is ${name} and my brand is ${brand}`)
})
//9) [ ] Write a test to see if an array called 'parking' can hold instances of cars.
test('create array called parking which holds instances of cars', () => {
    const myCar = new Car('Tesla', 35000);
    const anotherCar = new Car('Rivian', 60000)
    parking.push(myCar);
    parking.push(anotherCar);
    expect(parking).toHaveLength(2);
})
//11) [ ] Write a test for a function called "totalPrice" that returns the total price of all cars in the parking lot given the array as an argument
test('return the total price of cars in parking lot', () => {
    expect(totalPrice()).toBe(95000);
})
//13) [ ] Write a test for a function called "getData" that calls an API with axios and returns a object with the key of 'data' and a value object with properties 'words' of type string and 'numbers' of type numbers
test("create function called 'getData' that calls an API with axios and returns an object with the key of 'data' and a value object with properties 'words' of type string and 'numbers' of type numbers ", async () => {
    const expectedResult: any = {
        data: {
            words: "fhsdfh",
            numbers: 1234
        }
    }
    jest.spyOn(axios, 'get').mockReturnValue(expectedResult)
    const result = await getData();
    console.log('result', result)
    expect(result).toStrictEqual(expectedResult)
})

//13) Note: use this mock result structure {data: { words: "string", numbers: 5}} 
//13a) verify if axios is installed via package.json file
//13b) Install axios
//13c) import axios, mock it, write the mock response, then write the test.
