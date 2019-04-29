// space O(n)
// search O(log n)
// insert O(log n)
// delete O(log n)

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root =  null;
    }

    find(value){
        if (!this.root) return false;
        let node = this.root;
        while(1){
            if (node.value === value) return node;
            else if(node.value < value){
                if (node.right){
                    node = node.right;
                }
                else return false;
            }
            else {
                if(node.left){
                    node = node.left;
                }
                else return false;
            }
        }
    }

    insert(value){
        if (!this.root){
            this.root = new Node(value);
        }
        else{
            let node = this.root;
            while(1){
                if (node.value < value){
                    if (node.right){
                        node = node.right;
                    }
                    else{
                        node.right = new Node(value);
                        break;
                    }
                }
                else if (node.value > value){
                    if (node.left){
                        node = node.left;
                    }
                    else{
                        node.left = new Node(value);
                        break;
                    }
                }
                else {
                    break;
                }
            }
        }
        return this;
    }

    BFS(){
        const res = [];
        const queue = [];
        if (!this.root) return res;
        queue.push(this.root);
        while(queue.length > 0){
            const current = queue.shift();
            res.push(current.value);
            if (current.right) queue.push(current.right);
            if (current.left) queue.push(current.left);
        }
        return res;
    }

    DFSPreOrder(){
        const res = [];
        const current = this.root;
        if (!current) return [];
        function walk(node){
            res.push(node.value);
            if (node.left) walk(node.left);
            if (node.right) walk(node.right);
        }

        walk(current);
        return res;
    }

    DFSPostOrder(){
        const res = [];
        const current = this.root;
        if (!current) return [];
        function walk(node){
            if (node.left) walk(node.left);
            if (node.right) walk(node.right);
            res.push(node.value);
        }

        walk(current);
        return res;
    }

    DFSInOrder(){
        const res = [];
        const current = this.root;
        if (!current) return [];
        function walk(node){
            if (node.left) walk(node.left);
            res.push(node.value);
            if (node.right) walk(node.right);
        }
        walk(current);
        return res;
    }

}

const bst = new BST();
// bst.root = new Node(10);
// bst.root.right = new Node (15);
// bst.root.left = new Node(5);
bst.insert(15);
console.log(bst);
bst.insert(10);
console.log(bst);
bst.insert(20);
console.log(bst);
bst.insert(22);
console.log(bst);


console.log(bst.find(15));
console.log(bst.find(22));
console.log(bst.find(10));
console.log(bst.find(11));
console.log(bst.BFS());
console.log(bst.DFSPreOrder());
console.log(bst.DFSPostOrder());
console.log(bst.DFSInOrder());
