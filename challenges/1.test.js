// node: {left: ?node, right: ?node, value: number}

const newNode = value => ({ left: null, right: null, value });

const add = (root, value) => {
  if (!root) return newNode(value);
  return value > root.value
    ? { ...root, right: add(root.right, value) }
    : { ...root, left: add(root.left, value) };
};

const print = root =>
  root ? `${print(root.left)} ${root.value} ${print(root.right)}`.trim() : '';

const dfs = (root, value) => {
  if (!root) return false;

  if (root.value === value) return true;

  return dfs(root.left) || dfs(root.right);
};

const bfs = (root, value) => {
  if (!root) return false;
};

it('prints', () => {
  const printed = print({ left: null, right: null, value: 1 });
  expect(printed).toEqual('1');
});

it('adds', () => {
  const added = add(add(add(null, 1), 2), 5);
  const printed = print(added);

  expect(printed).toEqual('1 2 5');
});

it('dfs', () => {
  const added = add(add(add(null, 1), 2), 5);

  expect(dfs(added, 6)).toEqual(false);
  expect(dfs(added, 1)).toEqual(true);
});

it('bfs', () => {
  const added = add(add(add(null, 1), 2), 5);

  expect(bfs(added, 6)).toEqual(false);
  expect(bfs(added, 1)).toEqual(true);
});
