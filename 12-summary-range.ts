function summaryRanges(nums: number[]): string[] {
    const ans: string[] = [];
    let i = 0;
    let count = 0;

    while (i < nums.length) {
        let start = nums[i];

        if (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) i += 1;

        if (start !== nums[i]) ans.push(`${start}->${nums[i]}`);
        else ans.push(`${nums[i]}`);

        i += 1;
    }

    return ans;
}

function summaryRanges1(nums: number[]): string[] {
    const ans: string[] = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i];

        while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) i += 1;

        if (nums[i] !== start) ans.push(`${start}->${nums[i]}`);
        else ans.push(`${nums[i]}`);
        i += 1;
    }

    return ans;
}
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
