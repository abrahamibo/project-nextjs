import { test } from "@jest/globals";
import sum from '../src/services/sum';


test('adds 1 + 2 to equal 3', () => {
  // @ts-ignore
  expect(sum(1, 2)).toBe(3);
});