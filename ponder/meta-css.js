const PI = 3.14;
let radius = 3;

let area = PI * radius * radius;
console.log(area);

radius = 20;

area = PI * radius * radius;
console.log(area);

const one = 1; // integer
const two = '2'; // string

let result = one + two;
console.log(result); // "12" (string, due to type coercion)

result = one + Number(two);
console.log(result); // 3


let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
// console.log(student); //does not work, can't access a block variable outside the block


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})
                

const image = document.querySelector('img');
image.setAttribute("src", "images/triangle.svg");
image.setAttribute("alt", "A triangle");

document.body.className = "blue";