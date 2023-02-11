/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  let passed = arr.map(myFunction);

  function myFunction(student){
    if(student.marks>50)
    {
      return student;
    }
  }
  console.log(passed);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(myFunction);

  function myFunction(student){
    if(student.marks>50){
      console.log(student);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  let newStudent = {id:4,name:"susan",age:"20",marks:45};
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(let i=0;i<arr.length;i++){

    if(arr[i].marks<50){
      arr.splice(i,1);
      i--;
    }
  }
  console.log(arr);
}

let arr2 = [
  { id: 5, name: "sam", age: "18", marks: 40 },
  { id: 6, name: "cody", age: "20", marks: 90 },
  { id: 7, name: "michael", age: "19", marks: 52 },
];
function concatenateArray() {
  //Write your code here, just console.log
  arr = arr.concat(arr2);
  console.log(arr);
}
