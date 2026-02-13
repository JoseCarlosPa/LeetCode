/*
*
* Given a string s, return the longest palindromic substring in s.
*
Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
*
Example 2:
Input: s = "cbbd"
Output: "bb"
Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */


function isPalindromic(str: string[]): boolean {
    for(let i = 0; i < str.length; i++){
        if(str[i] != str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}

// Complex o(n^3) time complexity, O(n) space complexity
function longestPalindrome(s: string): string {
    const strArray = s.split('');
    if(isPalindromic(strArray)){
        return s;
    }

    let longestPalindrome: string = "";
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < s.length; j++){
            if((isPalindromic(strArray.slice(i,s.length - j))) && strArray.slice(i,s.length - j).length > longestPalindrome.length){
                longestPalindrome = strArray.slice(i,s.length - j).join("");
            }
        }
    }

    return longestPalindrome;
}

// Better Compelx

function longestPalindromeBetter(s: string): string {
    if (s.length < 2) return s;
    let bestPalindromeStart = 0;
    let bestPalindromeLength = 1;
    for (let center = 0; center < s.length; center++) {
        // Palíndromo de longitud impar
        let left = center, right = center;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let currentLength = right - left + 1;
            if (currentLength > bestPalindromeLength) {
                bestPalindromeStart = left;
                bestPalindromeLength = currentLength;
            }
            left--;
            right++;
        }
        // Palíndromo de longitud par
        left = center;
        right = center + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let currentLength = right - left + 1;
            if (currentLength > bestPalindromeLength) {
                bestPalindromeStart = left;
                bestPalindromeLength = currentLength;
            }
            left--;
            right++;
        }
    }
    return s.substring(bestPalindromeStart, bestPalindromeStart + bestPalindromeLength);
}



console.log('Lognest:', longestPalindrome("babad"));
console.log('Lognest:', longestPalindrome("cbbd"));
console.log('Lognest:', longestPalindrome("abb"));
console.log('Lognest Better:', longestPalindromeBetter("babad"));
console.log('Lognest Better:', longestPalindromeBetter("cbbd"));
console.log('Lognest Better:', longestPalindromeBetter("abb"));

export { longestPalindrome, longestPalindromeBetter };
