// Node: {next: Node, data: number};
const newNode = data => ({ next: null, data });

// modifies root
const insertAtEnd = (root, data) => {
  if (!root) return newNode(data);

  let curr = root;
  while (curr.next) {
    curr = curr.next;
  }

  curr.next = newNode(data);
  return root;
};

// modifies root
const insertAtStart = (root, data) => {
  return { ...newNode(data), next: root };
};

it('newNode', () => {
  expect(newNode(5)).toEqual({ next: null, data: 5 });
});

it('insertAtEnd', () => {
  let list = newNode(5);
  insertAtEnd(list, 6);
  expect(list).toEqual({ data: 5, next: { data: 6, next: null } });

  insertAtEnd(list, 1);
  expect(list).toEqual({
    data: 5,
    next: { data: 6, next: { data: 1, next: null } },
  });
});

it('insertAtStart', () => {
  let list = newNode(5);
  list = insertAtStart(list, 6);
  expect(list).toEqual({ data: 6, next: { data: 5, next: null } });

  list = insertAtStart(list, 1);
  expect(list).toEqual({
    data: 1,
    next: { data: 6, next: { data: 5, next: null } },
  });
});
