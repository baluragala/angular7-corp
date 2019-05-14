interface Book {
  title: string;
  author: string;
}

let b: Book = { title: "Angular 7", author: "zeo" };
b.price = 200;

interface IMediaPlayer {
  play: () => boolean;
  stop: () => boolean;
  fastForward: (duration: number) => boolean;
}

class MediPlayer implements IMediaPlayer {
  play() {
    return true;
  }
  stop() {
    return true;
  }
  fastForward(duration: number) {
    return true;
  }
}
