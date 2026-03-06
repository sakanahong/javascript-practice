const numbers = [10,20,30];

const plusFive = numbers.map((t)=>t+5);
console.log(plusFive);

const users =[
    {_ID:1,Name:"Hong",isActive: false},
    {_ID:2,Name:"Yong",isActive: true},
    {_ID:3,Name:"Song",isActive: false}
];

const filterActive = users.filter((t)=>t.isActive);
console.log(filterActive);

const findUser = users.find((t)=>t._ID === 3);
console.log(findUser);

const cart =[
    {_ID: 1,item: "Cookies", price:10,qty:2},
    {_ID: 2,item: "Egg", price:5,qty:2},
    {_ID: 3,item: "Noodle", price:2,qty:2}
];

const totalUp = cart.reduce((sum,t)=>sum + (t.price*t.qty),0);
console.log(totalUp);

const showTitle = cart.map((t)=>t.item);
console.log(showTitle);

const tasks =[
    {_ID:1,Name:"Edit Photo",isCompleted: false},
    {_ID:2,Name:"Edit Video",isCompleted: true},
    {_ID:3,Name:"Register",isCompleted: true}
];

const completedTask = tasks.filter((t)=> t.isCompleted);
const compeltedTaskList = tasks.reduce((count,t)=>count + (t.isCompleted?1:0),0);
console.log(compeltedTaskList);