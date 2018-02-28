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
  const queue = [];
  if (!root) return false;

  queue.push(root);

  while (queue.length) {
    const n = queue.shift();
    if (n.value === value) {
      return true;
    }

    if (n.left) {
      queue.push(n.left);
    }
    if (n.right) {
      queue.push(n.right);
    }
  }

  return false;
};

const depth = root => {
  if (!root) return 0;
  if (!root.left && !root.right) return 0;
  return 1 + Math.max(depth(root.left), depth(root.right));
};

const balanced = root =>
  root === null ||
  (balanced(root.left) &&
    balanced(root.right) &&
    Math.abs(depth(root.left) - depth(root.right)) <= 1);

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

it('depth', () => {
  let added = add(add(add(null, 5), 2), 1);
  expect(depth(added)).toEqual(2);

  added = add(add(add(null, 5), 2), 6);
  expect(depth(added)).toEqual(1);

  added = add(add(added, 7), 8);
  expect(depth(added)).toEqual(3);
});

it('balanced', () => {
  let added = add(add(add(null, 5), 2), 6);
  expect(balanced(added)).toBeTruthy();

  added = add(add(added, 7), 8);
  expect(balanced(added)).toBeFalsy();

  expect(balanced(null)).toBeTruthy();
});
