// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
     // 1. filter() employees from IT department
console.log(employees.filter(e => e.department==='IT'))


    // 2. map() to add:
    //         netSalary = salary + 10% bonus
employees.map(e => {
    e.netSalary=e.salary*0.10 + e.salary;
})
console.log(employees)

    // 3. reduce() to calculate total salary payout
const totalSalaryPayout=employees.reduce(
  (total,emp) => total + emp.netSalary,0);
console.log(totalSalaryPayout)
    // 4. find() employee with salary 30000
console.log(employees.find(e => e.salary===30000))
    // 5. findIndex() of employee "Neha"
console.log(employees.findIndex(e => 
    e.name=='Neha'
))
