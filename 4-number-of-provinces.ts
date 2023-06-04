function findCircleNum1(isConnected: number[][]): number {
    let circles = 0;
    let map = new Map<number, number[]>();
    let stack: number[] = [];
    let visited: boolean[] = new Array(isConnected.length).fill(false);

    for (let i = 0; i < isConnected.length; i++) map.set(i, []);

    for (let i = 0; i < isConnected.length; i++) {
        let mArr = map.get(i)!;
        for (let j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] === 1 && i !== j) mArr.push(j);
        }
    }

    for (let i = 0; i < isConnected.length; i++) {
        if (!visited[i]) {
            circles += 1;
            stack.push(i);

            while (stack.length > 0) {
                let cur = stack.pop()!;
                let adj = map.get(cur)!;
                visited[cur] = true;

                for (let n of adj) {
                    if (!visited[n]) stack.push(n);
                }
            }
        }
    }

    return circles;
}

function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length;
    let circles = 0;
    let visited = new Array(isConnected.length).fill(false);

    function dfs(cur: number) {
        visited[cur] = true;
        for (let i = 0; i < n; i++) {
            if (!visited[i] && isConnected[cur][i] === 1) dfs(i);
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            circles += 1;
            dfs(i);
        }
    }

    return circles;
}
console.log(
    findCircleNum([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
    ])
);
