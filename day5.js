//(read and print data)
//const tasks = ["Setup Project", "Build UI","Connect DB"];

//tasks.forEach((task,index)=>{
//    console.log(`${index+1}. ${task}`);
//});


//Use this when shaping DB data for frontend rendering.
//(transform data for UI)
const users=[
    {name:"hong",age: 99},
    {name:"Sohai", age: 88}
];

const userCards = users.map((u)=>({
    displayName: u.name.toUpperCase(),
    ageLabel: `${u.age} years old`
}));

console.log(userCards);

//(keep matching records)
//Use this for tabs like “Completed” and “Pending”.
const tasks =[
    {title:"Learn JS", done: true},
    {title:"Learn Next.js", done: false},
    {title:"Learn MongoDB", done: false}
];

const pendingTasks = tasks.filter((t)=>!t.done);
console.log(pendingTasks);

//(get one item by id)
//Use this for detail pages: /product/[id].

const products =[
    {id:1,name:"Mouse"},
    {id:2,name:"Keyboard"},
    {id:3,name:"CPU"}
];

const item = products.find((p)=> p.id===3);
console.log(item);

//(totals and summary metrics)
//Use this for dashboard counts/totals.

const cart =[
    {item: "Book", price:10,qty:2},
    {item: "Dick", price:5,qty:4}
];

const total = cart.reduce((sum,c) => sum+c.price*c.qty,0);
console.log(total);

const carCart =[
    {item: "car", price:10, qty:10},
    {item: "book", price:100,qty:10}
];

const totalUp = carCart.reduce((sum,c)=>sum+c.price*c.qty,0);
console.log(totalUp);

console.log("------------------------------------------");

const todos =[
    {_id: "a1", title: "Design schema", completed: false, priority: 3},
    {_id: "a2", title: "Build API", completed: true, priority: 2},
    {_id: "a3", title: "Connect frontend ", completed: false, priority: 1}
];

// Titles only (for UI list)
const titles = todos.map((t)=> t.title);

// Pending only
const pending = todos.filter((t)=> !t.completed);

// First high-priority pending
const urgent = todos.find((t)=> !t.compelted && t.priority ===1);

// Completion stats
const completedCount= todos.reduce((count,t)=> count+(t.completed?1:0),0);
console.log({titles,pending,urgent,completedCount});