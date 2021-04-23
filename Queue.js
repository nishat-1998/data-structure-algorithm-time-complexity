class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue (item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
       }
    }
}

const loves=new Queue();
loves.enqueue('Ashique');
loves.enqueue('Emad');
loves.enqueue('Akash');
loves.enqueue('Priya');
const Winner=loves.dequeue();
console.log(Winner)
console.log(loves.queue);