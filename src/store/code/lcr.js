/**
 * LRU，Least Recently Used
 * 保证缓存的读写效率，比如读写复杂度都是O(1)
 * 当一条缓存中的数据被读取，将它最近使用的时间更新
 * 当插入一条新数据的时候，弹出更新时间最远的数据
 * 
 * 约定：越靠近链表头部的数据越旧，越靠近链表尾部的数据越新。
 * 
 * 使用Map 和 双向链表解决这个问题。
 */

/**
 * 定义双向链表
 */
class Node {
  key = '';
  value = '';
  prev = null;
  next = null;

  constructor(key, value = '') {
    this.key = key;
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

class LinkedList {
  head = null;
  tail = null;

  constructor() {
    this.head = new Node('head');
    this.tail = new Node('tail');
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // 默认插入到链表的尾部
  append(node) {
    const prevNode = this.tail.prev;
    node.prev = prevNode;
    node.next = prevNode.next;
    prevNode.next = node;
    node.next.prev = node;
  }

  delete(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    nextNode.prev = prevNode;
    prevNode.next = nextNode;
  }

  getFirst() {
    return this.head.next;
  }

  getLast() {
    return this.tail.prev;
  }

  display() {
    let currNode = this.head;
    while (currNode !== null) {
      const {key, value} = currNode;
      if (!(key === 'head' || key === 'tail')) {
        console.log(key, value);
      }
      currNode = currNode.next;
    }
  }
}

class LRU {
  capacity = 0;
  cache = null;
  linked_list = null;
  constructor(capacity = 1000) {
    this.capacity = capacity;
    this.cache = new Map(); // 是否Map切换为Object
    this.linked_list = new LinkedList();
  }

  // 获取cache中的key，相当于使用使用
  get(key) {
    if (!this.cache.has(key)) {
      return null;
    }
    // 更新链表中元素的位置
    this._put_recently(key);
    return this.cache.get(key);
  }

  _put_recently(key) {
    const node = this.cache.get(key);
    this.linked_list.delete(node);
    this.linked_list.append(node);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.linked_list.delete(this.cache.get(key));
      const newCode = new Node(key, value);
      this.cache.set(key, newCode);
      this.linked_list.append(newCode);
      return;
    }
    if (this.cache.size + 2 > this.capacity) {
      const first = this.linked_list.getFirst();
      this.linked_list.delete(first);
      this.cache.delete(key);
    }
    const newCode = new Node(key, value);
    this.linked_list.append(newCode);
    this.cache.set(key, newCode);
  }
}

const lru = new LRU();
lru.put('first', new Date(1616395485966));
lru.put('second', new Date());
lru.put('3', {
  small: '1',
  large: Math.pow(2, 32)
});
lru.put('4', ['READ', 'EDIT', 'SHARE']);
lru.get('second');
lru.linked_list.display();

console.log('-------------------------------------');
lru.put('first', new Array(10));
lru.linked_list.display();
