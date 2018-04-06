it('1.1', () => {
  const rep = 'abcdeef';
  const norep = 'qwertyuiop';

  const hasRepeatedChars = (str) => {
    const chars = {};

    for(let i = 0; i < str.length - 1; i++) {
      if(chars[str.charAt(i)]) return true;
      chars[str.charAt(i)] = true;
    }

    return false;
  }

  expect(hasRepeatedChars(rep)).toEqual(true);
  expect(hasRepeatedChars(norep)).toEqual(false);
});

it('1.1a', () => {
  const rep = 'abcdeef';
  const norep = 'qwertyuiop';

  const hasRepeatedChars = (str) => {
    for(let i = 0; i < str.length - 1; i++) {
      if(str.substring(i + 1).indexOf(str[i]) >= 0) return true;
    }
    return false;
  }

  expect(hasRepeatedChars(rep)).toEqual(true);
  expect(hasRepeatedChars(norep)).toEqual(false);
});

it('1.2', () => {
  const str = ['a', 'b', 'c', 'd', '\0'];

  const reverseCString = (a) => {
    for(let i=0; i < Math.floor(a.length/2); i++){
      const tmp = a[i];
      a[i] = a[a.length - 2 - i];
      a[a.length - 2 - i] = tmp;
    }
    return a;
  }

  expect(reverseCString(str)).toEqual(['d', 'c', 'b', 'a', '\0']);
});

it('1.3', () => {

  
});
