// left child of a parent is stored at 2n+1
// and the right child at 2n+2
// parent  Math.floor((p-1)/ 2)

// insert log n
// removal log n
// search O(n)

class MaxBinaryHeap {
    constructor(){
       this.values = [];
    }

    add(value){
        this.values.push(value);
        let index = this.values.length -1;
        let parentIndex = Math.floor((index-1)/2);

        while(this.values[parentIndex] < this.values[index]){
            [this.values[parentIndex], this.values[index]]
                = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((parentIndex-1)/2);
        }
        return this.values;
    }

    extractMax(){
        if (this.values.length === 0) return null;
        const length = this.values.length;
        [this.values[0], this.values[length - 1]]
            = [this.values[length - 1], this.values[0]];
        const max = this.values.pop();
        // restore tree;
        let index = 0;
        while(true){
            const left = this.values[index*2+1];
            const right = this.values[index*2+2];
            if ((this.values[index] >= left && this.values[index] >= right)
                || (index*2+1) >= length
                || (index*2+2) >= length
            ){
                break;
            }
            else if (left > this.values[index] || right > this.values[index]){
                const maxChild = left > right ? 1 : 2;
                [this.values[index], this.values[index*2+maxChild]]
                    = [this.values[index*2+maxChild], this.values[index]];
                index = index*2+maxChild;
            }
        }
        return max;
    }

    extractMax2(){
        if (this.values.length === 0) return null;
        const max = this.values[0];
        if (this.valus.length > 0){
            this.values[0] = this.values.pop();
            this.sinkDown();
        }
        return max;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[idx];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2* idx + 2;
            let left, right;
            let swap = null;

            if (leftChildIdx < length){
                left = this.values[leftChildIdx];
                if (left > element){
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length){
                right = this.values[rightChildIdx];
                if (swap === null && right > element || (swap !==null && right > left)){
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    getParent(index){
        return this.values[Math.floor((index-1)/2)];
    }

    getLChild(index){
        return this.values[2*index+1];
    }

    getRChild(index){
        return values[2*index+2]
    }

    print(){
        console.log(this.values);
    }
}

const mbh = new MaxBinaryHeap();
mbh.add(10);
mbh.print();
mbh.add(8);
mbh.print();
mbh.add(7);
mbh.print();
mbh.add(12);
mbh.print();
mbh.add(11);
mbh.print();
console.log(mbh.extractMax2());
mbh.print();