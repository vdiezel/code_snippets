class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, p){
        const newNode = new Node(val, p);
        this.values.push(newNode);
        if (this.values.length === 1) return this;
        const index = this.values.length - 1;
        return this.bubbleUp(index);
    }

    bubbleUp(index){
        while(true){
            const parentIndex = Math.floor((index-1)/2);
            if (parentIndex <  0) break;

            if (this.values[index].priority < this.values[Math.floor((index-1)/2)].priority){
                this.swap(index, Math.floor((index-1)/2));
                index = Math.floor((index-1)/2);
            }
            else{
                break;
            }
        }
        return this;
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    swap(index1, index2){
        [this.values[index1], this.values[index2]]
            = [this.values[index2], this.values[index1]];
    }

    print(){
        console.log(this.values);
    }
}

const pq = new PriorityQueue();
pq.enqueue("The is not urgent", 5);
pq.print();
pq.enqueue("The is a bit urgent", 3);
pq.print();
pq.enqueue("The is urgent", 1);
pq.print();
pq.dequeue();
pq.print();