const createNewNode = data => {
  return {
    data,
    next: null,
  }
};

const obj1 = createNewNode(1);

const obj2 = createNewNode(2);

obj1.next = obj2;

const obj3 = createNewNode(3);

obj2.next = obj3;

const obj4 = createNewNode(4);

obj3.next = obj4;

const obj5 = createNewNode(5);

obj4.next = obj5;

// obj1 -> obj2 -> obj3 -> obj4 -> obj5

function findMiddleOfLinkedList(list) {
  // take two pointer iterate first by two and second by one -
  // when first reaches the end, second will reach the first
  let first = list,
    second = first;
  while (second && second.next) {
    if (second.next.next) {
      second = second.next.next;
      first = first.next;
    } else {
      second = second.next;
    }
    console.log(second.data);
    console.log(first.data);
  }
  return first.data;
}

console.log(findMiddleOfLinkedList(obj1));
