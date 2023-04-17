const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (this.queue === undefined) {
      this.queue = newNode;
      return;
    } else {
		let node = this.queue;
		while (node.next !== null) {
			node = node.next;
		}
	  node.next = newNode;
    }
  }

  dequeue() {
	if (this.queue === undefined) {
      return null;
    } 
	let value = this.queue.value;
	this.queue = this.queue.next;
	return value;
  }
}

module.exports = {
  Queue,
};
