class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// adding at the end, remove from the front!

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
        }
        else {
            this.last.next = newNode;
        }
        this.last = newNode;
        return ++this.size;
    }

    dequeue(){
        if (!this.first) return null;
        const oldFirst = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = oldFirst.next;
        oldFirst.next = null;
        this.size--;
        return oldFirst.value;
    }
}

const queue = new Queue();

console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

