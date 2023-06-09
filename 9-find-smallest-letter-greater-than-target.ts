function nextGreatestLetter1(letters: string[], target: string): string {
    const sArr = new Array(26).fill(false);
    const t = target.charCodeAt(0) - 97;

    for (let char of letters) {
        sArr[char.charCodeAt(0) - 97] = true;
    }

    for (let i = t + 1; i <= 26; i++) {
        if (sArr[i] === true) return String.fromCharCode(i + 97);
    }

    return letters[0];
}
function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0;
    let right = letters.length - 1;
    let targetCode = target.charCodeAt(0);
    let result = 150;

    while (left <= right) {
        let mid = (left + right) >> 1;
        let code = letters[mid].charCodeAt(0);

        if (code > targetCode) result = Math.min(result, code);

        if (code <= targetCode) left = mid + 1;
        else right = mid - 1;
    }
    return result === 150 ? letters[0] : String.fromCharCode(result);
}

console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
