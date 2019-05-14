class Stack {
  protected _items: number[] = [];

  constructor(items: number[]) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  set items(items: number[]) {
    if (items.length == 0) {
      throw new Error("invalid items length");
    }
    this._items = items;
  }

  push(item: number) {
    this._items.unshift(item);
  }

  pop() {
    return this._items.shift();
  }
}

let s1 = new Stack([1, 2, 3]);
s1.push(10);
console.log(s1.items);
s1.items = [];
s1.pop();
console.log(s1.items);

class CappedStack extends Stack {
  constructor(items: number[]) {
    super(items);
  }
}
