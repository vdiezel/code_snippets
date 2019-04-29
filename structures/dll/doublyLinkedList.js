class Node {

    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }

}

class DoublyLinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop(){
        if (!this.head) return undefined;
        const oldTail = this.tail;
        if (this.length === 1){
            this.tail = null;
            this.head = null;
        }
        else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return oldTail;
    }

    shift(){
        if (!this.head) return undefined;
        const oldHead = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null; // GC?
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        const newNode = new Node(val);
        if (!this.head){
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    get(pos){
        if (pos < 0 || pos >= this.length) return null;
        let current;
        if ((this.length - pos) > pos){
            current = this.head;
            while(pos){
                current = current.next;
                pos--;
            }
        }
        else{
            current = this.tail;
            let posOffset = this.length - pos - 1;
            while(posOffset){
                current = current.prev;
                posOffset--;
            }
        }
        return current;
    }

    set(pos, val){
        const node = this.get(pos);
        if (!node) return undefined;
        node.value = val;
        return node;
    }

    insert(pos, val){
        if (pos < 0  || pos > this.length) return undefined;
        if (pos === 0) return this.unshift(val);
        else if (pos === this.length) return this.push(val);
        else {
            const newNode = new Node(val);
            const prev = this.get(pos-1);
            const after = prev.next;
            prev.next = newNode;
            newNode.prev = prev;
            after.prev = newNode;
            newNode.next = after;
            this.length++;
            return this;
        }
    }

    remove(pos){
        if (pos < 0  || pos > this.length) return undefined;
        if (pos === 0) return this.shift(val);
        else if (pos === this.length - 1) return this.pop(val);
        else {
            const removedNode = this.get(pos);
            const prev = removedNode.prev;
            const after = removedNode.next;
            prev.next = after;
            after.prev = prev;
            removedNode.next = null;
            removedNode.prev = null;
            this.length++;
            return removedNode;
        }
    }

    reverse(){
        if (this.length === 1) return this;
        let current = this.tail;
        const oldHead = this.head;
        const oldTail = this.tail;
        while(current){
            let prev = current.prev;
            let next = current.next;
            let currentPrevOld = current.prev;
            current.prev = next;
            current.next = prev;
            current = currentPrevOld;
        }
        this.head = oldTail;
        this.tail = oldHead;
        return this;
    }


}

const dll = new DoublyLinkedList();

// console.log(dll.push(20));
// console.log(dll.push(40));
// // console.log(dll.pop());
// console.log(dll.push(60));
// console.log(dll.unshift(10));

dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);

// console.log(dll.get(0));
// console.log(dll.get(1));
// console.log(dll.get(2));
// console.log(dll.get(3));
console.log(dll);
console.log(dll.reverse());
// console.log(dll.shift());
// console.log(dll);
// console.log(dll.shift());
// console.log(dll);
// console.log(dll.shift());
// console.log(dll);