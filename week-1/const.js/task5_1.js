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
