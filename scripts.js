//FIZZBUZZ in switch 
for (var i = 1; i <= 20; i++) {
    switch (true) {
      case (i % 5 === 0 && i % 3 === 0):
          console.log("FizzBuzz");
          break;
      case i % 3 === 0:
          console.log("Fizz");
          break;
      case i % 5 === 0:
          console.log("Buzz");
          break;
      default:
          console.log(i);
          break;
    }
  }
//assignment 2
  for (var x = 0; x <= 15; x++) {
    if (x%3 === 0){
        document.write(x + ' ' + 'Fizz' + '<br>');
    }  
    if (x%5 === 0){
        document.write(x + ' ' + 'Buzz' + '<br>');
    }
    if (x%15 === 0){
        document.write(x +'  '+'FizzBuzz' + '<br>');
    }
  }

  //assigment 3
  const arrayList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  for (var z =0; z <arrayList.length; z++) {
    if (z%3 === 0){
        document.write('Fizz' + '<br>');
    } else if (z%5 === 0){
        document.write('Buzz' + '<br>');
    } else {
        document.write(z + '<br>');
    }
  }
  //assigment 4
  
  for (let i=0; i<arrayList.length; i++){
    if (arrayList[i]%15 === 0){
        document.write(arrayList[i] + ' fizzbuzz' + '<br>');
    }
    else if (arrayList[i]%3 === 0){
        document.write(arrayList[i] + ' fizz' + '<br>');
    }
    else if (arrayList[i]%5 === 0){
        document.write(arrayList[i] + ' buzz' + '<br>');
    }
    else{document.write(arrayList[i] + '<br>');}
 
}

//q no 5
  myOb = {
    a:1,
    b:2,
    c:3,
    d:4
    }

console.log(myOb);

//question no 6
  myObj = {
    apple:"red",
    ball:"round",
    cat:"meow",
    dog:"bone"
    }
    // one way
    document.write('<br>' + myObj.apple + '<br>' + myObj.ball +'<br>' + myObj.cat + '<br>' + myObj.dog );
   // another way
    var txt = "";
for (let y in myObj) {
  txt += myObj[y] + " ";
}
document.write(txt);

//q no 7
let yourName = "my name is jack sparrow";
let yourArray = yourName.split(" ");
console.log(yourArray);

//q no 8
let myName = "my name is jack sparrow";
let myarray = myName.split("");
console.log(myarray);

//qno 9
let myObject= { };

let a = "apple";
let b = "red";
let c = "ball";
let d = "round";
let e = "cat";
let f = "meow";
let g = "dog";
let h = "bone";

myObject['a'] = a;
myObject['b'] = b;
myObject['c'] = c;
myObject['d'] = d;
myObject['e'] = e;
myObject['f'] = f;
myObject['g'] = g;
myObject['h'] = h;
console.log(myObject);

//q no 10
let myString = 'hi hi hi hello hello hello ram ram ram shyam ram shyam ram ram ram shyam';
stringArray = myString.split(" ");
console.log(stringArray);
for (let i=0; i<stringArray.length; i++){
  if (stringArray[i] === 'hi'){
      myObj['hi'] = 0;
      
  } else if (stringArray[i] === 'hello'){
      myObj['hello'] = 0;
      
  } else if (stringArray[i] === 'ram'){
      myObj['ram'] = 0;
     
  } else if (stringArray[i] === 'shyam'){
      myObj['shyam'] = 0;
     
  }
}

