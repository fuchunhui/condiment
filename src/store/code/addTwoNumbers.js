/**
 * 两数求和，链表题
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

const addTwoNumbers = (l1, l2) => {
  let surplus = 0;
  let node = new ListNode('0');
  let head = node;

  while (surplus || l1 || l2) {
    const v1 = l1 !== null ? l1.val : 0;
    const v2 = l2 !== null ? l2.val : 0;

    const sum = v1 + v2 + surplus;
    surplus = sum > 9 ? 1 : 0;

    node.next = new ListNode(sum % 10);
    node = node.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return head.next;
};

const a1 = [12, 4, 2];
const a2 = [3, 5, 1];
console.log(addTwoNumbers(a1, a2));