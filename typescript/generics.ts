class TypedQueue<T> {
  items: Array<T> = [];
  add(item: T) {
    this.items.push(item);
  }
}

let numberQ = new TypedQueue<number>();
let stringQ = new TypedQueue<string>();
