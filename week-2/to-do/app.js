import {addTask,getAllTasks,completeTask} from './task.js'

console.log("----------------todo app test------------------------------");

// add tasks
let r1=addTask("Buy medicine","high","2026-01-25");
let r2=addTask("Finish React proj.","medium","2026-01-30");
let r3=addTask("Call landlord","low","2026-02-01");

// test invalid -> title len <3, priority
let r4 = addTask("a","urgent","2026-01-23");

// log all tasks
console.log("---all tasks----");
let tasks = getAllTasks();
tasks.forEach(t => {
  console.log(t);
});
// completing a task
console.log("completing task 2 ");
let result=completeTask(2);

console.log("---tasks ----");
tasks = getAllTasks();
tasks.forEach(t => {
  console.log(t );
});
