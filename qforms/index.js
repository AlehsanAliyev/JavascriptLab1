// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.data = []
        this.s1 = new Stack()
        this.s2 = new Stack()
    }

    add(val){
        while(this.s1.data.length){
            this.s2.push(this.s1.peek());
            this.s1.pop();
        }
        this.s1.push(val)
        while(this.s2.data.length){
            this.s1.push(this.s2.peek());
            this.s2.pop();
        }
    }

    peek(){
        return this.s1.peek()
    }

    remove(){
        return this.s1.pop();
    }
}

module.exports = Queue;
