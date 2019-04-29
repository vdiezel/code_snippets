class Node{
    constructor(val){
        this.val = val;
        this.next= null;
    }
}

// BIG O
// inserts O(1)
// removal O(1) or O(n)
// searching O(n)
// acccess O(n)

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
       if (!this.head) return undefined;
       let current = this.head;
       let newTail = current;
       while(current.next){
           newTail = current;
           current = current.next;
       }
       this.tail = newTail;
       this.tail.next = null;
       this.length--;
       if (this.length === 0){
           this.head = null;
           this.tail = null;
       }
    }

    shift(){
        if (!this.head) return undefined;
        const oldHead = this.head;
        this.head = this.head.next;
        if (!this.head){
            this.tail = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        const newHead = new Node(val);
        newHead.next = this.head;
        if (!newHead.next){
            this.tail = newHead;
        }
        this.head = newHead;
        this.length++;
        return this;
    }

    get(pos){
        if (pos >= this.length || pos < 0) return undefined;
        let current = this.head;
        while (pos > 0){
            current = current.next;
            pos--;
        }
        return current;
    }

    set(pos, val){
        const current = this.get(pos);
        if (current) current.val = val;
        return current;
    }

    insert(pos, val){
        if (pos === this.length){
            return this.push(val);
        }
        else if (pos === 0){
            return this.unshift(val);
        }
        else {
            if (pos < 0 || pos > this.length) return undefined;
            const pre = this.get(pos-1);
            const aft = pre.next;
            const newNode = new Node(val);
            pre.next = newNode;
            newNode.next = aft;
        }
        this.length++;
        return this;
    }

    remove(pos){
        if (pos === (this.length - 1)){
            return this.pop();
        }
        else if (pos === 0){
            return this.shift();
        }
        else{
            if (pos < 0 || pos >= this.length){
                return undefined;
            }
            else{
                const pre = this.get(pos-1);
                const removedNode = pre.next;
                pre.next = removedNode.next;
                this.length--;
            }
            return removedNode;
        }
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print(){
        const arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    // traverse(){
    //     let current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
}


const list = new SinglyLinkedList();
list.push(50);
list.push(100);
list.push(150);
// console.log(list);
// list.shift();
// console.log(list);
// list.shift();
// console.log(list);
// list.shift();
// console.log(list);
//list.unshift(200);
// console.log(list);
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.get(3));

// list.insert(1, 125);
// console.log(list);
// console.log(list.get(2));

console.log(list);
list.reverse();
console.log(list);
