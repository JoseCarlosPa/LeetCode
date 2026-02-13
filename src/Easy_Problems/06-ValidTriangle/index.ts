/**
 * Given three sides, check whether triangle is valid or not. 

Examples:  

Input :  a = 7, b = 10, c = 5 
Output : Valid
We can draw a triangle with the given three edge lengths.

Input : a = 1, b = 10, c = 12 
Output : Invalid
We can not draw a triangle with the given three edge lengths.
 */

function validTriangle(a:number,b:number,c:number){
 if (a + b <= c || a + c <= b || b + c <= a) 
        return false; 
    else
        return true; 
}

console.log(validTriangle(7,10,5))