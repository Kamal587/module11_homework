'use strict'

import { countDown } from "./modul11"

describe ('coutDown test', () => {
    it('Not a number of num', () => {
        const result = countDown('qwerty');
        expect(result).toBe('Это не число')
    }),
    it('negative of number', () => {
        const result = countDown(-1);
        expect(result).toBe('Отрицательное число')
    }),
    it('down number of coutDown', () => {
        const result = countDown(5);
        expect(result).toMatchObject([5, 4, 3, 2, 1])
    })
    
})