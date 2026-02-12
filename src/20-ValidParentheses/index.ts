/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */

export function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log('Is valid:', isValid("()")) // true
console.log('Is valid:', isValid("()[]{}")) // true
console.log('Is valid:', isValid("(]")) // false
console.log('Is valid:', isValid("([])")) // true
console.log('Is valid:', isValid("([)]")) // false
