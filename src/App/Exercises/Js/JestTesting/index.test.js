import { sum, hasLetterR, fetchData } from './index';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('5 equal 5', () => {
  expect(sum(3, 2)).toEqual(5);
});

test('there is no R in Kala', () => {
  expect(hasLetterR('Kala')).toBeFalsy();
});
