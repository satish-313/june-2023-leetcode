function countNegatives(grid: number[][]): number {
    const n = grid[0].length;
    let nCount = 0;

    for (let arr of grid) {
        if (arr[0] < 0) {
            nCount += n;
            continue;
        }

        if (arr[n - 1] >= 0) {
            continue;
        }

        let l = 0;
        let r = n - 1;
        let mid = 0;

        while (l <= r) {
            mid = (l + r) >> 1;
            if (arr[mid] < 0 && arr[mid - 1] >= 0) {
                nCount += n - mid;
                break;
            } else if (arr[mid] >= 0) l = mid + 1;
            else r = mid - 1;
        }
    }

    return nCount;
}

console.log(
    countNegatives([
        [5, 1, 0],
        [-5, -5, -5],
    ])
); // 3

console.log(
    countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3],
    ])
); // 8

console.log(
    countNegatives([
        [3, 2],
        [1, 0],
    ])
); // 0
