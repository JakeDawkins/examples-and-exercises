// what is the result of the following

let foo = { a: 'hello' };
let bar = { b: 'world' };

const one = { ...foo, ...bar };
const two = { ...foo, c: 'waddup' };
const three = { ...foo, a: 'okay' };
const four = { ...foo, ...{ c: 'waddup' } };

foo = [1, 2];
bar = [3, 4, 5];

const five = [...foo];
const six = [1, ...foo];
const seven = [...foo, ...bar];
const eight = [...foo, ...[...bar]];

foo = { a: 'hi', b: 'there', c: 'friendo' };

const { a, ...rest } = foo;
const { a, b, ...rest } = foo;

let myFunc = ({ a, ...rest }) => {
  console.log(rest);
};
myFunc(foo);

foo = ['a', 'b', 'c', 'd'];

const [a, ...rest] = foo;
const [a, b, ...rest] = foo;

myFunc = ([a, b, ...rest]) => {
  console.log(rest);
};
myFunc(foo);
