it('basic object destructuring', () => {
  const obj = { a: 'hey', b: 'wow' };
  const a = obj.a;

  expect(a).toEqual('hey');
});

it('nested destructures', () => {
  const obj = { a: { aa: 'hey' }, b: 'wow' };
  const aa = obj.a.aa;

  expect(aa).toEqual('hey');
});

it('object destructuring with default', () => {
  const obj = { a: 'hey', b: 'wow' };
  const c = obj.c || 'okay';

  expect(c).toEqual('okay');
});

it('basic array destructuring', () => {
  const arr = [1, 2, 3];
  const item = arr[0];

  expect(item).toEqual(1);
});

it('array destructuring with default', () => {
  const arr = [];
  const item = arr[0] || 1;

  expect(item).toEqual(1);
});

it('ignoring values in array destructuring', () => {});

it('var swapping with destructuring', () => {
  let a = 1;
  let b = 2;

  let tmp = b;
  b = a;
  a = tmp;

  // or

  // b = b + a;
  // a = b - a;
  // b = b - a;

  expect(a).toEqual(2);
  expect(b).toEqual(1);
});
