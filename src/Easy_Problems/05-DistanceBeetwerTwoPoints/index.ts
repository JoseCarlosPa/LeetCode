/**
 * You are given two coordinates (x1, y1) and (x2, y2) of a two-dimensional graph. Find the distance between them.

Examples: 

Input : x1, y1 = (3, 4)
           x2, y2 = (7, 7)
Output : 5

Input : x1, y1 = (3, 4) 
           x2, y2 = (4, 3)
Output : 1.41421


Distance = (x2−x1)2+(y2−y1)2(x2−x1) 2 +(y2−y1) 2
 

 */


function distancePoints(x1:number, y1:number, x2:number, y2:number) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


console.log(distancePoints(3,4,7,7))