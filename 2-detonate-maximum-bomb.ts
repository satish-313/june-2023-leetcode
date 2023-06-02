function maximumDetonation(bomb: [number, number, number][]): number {
    let maxDetonate = 1;
    let visited = new Array(bomb.length).fill(false);
    let set = new Set<number>();
    let stack: number[] = [];

    for (let i = 0; i < bomb.length; i++) {
        if (!visited[i]) {
            stack.push(i);
            let detonate = 1;
            set.add(i)
            while (stack.length > 0) {
                let cur = stack.pop()!;
                let [x, y, r] = bomb[cur];

                for (let j = 0; j < bomb.length; j++) {
                    if (set.has(j)) continue;
                    let [xi, yi, ri] = bomb[j];
                    let distance = Math.sqrt(
                        Math.pow(xi - x, 2) + Math.pow(yi - y, 2)
                    );

                    if (distance <= r) {
                        stack.push(j);
                        visited[j] = true;
                        set.add(j)
                        detonate += 1;
                        maxDetonate = Math.max(maxDetonate, detonate);
                    }
                }
            }
            set.clear()
        }
    }

    return maxDetonate;
}

console.log(
    maximumDetonation([
        [855, 82, 158],
        [17, 719, 430],
        [90, 756, 164],
        [376, 17, 340],
        [691, 636, 152],
        [565, 776, 5],
        [464, 154, 271],
        [53, 361, 162],
        [278, 609, 82],
        [202, 927, 219],
        [542, 865, 377],
        [330, 402, 270],
        [720, 199, 10],
        [986, 697, 443],
        [471, 296, 69],
        [393, 81, 404],
        [127, 405, 177],
    ])
);
// console.log(
//     maximumDetonation([
//         [2, 1, 3],
//         [6, 1, 4],
//     ])
// ); // 2
// console.log(
//     maximumDetonation([
//         [1, 1, 5],
//         [10, 10, 5],
//     ])
// ); // 1
// console.log(
//     maximumDetonation([
//         [1, 2, 3],
//         [2, 3, 1],
//         [3, 4, 2],
//         [4, 5, 3],
//         [5, 6, 4],
//     ])
// ); // 5
