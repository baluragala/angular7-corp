function calculatePrice(originalPrice: number, tax?: number): number {
  return originalPrice + (tax == undefined ? 0 : tax);
}

calculatePrice(10);

function map(arr: number[], callback: (x: number) => number): number[] {
  let r: number[] = [];
  for (let a of arr) {
    let t = callback(a);
    r.push(t);
  }
  return r;
}

let double: (x: number) => number = x => x * 2;

let mappedArr = map([1, 2, 3], double);

console.log(mappedArr);

//constructor functions

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.plot = () => {
    return `(${this.x},${this.y})`;
  };
}

var p1 = new Point(100, 200);
p1.plot();
var ref = p1.plot;
ref();
