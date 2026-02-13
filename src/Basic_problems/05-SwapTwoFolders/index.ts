/**
 * Given two numbers a and b, the task is to swap them.

Examples:

Input: a = 2, b = 3
Output: a = 3, b = 2

Input: a = 20, b = 0
Output: a = 0, b = 20

Input: a = 10, b = 10
Output: a = 10, b = 10 
 */

function swapNumbersWithTemp(a:number,b:number){
    let temp = b;
    b = a;
    a = temp;
    console.log('a = ',a,' b = ',b)
}

function swapNumbers(a:number,b:number){

    [a,b] = [b,a];
    console.log('a =',a,' b=',b)

}

swapNumbers(2,3)
swapNumbersWithTemp(2,3)