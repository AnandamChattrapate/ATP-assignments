// Smart Login Status Engine

function statu(isLoggedin,isProfileComplete){
if (!isLoggedin){
    return 'please login';
}else if( isLoggedin && (!isProfileComplete)){
    return 'complete ut profile';
}else if (isLoggedin && isProfileComplete){
    return 'Welcome back';
}

}
console.log(statu(true,false))

// Course Price Tag Labeler

function test(){
    courseTag=""
    let price=1299;
    if (price<500){
        courseTag="budget course";
    }else if(price>=500 && price <=1000){
        courseTag="standard course";
    }else{
        courseTag="Premium course"
    }
    console.log("Course Price Tag Labeler : ",courseTag);
}
 test();

 
 // Enrollment Eligibility Checker
  
let hasPaid = true;
let hasCompletedBasics = false;

// 1. If both conditions are true → "Enroll Now"
// 2. Otherwise → "Complete Requirements"
// 3. Use ternary operator
// 4. Store result in enrollMessage
// 5. Print message
let enrollMessage= hasCompletedBasics && hasPaid ? "ENROLL NOW ": " Complete Requirements "
console.log(enrollMessage)

