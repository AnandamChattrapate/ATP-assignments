// Assignment 1: User Profile Manager
// Scenario : You are managing a logged-in user’s profile in a web application.

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

    // 1. Read and print the user’s name and email
console.log(user.name," ",user.email)
    // 2. Add a new property lastLogin: "2026-01-01"
user.lastLogin="2026-01-01"
    // 3. Update role from "student" to "admin"
user.role="admin"
    // 4. Delete the isActive property
delete user.isActive
    // 5. Use Object.keys() to list all remaining fields
console.log(Object.keys(user))



// Assignment 2: Exam Result Summary
// Scenario : Marks are stored subject-wise for a student.

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// 1. Calculate total marks


function Total(marks){
    let x=Object.values(marks)
    let n=x.length
    let ob=Object.keys(marks)
    console.log("marks ",x)
m=-1
id=-1
s=0
    for (v of x){
        id+=1
        if ( v>=m){
            m=v
            sub=ob[id]
        }
        s+=v;
    }
    // 2. Calculate average marks
// 3. Find the highest scoring subject
    console.log("average marks : ",s/n);
    console.log("highest subject : ",sub);

}
Total(marks)
//     4. Add a new subject computer: 90
marks.computer=90
console.log(marks)

// Assignment 3: Application Settings Controller
// Scenario : A web app stores user preferences as settings.

const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


    // 1.Toggle theme between "light" and "dark"
    console.log("toggling light ")
    for (let i=0;i<10;i++){
        if (settings.theme==='light'){
            settings.theme='dark'
        }else{
            settings.theme='light'
        }
        console.log(settings)
    }
    // 2. Turn autoSave to true
settings.autoSave=true
    // 3. Remove the notifications setting
delete settings.notifications
console.log(settings)
    // 4. Freeze the settings object so it cannot be modified
Object.freeze(settings)
   
