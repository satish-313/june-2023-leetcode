function numOfMinutes(
    n: number,
    headID: number,
    manager: number[],
    informTime: number[]
): number {
    let maxInformTime = 0;
    let map = new Map<number, number[]>();

    for (let i = 0; i < n; i++) map.set(i, []);

    for (let i = 0; i < n; i++) {
        let man = manager[i];
        if (man !== -1) {
            let arr = map.get(man)!;
            arr.push(i);
        }
    }

    function dfs(m:number,curTime:number) {
        let cur = map.get(m)!;
        curTime += informTime[m]
        
        for (let c of cur) {
            dfs(c,curTime)
        }
        maxInformTime = Math.max(curTime,maxInformTime)
    }

    dfs(headID,0)

    return maxInformTime;
}

console.log(numOfMinutes(7, 6, [1, 2, 3, 4, 5, 6, -1], [0, 6, 5, 4, 3, 2, 1])); // 21
console.log(
    numOfMinutes(
        11,
        4,
        [5, 9, 6, 10, -1, 8, 9, 1, 9, 3, 4],
        [0, 213, 0, 253, 686, 170, 975, 0, 261, 309, 337]
    )
); // 2560
console.log(numOfMinutes(1,0,[-1],[0])) // 0