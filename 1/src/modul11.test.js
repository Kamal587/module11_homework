'use strict'
import { sum } from './modul11.js';

describe('test of modul11', () => {
  it('sum 1 of 2 result 3', () => {
    const result = sum(1,2)
    expect(result).toBe(3);
  })
});