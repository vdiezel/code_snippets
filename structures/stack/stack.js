class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// insert and remove: O(1)
// searching/access O(n)

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        const newNode = new Node(val);
        if (!this.first){
            this.last = newNode;
        }
        const oldFirst = this.first;
        this.first = newNode;
        this.first.next = oldFirst;
        return ++this.size;
    }

    pop(){
        if (!this.first) return null;
        const firstNode = this.first;
        if (this.size === 1){
            this.last = null;
        }
        this.first = firstNode.next;
        this.size--;
        return firstNode.value;
    }


}

const stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
