let fruits = ["Durian","mango","Rambutan","jackfruit","Grape"];

for (let i=0;i < fruits.length;i++){
    console.log(fruits[i]);
}

let person = {
    name: "Zhi Hong",
    age: 12,
    isLearning: true
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isLearning);

person.age = 99;
person.address = "Kuala Lumpur"

console.log(person);


let movie = {
    name: "Transformers",
    Year: 2020,
    Director: "Michael Bay"
}

console.log(movie);

movie.year = 2022;
movie.actor ="Amber";
console.log(movie);

for (let i = 0 ;i <5;i++){
    console.log(`The current number is ${i+1}`);
}

let countrys =["USA","Mexico","Malaysia", "indonesia"];

for (const country of countrys){
    console.log(`The country is : ${country}`);
}

let hobbies = ["Diving","Badminton","Swimming","Cycling","Jumping"];

for (const hobby of hobbies){
    console.log(`My favourite hobbies is ${hobby}`);
}



let colors = ["Pink","Red","black","Grey"];
console.log(colors[1]);

colors.push("Shiny");
console.log(colors);

let car = {
    Brand: "Toyota",
    Model: "GR86",
    Year: 2022
};

console.log(`The car i bought is ${car.Brand+car.Model} which is produce by year ${car.Year}`);

car.Year = 2020;

console.log(`The car i bought is ${car.Brand+car.Model} which is produce by year ${car.Year}`);

for (i=0 ; i<10;i++){
    console.log(`This is ${i+1}`);
};

for (i=0;i<colors.length;i++){
    console.log(`This is ${colors[i]}`);
};

for (const color of colors){
    console.log(`This is ${color}`);
}

let products = [
    {brand: "Nestle", price: 99, expiry: 2022},
    {brand: "Quakers", price: 44, expiry: 2021},
    {brand: "Coke", price: 11, expiry: 2020}
];

for (const product of products){
    console.log(`This is a ${product.brand} product where it is with the price tag of ${product.price} and expiry by ${product.expiry}`);
};

let students = [
    {name: "Andrew", score: 99},
    {name: "Jack", score: 100},
    {name: "Steve", score: 40}
];

console.log("Student result :")

for (const student of students){
    if(student.score > 80){
        console.log(`Name : ${student.name} with the score :${student.score} - Great Job !`); 
    }else{
        console.log(`Name : ${student.name} with the score :${student.score} - Try better  !`);
    };
};
