//function div(){
//    document.write("Hello HTML page");
//    console.log("Hello Console");
// }
// div();
//
// let user = "daniyal";

 //function email(){
 //   let Email = prompt("Enter Email");
 //   let Password = prompt("Enter Password");
 //   if(Email== "muhammaddaniyalsiddiqui436@gmail.com" && Password=="135790"){
 //      console.log("valid email")
 //   }
 //  
 //   else{
 //       console.log("not valid Email");
 //   }
 //}
 //muhammaddaniyalsiddiqui436@gmail.com
//
 //function name(){
 //   let Name = prompt("Enter Name");
 //   let Password = prompt("Enter Password");
 //   if(Name=="M. Daniyal Siddiqui" && Password=="daniyal Sidd"){
 //       console.log("valid email")
 //   }
 //   else if(Name=="M. Daniyal" && Password=="daniyal"){
 //       console.log("valid email");
 //   }
 //   else if(Name=="M. D Siddiqui" && Password=="M.D.S"){
 //       console.log("valid email");
 //   }
 //   else{
 //      console.log("not valid Email");
   // }
 //}
 // Topic : "Array" // (object = name)
//   let cars = ["Corrola", "Civic", "Ciaz", "Cultus"];
//   console.log(cars[0]);

  //let user1= {
  //  name: "corola",
  //  model : 2023,
  //  color : "White",
  //  EngineNo: 542801,
  //  specification: "Auto",
  //  company : toyota  
  //}
  //let user2= {
  //  name: "Civic",
  //  model : 2023,
  //  color : "Black",
  //  "Engine no": 439162,
  //  specification: "Auto",
  //  company : Honda  
  //  //w
  //}
  //console.log(user1.color);

 // let userName = {
 //   Email : "mdaniyalsiddiqui243@gmail.com",
 //   Password: "Web Developer",
 //   name : "Daniyal",
 // }
 // let userName1 = {
 //   Email : "md.siddiqui60@gmail.com",
 //   Password: "Web Developer 1",
 //   name : "Siddiqui",
 // }
 // 
 // if(userName == "mdaniyalsiddiqui243@gmail.com" && Password== "Web Developer"){
 //   console.log("Valid Email && Password");
 // }
 // else if(userName1 == "md.siddiqui60@gmail.com" && Password== "WebDeveloper1"){
 //   console.log("Valid Email && Password");
  //}
//for() loop
//for (let i=1; i<=10; i++)
//   document.write(`2x ${i} = ${i*2} <br>`);

 //  prompt("Enter your table no");
 // 
 // for(let i=1; i<=10; i++){
 //   document.write(`2x ${i} = ${i*2} <br>`)
 // }

 //user =prompt("Enter your table no (2, 3, 4)");
 //if(user==2){
 // for(let i=1; i<=10; i++){
 //   document.write(`2x ${i} = ${i*2} <br>`)
 // }
 //}
 //else if(user==3){
 // for(let i=1; i<=10; i++){
 //   document.write(`3x ${i} = ${i*3} <br>`)
 // }
 //}
 //else if(user==4){
 // for(let i=1; i<=10; i++){
 //   document.write(`4x ${i} = ${i*4} <br>`)
 // }
 //}
//
 Table = prompt("Enter table no");
 limit = prompt("Enter user no");
 for(let i=1; i<=limit; i++){
  document.write(`$(Table)x ${i} = ${i*Table} <br>`);
}

let names = ["hamza", "Daniyal", "waqas", "Faiz"];
for(let i=0; i<4; i++){
  document.write("welcome", names[i], "<br>")
}

User = []
function Registered(){
  console.clear();
  User.push(
    {
      Email : prompt("Enter your Email"),
      Pass : prompt("Enter your Password"),
      Name : "Muhammad Daniyal Siddiqui",
    }
  )
 console.log(User);
}
function Login(){
  // let email = prompt("Enter your Email");
  let pwd = prompt("Enter your Password");
  for (let i=0; i<User.lenght; i++){
    if(pwd==User[i].Pass){ //&& pwd==User[i].Pass){
      console.log(`Welcom to Mr ${User[i].Name}`);
    }
  }
}