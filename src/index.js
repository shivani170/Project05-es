
//const arr = [1,2,3];
//const iamjses6 =()=> cosole.log(...arr);
//import style from"./main.css";
/*var x = 10;
if(x)
{
  let  x = 4;
   
}
console.log(x);*/
//console.log("hello")

/*var nameBuilder = function(firstName="Shivani",lastName="Bhatt")
{console.log(firstName+"  "+lastName);
}
nameBuilder();*/

/*for(let i=0; i<45; i++)
{
    var div =document.createElement("div");
    div.onclick=function(){
        alert("You clicked box#" +i);
    };
    document.getElementsByTagName("section")[0].appendChild(div);
    
}*/

/*const birthYear = 1996;
var age = 2015 - birthYear;
console.log(age);*/

/*
var birthYear = 1990;
var birthYear =1996;

var  age =  2020- birthYear;
console.log("My age is:"+ age)*/



/*function coldEnough(deg){
  const freezingTemp =32;
  if(freezingTemp<=deg){
    return deg +" is about freezing";
  }
  else{
    return deg+" is below freezing";
  }
}
console.log(coldEnough(40));
console.log(coldEnough(12));
console.log(coldEnough(56));
console.log(coldEnough(32.3));
console.log(coldEnough(-45));*/

// Example 1
/*
function print (firstName){
console.log(`hello!!${firstName}`);   //template without using +sign
}
print("  Sujata")
*/


//Example2
/*function createEmail(firstName,purchasePrice){
  var shipping=5.95;
  console.log(
    `Hi ${firstName},Thanks for buying from us...
    Total : $${purchasePrice}
    shipping: $${shipping}
    Grand Total $${purchasePrice+shipping}`
  )
}
createEmail("Shivani Bhatt",100)*/


//sub arrays
/*var cats =["cat1","cat2","cat3"];
var dogs =["dogs1","dogs2","dogs3"];
var animals=["whale","cow",...cats,"snake","giraffe",...dogs];
console.log(animals)
*/


//Maps
/*var course = new Map();
course.set('java',{description:'language'});
course.set('react',{description:'UI'});
console.log(course);
console.log(course.get('react'))*/

/*var course = new Map();
course.set('react',{description:'UI'});
course.set('test', {description:'testing'});
//console.log(course)
console.log(course.get('react'))*/

/*var details = new Map ([
  [new Date(),"today"],
  ["item",[1,2]]
]);
//console.log(details.size);
details.forEach(function(item)
 {
  console.log(item)

 });
 */

 /*var books = new Set();
 books.add('Pride & Prejudice');
 books.add('War & pace');
 books.add('Oliver Twist')
console.log(books)
console.log('How many books?',books.size);
//console.log('has oliver Twist?',books.has('Oliver Twist'))
books.delete('Oliver Twist')
console.log('has Oliver Twist?',books.has('Oliver Twist'))

 */

 /*var data =[4,2,4,5,6,8,9,0,8,7,6]
 var set = new Set(data);
 console.log('data.length',data.length);
 console.log('set.size',set.size);
*/

//For of loop
/*for(let letter of 'javaScript'){
  console.log(letter);
  var topics =['java Script','node','React']
  for(let topic of topics){
    console.log(topic);
  }
}
*/

/*var topics = new Map()
topics.set('HTML','/class/HTML');
topics.set('CSS','/class/CSS');
topics.set('NODE','/class/NODE');
topics.set('JAVASCRIPT','/class/JAVASCRIPT');
//for(let topic of topics.keys()){
 // console.log(topic);
//}
//for(let topic of topics.values()){
  //console.log(topic,"is the course name")
//}
for(let topic of topics ){
  console.log("The course description can be formed at",topic)
}
for (let course of topics.entries()){
  console.log(course)
}


*/

//FUNCTIONS & OBJECT IN ES6
/*function add(x=5,y=6){
  console.log(x+y);
}
add();


function haveFun(activityName,time){
  console.log(`Toaday i wil go ${activityName}
  for ${time} hours. `)
}
haveFun('for biking',5);
*/

//OBJECT LITERALS:

/*var cat={
  meow: function(times){
    console.log(Array(times).join("meow "));
  },
  purr :function(times){
    console.log(Array(times).join("purr "))
  },
  snore : function(times){
    console.log(Array(times).join("snore "));
  }
};
cat.meow(3);cat.purr(4);cat.snore(5)*/


