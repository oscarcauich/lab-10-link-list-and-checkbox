'use strict';

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
  appendNode(value){ // O(n)
    if(!(value instanceof Node))
      return null;
    if(!this.next){
      this.next = value;
      return;
    }
    this.next.appendNode(value);
  }
  removeNode(value){ // O(n)
    let currentNode = this;
    let previousNode = null;
    let notFoundYet = null;

    if(currentNode.value == value){
      currentNode.value = null;
      currentNode = currentNode.next;
      return;
    }

    while(!notFoundYet){
      if(currentNode.value == value){
        currentNode.value = null;
        previousNode.next = currentNode.next;
        notFoundYet = true;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next

    }

    return;
  }

  reverseNode(){ // O(n)
    let currentNode = this;
    let previousNode = null;
    let saveNode;

    while(currentNode) {
      saveNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = saveNode;
    }
    return previousNode;
  }

  findMiddleNode(){ // O(n)
    let slowNode, fastNode;
    slowNode = fastNode = this;
    while(fastNode && fastNode.next && fastNode.next.next){
      slowNode = slowNode.next;
      fastNode = fastNode.next.next;
    }
    return slowNode;
  }
}



//RUNNIG TESTS

try {
  console.log('runnint test, please wait...');

  let head = new Node(1);
  // console.log(head);
  console.assert(head.value == 1);
  console.assert(head.next == null);

  head.appendNode(new Node(2));
  head.appendNode(new Node(3));
  // console.log(head);
  console.assert(head.value == 1);
  console.assert(head.next.value == 2);
  console.assert(head.next.next.value == 3);
  console.dir(head, {depth: 100});

  head.removeNode(head.value);

  console.log('new head', head);
}catch(err){
  console.error('It failed', err);
}
