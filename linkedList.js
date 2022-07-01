// node
const createNode = (value) => {
  return {
    value,
    next: null,
  };
};

// linked list
const createLinkedList = () => {
  return {
    head: null,
    tail: null,
    length: 0,
    push: (value) => {
      const newNode = createNode(value);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
      }

      return newNode;
    },
    pop: () => {
      if (this.isEmpty()) return null;

      const lastNode = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return lastNode;
      }

      let curr = this.head;
      let temp;
      while (curr) {
        if (curr.next === this.tail) {
          temp = curr;
          break;
        }
        curr = curr.next;
      }

      temp.next = null;
      this.tail = temp;
      this.length--;

      return lastNode;
    },
    isEmpty: () => {
      return this.length === 0;
    },
  };
};
