import { describe, it, expect } from 'vitest'
import { twoSum } from './index.ts'

describe('twoSum', () => {
  it('should return [0,1] for [2,7,11,15], target=9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })

  it('should return [1,2] for [3,2,4], target=6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  })

  it('should return [0,1] for [3,3], target=6', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })

  it('should handle negative numbers', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2])
  })

  it('should handle duplicates and pick correct indices', () => {
    expect(twoSum([1, 5, 5, 2], 10)).toEqual([1, 2])
  })

  it('should return empty array when no solution (edge case)', () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([])
  })

  it('should handle large arrays efficiently (sanity)', () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i)
    // set a pair near the end
    const target = 19997 // 9998 + 9999
    const result = twoSum(arr, target)
    // result should be the indices of 9998 and 9999
    expect(result).toEqual([9998, 9999])
  })
})
