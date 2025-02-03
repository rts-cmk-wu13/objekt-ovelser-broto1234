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

const myObject = {
  name: "Object",
  id: 101,
  isColor: false,
  objectitems: ["Read", "Write", "Exam", "Pass"],
  place: {
    street: "Vestre Kvartregade",
    city:"Copenhagen",
    country: "Denmark"
  }
}

//-- Output for array ----------

myObject.objectitems.forEach(item => console.log(item))

//------- Output for object -----------

console.log(myObject.place.city);
console.log(myObject.place["country"]);

