it('basic object destructuring', () => {
  const obj = { a: 'hey', b: 'wow' };

  // const a = obj.a;
  // const b = obj.b;

  const { a, b } = obj;

  expect(b).toEqual('wow');
});

it('nested destructures', () => {
  const obj = {
    a: { cats: 'hey', dogs: 'meh' },
    b: 'wow',
  };

  // const a = obj.a;
  // const { a } = obj;

  // const cats = a.cats;
  // const { cats } = a;

  // const cats = obj.a.cats
  // const dogs = obj.a.dogs
  const { a: { cats } } = obj;

  expect(cats).toEqual('hey');
});

it('object destructuring with default', () => {
  const obj = { a: 'hey', b: 'wow' };
  const c = obj.c || 'okay';

  expect(c).toEqual('okay');
});

it('basic array destructuring', () => {
  const arr = [0, 1, 2];
  const item = arr[0];

  // const first = arr[0];
  // const second = arr[1];
  // const third  = arr[2];
  const [first, second, third] = arr;

  expect(first).toEqual(0);
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
