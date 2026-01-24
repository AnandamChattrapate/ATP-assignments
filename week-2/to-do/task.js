import {validateTitle,validatePriority,validateDueDate} from './validator.js';

const tasks=[]
let id=1

// add task 
function addTask(title, priority, dueDate) {
  // validate inputs
  let check1 = validateTitle(title)
  if(!check1.valid) return {success: false}
  
  let check2 = validatePriority(priority)
  if(!check2.valid) return {success: false}
  let check3 = validateDueDate(dueDate)
  if(!check3.valid) return {success: false}
  
  // attributes of task -> id,titlr,priority,duedate,completed,created
  let task = {
    id:id++,
    title:title,
    priority:priority,
    dueDate:dueDate,
    completed:false,
    createdAt: new Date().toISOString() 
  }
  
  tasks.push(task);
  console.log("task Added Successfully ")
  return {success:true,task:task};
}

// get all tasks
function getAllTasks() {
  return tasks;
}
// mark tasks as completed,with id mark it as done
function completeTask(taskId) {
  let task = tasks.find(t => t.id===taskId);
  if(!task) console.log("task not found")
  if(!task) return {success: false}
  task.completed=true;
  console.log("task marked a completed")
  return {success:true,task:task};
}

export {addTask,getAllTasks,completeTask}
