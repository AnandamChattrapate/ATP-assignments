
// validation of title 

function validateTitle(title) {
  if(!title||title.length<3) {
    return {valid: false}
  }
  return {valid: true}
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  const valid=['low','medium','high'];
  let flag=false
  for (let i=0;i<valid.length;i++){
    if (valid[i]==priority){
      flag=true
    }
  }
  if (flag) {return {valid: true}}
  return {valid: false}
}


// check if date is future ,must be future
function validateDueDate(date) {
  let d1=new Date(date)
  let currentDate=new Date()
  if (d1>currentDate){
    return {valid:true}
  }
  return {valid: false}
}

export {validateTitle,validatePriority,validateDueDate}
