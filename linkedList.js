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
    isEmpty: this.length === 0,
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
      if (this.isEmpty) return null;

      const lastNode = this.tail;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return lastNode;
      }

      let curr = this.head;
      let temp;
      while (curr && curr.next !== this.tail) curr = curr.next;
      temp = curr;
      temp.next = null;
      this.tail = temp;
      this.length--;

      return lastNode;
    },
    getLastNode: () => {
      if (this.isEmpty) return null;

      return this.tail;
    },

    get: (index) => {
      if (index < 0 || index > this.length) return null;

      if (index === 0) return this.head;

      let curr = this.head;
      while (index--) {
        curr = curr.next;
      }
      return curr;
    },

    delete: (index) => {
      if (index < 0 || index > this.length) return null;

      if (index === 0) {
        const getVal = this.head;
        this.head = this.head.next;
        this.length--;
        return getVal;
      }

      let curr = this.head;
      let prev = curr;
      while (index--) {
        curr = curr.next;
        prev = curr;
      }

      let getVal = curr;
      prev.next = curr.next;
      this.length--;

      return getVal;
    },

    print: () => {
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    },
  };
};

// testing
const linkedList = createLinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);

console.log(linkedList.pop()); // 3
console.log(linkedList.getLastNode()); // 2
console.log(linkedList.pop()); // 2
console.log(linkedList.getLastNode()); // 1
console.log(linkedList.pop()); // 1
console.log(linkedList.getLastNode()); // null