/*var cat ={
meow:function(times){
  console.log(Array(times+1).join("meow "))
},

purr:function(times){
  console.log(Array(times+1).join("furr "));

},
snore : function(times){
  console.log(Array(times+1).join("snawre "))
}
};
cat.meow(3);cat.purr(5); cat.snore(7)
*/



//REPEAT INSTEAD OF JOIN:

/*var cat ={
  meow(times){
    console.log("meow ".repeat(times));
  },
  purr(times){
    console.log("purr ".repeat(times));
  },
  snore(times){
    console.log("snore ".repeat(times));
  }
};
cat.meow(3);
cat.purr(5);
cat.snore(7)
*/

/*
//ARROW FUNCTON:=> OR  FAT FUNCTION
//1. TRADITONAL FUNCTION:
var studentList= function(students){
  console.log(students);
}
studentList(["Joe","Jack","Johny"])
*/

/*
//2.
var studentList=(students)=> console.log(students);  // without function
studentList(["Joe","Jack","John"]);             
*/



//USING this function

/*var person ={
  first: "John",
  action: ["bike","hike","skiing","surfing"],
  printAction: function(){
    var _this = this;
    this.action.forEach(function(action){
      var str =_this.first+" likes to "+action;
      console.log(str);
    })
  }
}
person.printAction()
*/

/*var person ={
  first:"John",
  action:["Hike","bike","skiing","surfing"],
  printAction(){ 
    this.action.forEach(action=>{
      var str= this.first+" likes to "+action;
      console.log(str);
    })
  }
};
person.printAction();



var person={
  first :"john",
  action:["bike","hike","skiing","surfing"],
  printAction: function(){
    this.action.forEach(function(action){
      var str = this.first+" likes to "+action;
      console.log(str);
    }.bind(this));
  }
}
person.printAction()*/


//DESRUCTION ASSIGNMENT METHOD:
/*
 var cities =["SPOKANE","BOSTON","LOS ANGELES","SCATLE","PORTLAND"]
 console.log(cities[0])
 console.log(cities[4])
 console.log(cities[3])

 var [first,,,fourth]=["spoken","portland","bosten","scattle","los angeles"]
 console.log(first);
 console.log(fourth);
 */
/*
var sandwich={
  title:"ruben",
  price:7,
  description: "The most favourite sandwich.",
  ingredient:["bread","corn","sauce","cheese"]};
  console.log("title: "+sandwich.title)
  console.log("price: "+sandwich.price)
  console.log("ingreadient: "+sandwich.ingredient)
  console.log("Description: "+sandwich.description)
*/

/*var {title,description}={
  title:"ruben",
  price:"7",
  description:"This is the most favourite sandwich",
  ingredinet:["bread","corn","sauce","cheese"]
}
console.log(title);

console.log(description)*/

/*
var vacation ={
  destination:"chile",
  travelrs:2,
  activity: "skiing",
  cost: 4000
};
function vacationMarketing({destination,activity})
{return `COME TO ${destination} an do some ${activity}`}
console.log(vacationMarketing(vacation));
*/


//destruction:
/*var {title,price,ingrediant}={
  title:"rubben",
  price:"7",
  description:"This is my favourite sandwich",
  ingrediant: ["corn","bread","sauces","cheese"]};
  console.log(title);
  console.log(price);
  console.log(ingrediant)
  */

  //GENERATOR FUNCTION:

/*function*director(){

  yield "three"
  yield "two"
  yield "one"
  yield "action"
}
var action =director();
console.log(action.next());
console.log(action.next());
console.log(action.next());
console.log(action.next());
console.log(action.next()); */

/*function * eachItem(arr){
for(var i=0; i<arr.length;i++){
  yield arr[i]
}
}
var letters =eachItem(["a","b","c","d","e","f","g"])
var abcs= setInterval(function(){
var letter =letters.next();
if(letter.done){
  clearInterval(abcs);
  console.log("Now i know my abcs");
}
else{
  console.log(letter.value);
}
},500);
*/
/*
function greetperson(name){
  let greet;
if( name ==="chandler")
{  greet="hello cahndler"}
else{
   greet="hi there"
}
console.log(greet)
}
greetperson("chand")
                                                                                                 //HOISTING:
var a=1
var b=2
if(a===1){
  let a=10;
  let b=20;                   //let declaration
  console.log(a); //10
  console.log(b);  //20
}
console.log(a);//10
console.log(b);//2*/

/*for(let i=1; i<=5 ;i++){

setTimeout (function()                         //let==const
{
  console.log(i)},1000)
}*/
                                                                                //USE OF CONST VS LET

