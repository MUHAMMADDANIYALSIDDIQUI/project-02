function number(){
let num = Math.random();
console.log(num.toFixed(3)*100);
}
let UserNames= [];
function push(){
    UserNames.push(prompt("Enter Names"));
  console.log(UserNames);
}
function pop(){
    UserNames.pop();
 console.log(UserNames);
}
function sort(){
    UserNames.sort();
   console.log(UserNames);
}
function Rev(){
    UserNames.reverse();
    console.log(UserNames);
}
function Shift(){
    UserNames.reverse();
    console.log(UserNames);
}
function Unshift(){
    UserNames.reverse();
    console.log(UserNames);
}
let Persons= []
function Register(){
    //Console.clear();
    Persons.push(
      {
        Name : prompt("Enter Name"),
        pwd : prompt("Enter password"),
      }
    );
    console.log(persons);
}
function login(){
    let pass = prompt("Enter Password to login");
    for(let i=0; i<Persons.length; i++){
        if (pass==Persons[i].pwd){
            alert(`Welcome Mr ${Persons[i].Name}`);
        }
    }
}

let name = [];
function PUSH(){
    names.push();
}

let names = ["Faaiz", "Daniyal", "Ibrar", "Maaz"];
names.splice(2,1 , "siddiqui");
let result = names.join(" ")
console.log(result)
//
let arrays = ["Faaiz", "Daniyal", "Ibrar", "Maaz"];
function deleting(){
    array.splice(prompt("Enter Index"), prompt("Enter number of elements in delete"));
    console.log(array);
}
function add(){
    array.splice(prompt("Enter index",0,prompt))
}

let persons = []
function sumbit(){
let names = document.getElementById("names").value;
persons.push(names)
document.getElementById("names").value="";
console.log(names);

//mdaniyalsiddiqui01@gmail.com
}