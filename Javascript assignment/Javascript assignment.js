//1. Reverse a Number
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}
console.log(reverseNumber(32243)); // Output: 34223

//2. Check if a String is a Palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(isPalindrome("madam")); // Output: true

//3. Generate All Combinations of a String
function combinations(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}
console.log(combinations('dog')); // Output: ["d", "do", "dog", "o", "og", "g"]

//4. Return a String with Letters in Alphabetical Order
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}
console.log(alphabeticalOrder('webmaster')); // Output: 'abeemrstw'

//5. Convert the First Letter of Each Word to Upper Case
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords('the quick brown fox')); // Output: 'The Quick Brown Fox'

//6. Find the Longest Word in a String
function longestWord(str) {
    return str.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log(longestWord('Web Development Tutorial')); // Output: 'Development'

//7. Count the Number of Vowels in a String
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(char => vowels.includes(char.toLowerCase())).length;
}
console.log(countVowels('The quick brown fox')); // Output: 5

//8. Check if a Number is Prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(29)); // Output: true

//9. Return the Type of an Argument
function getType(arg) {
    return typeof arg;
}
console.log(getType(42)); // Output: 'number'

//10. Generate an Identity Matrix
function identityMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i === j ? 1 : 0;
        }
    }
    return matrix;
}
console.log(identityMatrix(3)); // Output: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

//11. Find the Second Lowest and Second Greatest Numbers
function secondLowestAndGreatest(arr) {
    arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]];
}
console.log(secondLowestAndGreatest([1, 2, 3, 4, 5])); // Output: [2, 4]

//12. Check if a Number is Perfect
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}
console.log(isPerfectNumber(28)); // Output: true

//13. Compute the Factors of a Positive Integer
function getFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) factors.push(i);
    }
    return factors;
}
console.log(getFactors(12)); // Output: [1, 2, 3, 4, 6, 12]

//14. Convert an Amount to Coins
function amountToCoins(amount, coins) {
    let result = [];
    for (let coin of coins) {
        while (amount >= coin) {
            result.push(coin);
            amount -= coin;
        }
    }
    return result;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1])); // Output: [25, 10, 10, 1]

//15. Compute the Value of b^n
function power(b, n) {
    return Math.pow(b, n);
}
console.log(power(2, 3)); // Output: 8

//16. Extract Unique Characters from a String
function uniqueChars(str) {
    return [...new Set(str)].join('');
}
console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog")); // Output: "thequickbrownfxjmpsvlazydg"

//17. Count the Number of Occurrences of Each Letter
function countOccurrences(str) {
    let count = {};
    str.split('').forEach(char => {
        count[char] = (count[char] || 0) + 1;
    });
    return count;
}
console.log(countOccurrences("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

//18. Binary Search in JavaScript Arrays
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2

//19. Return Array Elements Larger Than a Number
function filterLarger(arr, num) {
    return arr.filter(item => item > num);
}
console.log(filterLarger([1, 2, 3, 4, 5], 3)); // Output: [4, 5]

//20. Generate a Random String ID
function generateId(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
console.log(generateId(8)); // Output: Random 8-character string

//21. Get All Possible Subsets of Fixed Length
function getSubsets(arr, length) {
    if (length > arr.length) return [];
    if (length === arr.length) return [arr];
    if (length === 0) return [[]];
    return getSubsets(arr.slice(1), length - 1).map(subset => [arr[0], ...subset]).concat(getSubsets(arr.slice(1), length));
}
console.log(getSubsets([1, 2, 3], 2)); // Output: [[1, 2], [1, 3], [2, 3]]

//22. Count Occurrences of a Letter in a String
function countLetter(str, letter) {
    return str.split('').filter(char => char === letter).length;
}
console.log(countLetter('microsoft.com', 'o')); // Output: 3

//23. Find the First Non-Repeated Character
function firstNonRepeatedChar(str) {
    const count = {};
    str.split('').forEach(char => {
        count[char] = (count[char] || 0) + 1;
    });
    for (let char of str) {
        if (count[char] === 1) return char;
    }
    return null;
}
console.log(firstNonRepeatedChar('abacddbec')); // Output: 'e'

//24. Bubble Sort Algorithm
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); // Output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

//25. Find the Longest Country Name
function longestCountryName(countries) {
    return countries.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"])); // Output: "United States of America"

//26. Find the Longest Substring Without Repeating Characters
function longestSubstringWithoutRepeating(str) {
    let longest = '', current = '';
    for (let char of str) {
        if (current.includes(char)) {
            if (current.length > longest.length) longest = current;
            current = current.slice(current.indexOf(char) + 1);
        }
        current += char;
    }
    return current.length > longest.length ? current : longest;
}
console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: "abc"

//27. Find the Longest Palindrome in a String
function longestPalindrome(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const substring = str.slice(i, j);
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;
}
console.log(longestPalindrome("bananas")); // Output: "anana"

//28. Pass a JavaScript Function as a Parameter
function executeFunction(func) {
    return func();
}
console.log(executeFunction(() => 'Hello, World!')); // Output: 'Hello, World!'

//29. Get the Function Name
function getFunctionName(func) {
    return func.name;
}
console.log(getFunctionName(getFunctionName)); // Output: 'getFunctionName'