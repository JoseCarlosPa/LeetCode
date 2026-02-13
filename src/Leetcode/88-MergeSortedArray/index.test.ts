import { describe, it, expect } from 'vitest';
import { merge } from './index.ts';

// Helper para testear la mutación de nums1
function testMerge(nums1: number[], m: number, nums2: number[], n: number, expected: number[]) {
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual(expected);
}

describe('merge', () => {
  it('Ejemplo 1', () => {
    testMerge([1,2,3,0,0,0], 3, [2,5,6], 3, [1,2,2,3,5,6]);
  });

  it('Ejemplo 2', () => {
    testMerge([1], 1, [], 0, [1]);
  });

  it('Ejemplo 3', () => {
    testMerge([0], 0, [1], 1, [1]);
  });

  it('Caso con elementos iguales', () => {
    testMerge([2,2,3,0,0,0], 3, [2,2,2], 3, [2,2,2,2,2,3]);
  });

  it('Caso con nums2 vacío', () => {
    testMerge([1,2,3], 3, [], 0, [1,2,3]);
  });

  it('Caso con nums1 vacío', () => {
    testMerge([0,0,0], 0, [1,2,3], 3, [1,2,3]);
  });
});

