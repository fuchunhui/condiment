/**
 * 链表写法二，双向链表
 */

function Node(element) {
  this.element = element;
  this.previous = null;
  this.next = null;
}

// 插入到item之后
function insert(newElement, item) {
  let newNode = new Node(newElement);
  let currNode = this.find(item);
  if (currNode.next !== null) {
    currNode.next.previous = newNode;
  }
  newNode.next = currNode.next;
  newNode.previous = currNode;
  currNode.next = newNode;
}

// 同样存在问题，当链表数据很多的时候，这样的查找效率太慢了，如何优化，是否有更好的数据结构，解决效率问题？
function find(item) {
  let currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

// 显示链表元素
function display() {
  let currNode = this.head;
  while (currNode !== null) {
    if (currNode.element !== 'head') {
      console.log(currNode.element);
    }
    currNode = currNode.next;
  }
}

function remove(item) {
  let currNode = this.find(item);
  currNode.previous.next = currNode.next;
  if (currNode.next !== null) {
    currNode.next.previous = currNode.previous;
  }
  currNode = null;
}

function LinkedList() {
  this.head = new Node('head');
  this.insert = insert;
  this.find = find;
  this.remove = remove;
  this.display = display;
}

const fruits = new LinkedList();
fruits.insert('apple', 'head');
fruits.insert('banana', 'apple');
fruits.insert('orange', 'banana');
fruits.insert('peach', 'banana');
fruits.insert('group', 'apple');
fruits.insert('strawberry', 'group');
fruits.insert('litchi', 'banana');
fruits.display();
console.log('分界线-------------------------------------');
fruits.remove('orange');
fruits.remove('apple');
fruits.display();

module.exports = {
  LinkedList
};
