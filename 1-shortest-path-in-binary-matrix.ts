interface queueType {
    [index: number]: [number, number];
}

function shortestPathBinaryMatrix(grid: number[][]): number {
    class Queue {
        items: queueType;
        head: number;
        tail: number;

        constructor() {
            this.items = {};
            this.head = 0;
            this.tail = 0;
        }

        push(pos: [number, number]) {
            this.items[this.head++] = pos;
        }

        shift(): [number, number] {
            let cor: [number, number] = this.items[this.tail];
            delete this.items[this.tail++];
            return cor;
        }

        isEmpty(): boolean {
            return this.head === this.tail ? true : false;
        }
    }

    const n = grid.length;

    if (grid[0][0] === 1 || grid[n - 1][n - 1]) return -1;
    if (n === 1 && grid[0][0] === 0) return 1;

    let queue = new Queue();
    let dir: [number, number][] = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
    ];

    queue.push([0, 0]);
    grid[0][0] = 1;

    while (!queue.isEmpty()) {
        let [r, c] = queue.shift();

        for (let [i, j] of dir) {
            let ri = r + i;
            let cj = c + j;

            if (ri >= n || ri < 0 || cj >= n || cj < 0 || grid[ri][cj] !== 0)
                continue;

            queue.push([ri, cj]);
            grid[ri][cj] = grid[r][c] + 1;
        }

        if (grid[n - 1][n - 1]) return grid[n - 1][n - 1];
    }

    return grid[n - 1][n - 1] ? grid[n - 1][n - 1] : -1;
}

console.log(
    shortestPathBinaryMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ])
);
console.log(
    shortestPathBinaryMatrix([
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0],
    ])
);

console.log(
    shortestPathBinaryMatrix([
        [0, 1],
        [1, 0],
    ])
);

console.log(
    shortestPathBinaryMatrix([
        [0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 0],
    ])
);
