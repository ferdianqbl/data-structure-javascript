const createQueue = () => {
  const queue = [];
  return {
    enqueue: (item) => {
      queue.push(item);
    },
    dequeue: () => {
      return queue.shift();
    },
    peek: () => {
      return queue[0];
    },
    isEmpty: () => {
      return queue.length === 0;
    },
    size: () => {
      return queue.length;
    },
    clear: () => {
      queue.length = 0;
    },
    print: () => {
      console.log(queue);
    },
  };
};

const books = createQueue();
books.enqueue("Harry Potter");
books.enqueue("Lord of the Rings");
books.enqueue("The Hobbit");
books.enqueue("The Catcher in the Rye");
books.enqueue("The Great Gatsby");
books.enqueue("The Lord of the Rings");

console.log(books.peek());

books.print();
books.dequeue();
books.print();
