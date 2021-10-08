// 1. Is Unique
const isUnique = str => {
    let hash = {};

    for(let i = 0; i < str.length; i++) {
        if (hash[str[i]]) {
            return false
        } else {
            hash[str[i]] = true;
        }
    }
    return true
}


// 2. Check Permutation
const checkPermutation = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    let strOne = str1.split('');
    let strTwo = str2.split('');

    strOne.sort();
    strTwo.sort();


    for(let i = 0; i < str1.length; i++) {
        if(strOne[i] !== strTwo[i]) {
            return false;
        }
    } return true
}


// 3. URLify
const replaceSpace = str => {
    str = str.trim();
    str = str.replaceAll(' ', '%20')
    return str
}


// 4. Palindrome Permutation
const palindromePermutation = str => {
    let hash = {};
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }
        if (hash[str[i]]) {
            delete hash[str[i]];
        } else {
            hash[str[i]] = true;
        }
        count++;
    }
    if (count % 2 === 0) {
        return Object.keys(hash).length === 0;
    } else {
        return Object.keys(hash).length === 1;
    }
}


// 5. One Away
const oneAway = (str1, str2) => {
    let edits = 1;
    let diff = Math.abs(str1.length - str2.length);
    let maxLength = Math.max(str1.length, str1.length);

    if (diff > edits) {
        return false
    }

    for (let i = 0, j = 0; i < maxLength || j < maxLength; i++, j++) {
        if (str1[i] !== str2[i]) {
            edits--;
            if (edits < 0) {
                return false;
            }
            if (str1[i] === str2[j + 1]) {
                j++;
            } else if (str1[i + 1] === str2[j]) {
                i++
            }
        }
    }
    return true
}


// 6. String Compression
const stringCompression = str => {
    let output = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            output += str[i] + String(count);
            count = 1;
        }
    }
    return output.length < str.length ? output : str;
} 