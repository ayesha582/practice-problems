const createNewNode = data => {
  return {
    data,
    next: null,
  }
};

const obj1 = createNewNode(1);

const obj2 = createNewNode(1);

obj1.next = obj2;

const obj3 = createNewNode(1);

obj2.next = obj3;

const obj4 = createNewNode(4);

obj3.next = obj4;

const obj5 = createNewNode(5);

obj4.next = obj5;

// obj1 -> obj2 -> obj3 -> obj4 -> obj5

function removeDuplicateElement(list) {
  let temp = createNewNode(-1),
    start = list;
  while (list && list.next) {
    if (temp.data === list.data) {
      // if current data is equal to previous data
      temp.next = list.next;
      list = list.next;
    } else {
      temp = list;
      list = list.next;
    }
  }
  return start;
}

console.log(removeDuplicateElement(obj1));
