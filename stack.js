const createStack = () => {
  let stack = [];
  return {
    push: (item) => {
      stack.push(item);
    },
    pop: () => {
      return stack.pop();
    },
    peek: () => {
      return stack[stack.length - 1];
    },
    isEmpty: () => {
      return stack.length === 0;
    },
    size: () => {
      return stack.length;
    },
    clear: () => {
      stack = [];
    },
    print: () => {
      console.log(stack);
    },
  };
};

const books = createStack();
books.push("Harry Potter");
books.push("Lord of the Rings");
books.push("The Hobbit");
books.push("The Catcher in the Rye");
books.push("The Great Gatsby");
books.push("The Lord of the Rings");

books.print();

books.pop();
books.print();
