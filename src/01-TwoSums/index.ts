/**
 *  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to
 *  target.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6 Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6 Output: [0,1]
 **/


// Optimal solution using a hash map O(n) time complexity
export function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (val === undefined) continue;
        const complement = target - val;
        const idx = map.get(complement);
        if (idx !== undefined) {
            return [idx, i];
        }
        map.set(val, i);
    }
    return [];
}

// Direct solution with nested loops O(n^2) time complexity
export function twoSumComplex(nums: number[], target: number): number[] {

    const result: number[] = [];
    if(nums.length < 2) return result;

    for(let i = 0; i < nums.length; i++){
        const numI = nums[i];
        if(numI === undefined) continue;

        for(let j = i + 1; j < nums.length; j++){
            const numJ = nums[j];
            if(numJ === undefined) continue;

            if(numI + numJ === target){
                result.push(i, j);
                return result;
            }
        }
    }

    return result;
}

// Run code:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSumComplex([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumComplex([3, 2, 4], 6)); // [1, 2]
