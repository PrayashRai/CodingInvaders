// userInput 1 for circle and 2 for square
let userInput = prompt("Enter 1 for Circle or 2 for Square");
let circle = '1';
let square = '2';

for(let input of userInput) {
    if(input === circle){
        let rOfC = prompt("Enter the radius of circle") //rOfC : radius od circle
        console.log("Perimeter of circle is " + perimeterOfCircle(rOfC));
        console.log("Area of circle is " + areaOfCircle(rOfC));
    }else if(input === square){
        let p = prompt("side  of square")
        console.log("Perimeter of aquare is " + PerimeterOfSquare(p));
        console.log("Area of square is " + AreaOfSquare(p));
    }else{
        alert("Enter valid option")
    }
};
// function perimeter of circle
function perimeterOfCircle(radius){
    let pi = 3.141592653589793238;
    let r = radius;
    let perimeterOfCircle = 2*pi*r;   
    return perimeterOfCircle;
};
//function area of circle
function areaOfCircle(radius){
    let pi = 3.141592653589793238;
    let r = radius;
    let areaOfCircle = pi*radius**2;
    return areaOfCircle;
};
// function perimeter of square
function PerimeterOfSquare(side){
   let a = side // value of side is a
   let PerimeterOfSquare = 4 * a;
   return PerimeterOfSquare;
};
//function area of square
function AreaOfSquare(side){
    let a = side // value of side is a
    a = Math.pow(side, 2); // power a ** a
    let PerimeterOfSquare = a;
    return PerimeterOfSquare;
 };