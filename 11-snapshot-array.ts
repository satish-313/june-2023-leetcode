class SnapshotArray {
    snapId:number;
    hrecord:number[][]

    constructor(length: number) {
        this.snapId = 0;
        this.hrecord = []
    }

    set(index: number, val: number): void {
        if (!this.hrecord[index]) this.hrecord[index] = []
        this.hrecord[index][this.snapId] = val;
    }

    snap(): number {
        this.snapId += 1;
        return this.snapId - 1;
    }

    get(index: number, snap_id: number): number {
  if (!this.hrecord[index]) return 0;
    if (this.hrecord[index][snap_id] !== undefined) return this.hrecord[index][snap_id]
    const nums = [...this.hrecord[index].slice(0, snap_id)].filter((n) => n !== undefined);
    return nums[nums.length - 1] ?? 0;
    }
}

class SnapshotArray2 {
    snapId: number;
    hrecord: [number, number][][];

    constructor(length: number) {
        this.snapId = 0;
        this.hrecord = new Array(length)
            .fill(null)
            .map(() => new Array(1).fill(null).map(() => [0, 0]));
    }

    set(index: number, val: number): void {
        this.hrecord[index].push([this.snapId, val]);
    }

    snap(): number {
        this.snapId += 1;
        return this.snapId - 1;
    }

    get(index: number, snap_id: number): number {
        return this.hrecord[index][snap_id][0];
    }
}

let len = 1;
let idx = 0;
let hRecord = new Array(len)
    .fill(null)
    .map(() => new Array(1).fill(null).map(() => [0, 0]));

hRecord[0].push([0, 15]);
idx += 1;
idx += 1;
idx += 1;
let l = 0;
let id = 2;
hRecord[0].forEach(([a, b]) => {
    if (a === id) l = b;
});
console.log(hRecord)
console.log(l);

class SnapshotArray1 {
    snapId = 0;
    map = new Map<number, number[]>();
    arr: number[];

    constructor(length: number) {
        this.arr = new Array(length);
    }

    set(index: number, val: number): void {
        this.arr[index] = val;
    }

    snap(): number {
        this.map.set(this.snapId, [...this.arr]);
        return this.snapId++;
    }

    get(index: number, snap_id: number): number {
        let snapArr = this.map.get(snap_id)!;
        return snapArr[index];
    }
}
