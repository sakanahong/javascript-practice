let students = [
    {name: "hong", age: 20, gentle: "Male"},
    {name: "Yong", age: 30, gentle: "Female"},
    {name: "Song", age: 40, gentle: "Male"}
];
for (const student of students){
    console.log(`This is ${student.name} , ${student.age} years old which is a ${student.gentle}`);    
}


function greet(name){
    console.log(`Hello, my name is ${name}`);
}

let names = ["Zhi Hong","Ali","jack"];

for (const name of names){
    greet(name);
}

function add(a,b){
    return a+b;
}

let result = add(1,2);
console.log(result);

function showSum(a,b){
    console.log(a+b);
}

function getSum(a,b){
    return a+b;
}

let sum = showSum(2,3);
let total = getSum(3,3);
console.log(total);


function multiple(a,b){
    return a*b;
}

function devide(a,b){
    return a/b;
}

console.log(multiple(1,2));
console.log(devide(10,2));


function getFullName(firstname, lastname){
    return `${firstname} ${lastname}`;
}

console.log(getFullName("Zhi","Hong"));


function checkAge(a){
    if (a >= 21){
        return "Adult"
    }else if( a == 0){
        return "Invalid Age"
    }else{
        return "Kids"
    };
}

console.log(checkAge(30));
console.log(checkAge(0));
console.log(checkAge(10));


function printFruits(fruits){
    for (const fruit of fruits){
        console.log(fruit);
    }
};

let fruitList = ["Durian","Rambutan","Mango"];
printFruits(fruitList);


console.log("------------------------------------");

function sayHello(){
    return "hello";
}

greeting = sayHello();
console.log(greeting);


function square(a){
    return a*a;
}

console.log(square(2));

function isEven(a){
    if (a % 2 == 0){
        console.log(a/2);
        return true;
    }else{
        return false;
    }
};

console.log(isEven(2));
console.log(isEven(3));

function getGreeting(a){
    return `Hello, my name is ${a}`;
};

console.log(getGreeting("Zhi Hong"));

function getLastItem(a){
    return a[a.length-1];
}

let list = ["1","2","3","4"];

console.log(getLastItem(list));

function getUserInfo(a){
    return `Hello, my name is ${a.name}, I'm ${a.age} years old.`;
};

let details = {
    name: "Hong",
    age: 22
}

console.log(getUserInfo(details));

function checkNumber(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(8));
console.log(checkNumber(-3));
console.log(checkNumber(0));


function applyDiscount(price,discountPercentage){
    let discountAlmount = (price * discountPercentage)/100;
    return price - discountAlmount;
}

console.log(applyDiscount(100,20))

function getGrade(a){
    if(a >= 80){
        return "Grade A";
    }else if( a >= 60){
        return "Grade B";
    }else if(a >= 40){
        return "Grade C";
    }else {
        return "Fail !";
    }
};

function printStudentResult(name,score){
    let grade = getGrade(score);
    return `Name : ${name} - Score : ${score} - Grade : ${grade}`;
}

console.log(printStudentResult("hong",80));
console.log(printStudentResult("yong",60));
console.log(printStudentResult("song",40));
console.log(printStudentResult("bong",9));


function getLarger(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
};

console.log(getLarger(5,10));

function getQuantity(a){
    return length = a.length;
}

let longList = ["1","2","3","4"];

console.log(getQuantity(longList));

function genFront(a){
    if(a.gentle == "Male"){
        return "Mr. ";
    }else{
        return "Miss. "
    }
}

let fullNameList = [
    {name: "hong",age: 20, sex: "Male"},
    {name: "Song",age: 20, sex: "Female"}
];

for (const fnamelist of fullNameList){
    console.log(`${genFront(fnamelist.name)}${fnamelist.name} is ${fnamelist.sex}`)
};

function isEmpty(a){
    if (a==""){
        return "This is empty"
    }else{
        return "This is not empty"
    }
}

let testList = ["","a",""];

for (const tList of testList){
    let state = isEmpty(tList);
    console.log(state);
}

let product = [
    {name: "laptop", price: 3000},
    {name: "bread", price: 299}
]

function getPrice(a){
    return `The price of ${a.name} is RM ${a.price}`;
}

for (const productList of product){
    console.log(getPrice(productList));
}