/*console.log("hello js");
var x=10;
let y=20;
const z=77;
x=44;
console.log(x);
console.log(typeof x);

let firstname= 'mora';
console.log(`my first name is ${firstname}`);
console.log(typeof firstname);*/

//let online =true;
//console.log(online);

/*let x=9.5;
let z;
z=Math.round(x);
console.log(z);

let day=2;
switch(day)
{
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    default:
        console.log("nothing");
}*/


//let x="bro code";
//console.log(x.charAt(4));
//console.log(x.indexOf('o'));
//console.log(x.lastIndexOf('o'));
//console.log(x.length);
//console.log(x.trim());
//console.log(x.toUpperCase());
//console.log(x.toLowerCase());
//console.log(x.repeat(5));
//console.log(x.startsWith("b"));
//console.log(x.endsWith("E"));
//console.log(x.includes("c"));
//console.log(x.padStart(15,0));
//console.log(x.padEnd(15,0));

//let z=x.slice(x.indexOf(" ")+1);
//console.log(z);
/*let y="suri23@gmail.com"
let z=y.slice(0,y.indexOf("@"));
let r=y.slice(y.indexOf("@")+1);
console.log(z);
console.log(r);*/
//console.log(`my name is ${x}`);

//let x=" bRo cOdE"
//let y=x.trim().charAt(0).toUpperCase()+x.trim().slice(1).toLowerCase();
//console.log(y);

/*function name(nam,age)
{
    console.log(`my name is ${nam} i am ${age} old`);
}
name("nani",23);*/

/*function add(x,y)
{
    let res=x+y;
    return res;
}
let z=add(7,7);
console.log(z);*/

//let fruits=["apple","banana","orange","Pine"];
//fruits.push("grape");
//fruits.pop();
//fruits.shift();
//fruits.unshift("mango");
//console.log(fruits[0]);
/*for(let fruit of fruits)
{
    console.log(fruit);
}*/
// for(let i=0;i<fruits.length;i++)
// {
//     console.log(fruits[i]);
// }

/*let x=1;
while(x<=5)
{
    console.log(`${x} +hii`);
    x++;
}
console.log("end");*/

/*let x=1;
do
{
    console.log(`${x} +hii`);
    x++;
}
while(x<=5)
console.log("end");*/

/*let count = 1;

do {
  console.log("Count is: " + count);
  count++;
} while (count <= 5);*/

/*let sentence = "I like cats. Cats are cute .";
console.log(sentence.replace("Cats", "Dogs"));     // "I like cats. Dogs are cute."
//console.log(sentence.replaceAll("Cats", "Dogs"));  // "I like cats. Dogs are cute."*/

/*let data = "apple,banana,cherry";
console.log(data.split(",")); // ["apple", "banana", "cherry"]

let first = "Hello";
let second = "World";
console.log(first.concat(second)); // "Hello World"*/

// let x="hello";
// console.log(x.charCodeAt("h"));

// let color =["red","pink",1,2,"black"]
// for(let i=0;i<color.length;i++)
// {
//     console.log(color[i])
// }

// function add(a,b)
// {
//     let res=a+b;
//     return res
// }
// console.log(add(2,5));

//let x=[1,2,3,4];
//let y=["a","b","c","d"];
//let z=[...x,...y];
//console.log(...x);

// function fun(...names)
// {
//     console.log(names);
// }

// let names=fun("app","ball","cat");

// function add(callback,x,y)
// {
//     let res =x+y;
//     callback(res);
// }
// function res(resu)
// {
//     console.log(resu);
// }
// add(res,1,7);
// //sub();
// let fruits=["apple","banana","grape"];
// fruits.forEach(upper);
// //fruits.forEach(display);
// function upper(element,index,array)
// {
//    array[index]=element.charAt(-1).toUpperCase()+;
//    console.log(array[index]);
// }
/*function display(element)
{
    console.log(element);
}*/
let fruits=["apple","banana","grape"];
let x=fruits.map(upper);
//fruits.forEach(display);
function upper(element)
{
    return element.toUpperCase()
}
console.log(x);