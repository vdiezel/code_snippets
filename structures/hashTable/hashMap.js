class HashMap{

    constructor(size = 100){
        this.keyMap = new Array(size);
    }

    hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let value = key[i].charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        const index = this.hash(key);
        if (!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key){
        const index = this.hash(key);
        if (this.keyMap[index]){
            const entry = this.keyMap[index].find(entry => entry[0] === key);
            if (entry) return entry[1];
        }
        return undefined; // never gets called
    }

    keys(){
        let res = [];
        for (let entry of this.keyMap){
            if (entry){
                for (let pair of entry){
                    res.push(pair[0]);
                }
            }
        }
        return res;
    }

    values(){
        let res = [];
        for (let entry of this.keyMap){
            if (entry){
                for (let pair of entry){
                    res.push(pair[1]);
                }
            }
        }
        return Array.from(new Set(res));
    }

    print(){
        console.log(this.keyMap);
    }
}

let ht = new HashMap(5);
ht.set("Viktor", "Klugscheißer");
ht.set("Johann", "Pupser");
ht.set("Thomas", "Pupser");
ht.set("Gleb", "Romantiker");
ht.set("Katharina", "Hasenherz");
// ht.print();
// console.log(ht.get("Viktor"));
// console.log(ht.get("dasd"));
// console.log(ht.get("Gleb"));
console.log("keys:", ht.keys());
console.log(ht.values());

