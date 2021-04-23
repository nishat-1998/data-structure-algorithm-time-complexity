class Node {
    constructor(value){
        this.value =value;
        this.next =null;
     //this.previous = null;
    }
}

class LinkedList {
    constructor(head){
        this.head =head;
    }
    add(value){
  const newNode = new Node (value);

  let current =this.head;
  while(current.next !=null){
   current =current.next;
  }
  current.next =newNode;
    }
}

const head = new Node(1000);
const mBond = new LinkedList(head);
mBond.add(30);
mBond.add(22);
mBond.add(12);
mBond.add(14);

console.log(JSON.stringify(mBond));