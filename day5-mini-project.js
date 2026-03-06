const tasks = [
  { id: 1, title: "Learn map()", completed: true, priority: 2 },
  { id: 2, title: "Practice reduce()", completed: false, priority: 1 },
  { id: 3, title: "Read Next.js routing", completed: false, priority: 3 },
  { id: 4, title: "MongoDB schema basics", completed: true, priority: 2 }
];

const completedTasks = tasks.reduce((count,t)=> count+(t.completed?1:0),0);
console.log(completedTasks);

const pending = tasks.filter((t)=> !t.completed);
console.log(pending);

const totalTasks = tasks.length;
console.log(totalTasks);

const completedPercentage = (completedTasks/totalTasks)*100;
console.log(`The completed percentage is : ${completedPercentage} %`);

const highestPriorityPendingTask = tasks.filter((t)=>!t.completed && t.priority === 1);
console.log(highestPriorityPendingTask);

const pendingTasks = tasks.filter((t) => !t.completed).map((t)=> t.title);
console.log(pendingTasks);

console.log("--------------------------------");