/*let num1;
const num2=10;

const obj1= {
  name: "joatmon"};
  console.log(obj1.name)
  obj1.name ="chandler";
  console.log(obj1.name)

  const PI = 3.14;
  const MAX_SIZE=100;
  let a=5;
let b=10;
a=a+b;    //a=15
b=b-a;     //b=-5
a=a-b;        //a=15-(-5)
 console.log(a)      //a=20
*/


                                                                                     //ARROW FUNCTION: to precise code

/*var getRegular= function(){
  return 10;
}
console.log(getRegular());

const getArrowvalue = (m,bonus)=>10*m+bonus;

console.log(getArrowvalue(5,8));
console.log(typeof getArrowvalue )
*/

                                                                                        //lexical "this"

/*
var employ={
  id:1,
  greet:function()  {
    
    setTimeout(()=>{console.log(this.id)},1000);
  }
};
employ.greet();
*/

/*
  let percentBonus=()=> 0.1;                                                                           //DFAULT FUNCTION:

let getValue= function(value=10,bonus=value*percentBonus()){
  console.log(value+bonus)
  console.log(arguments.length)
}
getValue();              //11
getValue(20);            //22
getValue(20,30);          //50
getValue(undefined,30);   //40
*/

/*let displayColors=function(message, ...colors){
  console.log(message);
  for(let i in arguments){
    console.log(arguments[i]);
  }
}
let message="List of colors"
displayColors(message,'red');                                                                                    //REST operator
displayColors(message,'red','blue');
displayColors(message,'red','blue','green');                                                                                                 */

                                                                                          //SYMBOLS:
/*
let s= Symbol("first symbol");
console.log(typeof s)
console.log(s.toString())
let s2= Symbol("test");
let s3 =Symbol("test");
console.log(s2==s3);
let s4= Symbol.for("regSymbol");
let s5= Symbol.for("regSymbol");
console.log(s4===s5);

console.log(Symbol.keyFor(s4));
console.log(Symbol.keyFor(s5));

let fname = Symbol("first name");
let person = {                //object
  [fname] : "chandler"
};
console.log(Object.getOwnPropertyNames(person))
console.log(Object.getOwnPropertySymbols(person))
console.log(Object.getOwnPropertyDescriptors(person))*/

                                                                                                     //iterator

//for..of--> iterator method--> Symbol.iterator
/*
let str= "hello"
let ary =[1,2,3];
let num= 5;
let obj= {name:"chandler"}
console.log("for string  "+typeof str[Symbol.iterator])
console.log("for string  "+typeof ary[Symbol.iterator])
console.log("for string  "+typeof num[Symbol.iterator])
console.log("for string  "+typeof obj[Symbol.iterator])*/

//factory function
/*
const id = Symbol();
const courseInfo={
  title: "es6",
  topics :["babel","syntax","function","classes"],
  id: "js course"
};
courseInfo[id]=4637;

console.log(courseInfo)
console.log(courseInfo[id])
*/



//ITEARTION
//ITEARBLE & ITERATORS
/*
Iterable{
  [Symbol.iterator]() : iterator
}
iterators{
  next(): iresultobj
}
iresultobj{
  value: Any;
  done:Boolean}*/

/*var title ="es6"
var iterateIt=title[Symbol.iterator]();
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());
*/

/*
  let iterable = [1,2,3];                                                              //iterable 
  function createIterator(Aray){                                                       //iterators
    let count=0;
    return {    
      next : function(){
      return count < Aray.length?
      {value : Aray[count++],done : false}:
      {value : undefined,done:true}

    }

    }
  }
  let myiterator = createIterator(iterable);
  console.log(myiterator.next())
  console.log(myiterator.next())
  console.log(myiterator.next())
  console.log(myiterator.next())

*/
/*
function tableReady(arr){
  var nextIndex=0;
  return{
    next(){
      if(nextIndex <arr.length){
        return{value:arr.shift(),done:false}}
        else{
          return {done: true}
        
        }
    }
  }
}
var waitingList=["sarah","haider"," madan"];
var iterateList = tableReady(waitingList);
console.log(`${iterateList.next().value},Your table is raedy`);
console.log(`${iterateList.next().value},Your table is raedy`);
console.log(`${iterateList.next().value},Your table is raedy`);
console.log(`${iterateList.next().value},Your table is raedy`);

*/


