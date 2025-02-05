//----------Opgave 1 ----------------------
// const myObject = {
//   name: "Object",
//   id: 101,
//   isColor: false,
//   place: "Copenhagen"
// }

// console.log(myObject.name)
// console.log(myObject.id)
// console.log(myObject["isColor"])
// console.log(myObject["place"])



//------------ Opgave 2------------

// const myObject = {
//   name: "Object",
//   id: 101,
//   isColor: false,
//   objectitems: ["Read", "Write", "Exam", "Pass"],
//   place: {
//     street: "Vestre Kvartregade",
//     city:"Copenhagen",
//     country: "Denmark"
//   }
// }

// //-- Output for array ----------

// myObject.objectitems.forEach(item => console.log(item))

// //------- Output for object -----------

// console.log(myObject.place.city);
// console.log(myObject.place["country"]);



//--------------- Object Opgave 3 -----------

const studentListDiv = document.querySelector(".creatElemt");

const students = [
  { name: "Sofie", age: 25, course: "Webudvikler"},
  { name: "Lukas", age: 22, course: "Mediegrafiker"},
  { name: "Emil", age: 28, course: "Teknisk designer"}
]

// students.forEach((student) => {
//   const studentDiv = document.createElement("div");
//   // studentDiv.textContent = student.name + ', Alder: ' + student.age + ', Uddannelse: ' + student.course;

//   studentDiv.textContent = `${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`;
//   studentListDiv.append(studentDiv);
// })

//------- 3 Extra task 1 - add classList------
// students.forEach((student) => {
//   const studentDiv = document.createElement("div");
//   // studentDiv.textContent = student.name + ', Alder: ' + student.age + ', Uddannelse: ' + student.course;

//   studentDiv.textContent = `${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`;
//   studentDiv.classList.add("student")
//   studentListDiv.append(studentDiv);

// })

//------- 3 Extra task 2 - add <h2> and <p> ------
students.forEach((student) => {
  const studentDiv = document.createElement("div");
  studentDiv.classList.add("student");

  const studentHeadLine = document.createElement("h2");
  studentHeadLine.textContent = student.name;

  const studentInfo = document.createElement("p");
  studentInfo.textContent = `Alder: ${student.age}, Uddannelse: ${student.course}`;
  studentDiv.append(studentHeadLine, studentInfo);
  studentListDiv.append(studentDiv)
})