//PROMISES
/*
let p= new Promise((resolve,reject)=>{
  let a= 1+1
  if (a==2){
resolved("success")
  }else{
    reject("failed")
  }
})

p.then((message)=> {
  console.log("this is your message")
  try {
    
  } catch ()) {
    
  }
})
*/

/*
let p= new promise;
const delay = seconds =>{
  return new promise(resolve =>{
    setTimeout(resolve,seconds*1000)})
};
console.log("zero second");
delay(1).then(()=>console.log("one second"));
delay(3).then(()=> console.log("three second"));


*/

/*const spacepeople=()=>{
  return new Promise((resolves,rejects)=>{
    const api='http://api.open-notify.org/astros.json';
    const request = new XMLHttpRequest();
    request.open('GET',api);
    //request.open('GET',api);
    request.onload=()=>{
    //request.onload=()=>{
      if(request.status===200){
      //if (request.status===200){
        resolves(JSON.parse(request.response));
        //resolves(JSON.parse(request.response));
      }else{
        rejects(Error(request.statusText));
      }
    };
    requests.onerror=reject(err);
    requests.send();
  });
};
spacepeople().then(
  spaceData=> console.log(spaceData),
  err => console.error('fdfdf')
)


*/
/*
const spacePeople = () => {
  return new Promise((resolves, rejects) => {
    const api = 'http://api.open-notify.org/astros.json';
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => {
      if(request.status === 200) {
        resolves(JSON.parse(request.response));
      } else {
        rejects(Error(request.statusText));
      }
    };
    request.onerror = err => rejects(err);
    request.send();
  });
};

spacePeople().then(
  spaceData => console.log(spaceData),
  err => console.error(
    new Error('Cannot load space people')))
*//*
const getposts =()=>{
  return fetch('http://api.open-notify.org/astros.org.json')
  .then(res=>res.json())
.then(console.log)
}
*/


/*const spacepeople=()=>{
  return new Promise((resolve,reject)=>{
    const api='http://api.open-notify.org/astros.json';
    const request =new XMLHttpRequest();
    request.open('GET',api);
    request.onload=()=>{
      console.log(request.status);
      if(request.status===200){
        resolve(JSON.parse(request.response));
      }else{
        reject(Error(request.statusText));
      }
    }
    request.onerror=reject(err);
    request.send();
  })
}
spacepeople().then(
  spaceData=>console.log(spaceData),
err=>console.error(new Error ('sdhbch')))


//fetch('http://api.open-notify.org/astros.json').then(console.log)*/


/*
'use strict'
var myObj ={
  myPropOne:1,
  myPropTwo:2
}
//modify proprty decriptor
//console.log(myObj)
//myObj.myPropOne=10;
Object.defineProperty(myObj,'myPropThree',{
  value:3,
  writable: false,
  enumerable:true}
)

//print prperty descriptor:
let descriptor= Object.getOwnPropertyDescriptor(
  myObj,'myPropThree'
);
console.log(descriptor);                 //writable:false
Object.defineProperty(myObj,'myPropThree',{
  writable:true
})
/*
console.log(
  Object.keys(myObj)                      //enumerable:false
)
*/
/*
var obj = Object.create( prototype, { 
  property: descriptor} )
*/
/*
'use strict'
  var o= Object.create(Object.prototype,{
    a:{value:1,writable:false},
    b:{value:2,writable:true}
  });
 // console.log(o.__proto__)
 //console.log(Object.prototype)
//console.log( o.__proto__==Object.prototype)
console.log(
  'o.hasOwnProperty("a")=>',o.hasOwnProperty("a")
);
*/
/*
var o = Object.create(null,{
  a:{value:1,writable:false},
  b:{value:2,writable:true}
})
console.log(o.__proto__);
console.log(
  'o.hasOwnProperty("a")=>',o.hasOwnProperty("a")
)
*/
/*
class User{
  constructor(firstName,lastName){
    this.firstName= firstName;
    this.lastName=lastName;
  }
  getfullName(){
    return this.firstName+"  "+this.lastName
  }
}
let user = new User("shivani","Bhatt")
console.log(user.getfullName());
User.prototype.getfullName=function(){
  return " HACKED!";
}


*/
function readOnly(target,parameter,descriptor){
descriptor.writable=false;
return descriptor;
}
class user{
  constructor(firstName,lastName){
    this.firstName=firstName;
  this.lastName=lastName;
  }
  @readOnly
  getFullName(){
    return this.firstName+" "+this.lastName
  }









