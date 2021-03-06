export function removeDuplicates(nums: number[]): number {
  return case2(nums)
};

// case1: 哈希表；时间复杂度：O(n)，空间复杂度：O(n)
// 执行用时：80 ms, 在所有 TypeScript 提交中击败了51 %的用户
// 内存消耗：44.5 MB, 在所有 TypeScript 提交中击败了44 %的用户
const case1 = (nums: number[]): number => {
  interface IHash {
    [key: number]: number;
  }
  const hash: IHash = {}
  let result = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = result
      result++
    }
  }

  Object.keys(hash).forEach(key => {
    nums[hash[Number(key)]] = Number(key)
  })

  return result
}

// case2: 双指针；时间复杂度：O(n)，空间复杂度：O(1)
// 执行用时：64 ms, 在所有 TypeScript 提交中击败了97.70 %的用户
// 内存消耗：44.3 MB, 在所有 TypeScript 提交中击败了84.42 %的用户
const case2 = (nums: number[]): number => {
  const len = nums.length;
  if (len === 1) {
    return 1;
  }
  let [left, right] = [1, 1];
  while (right < len) {
    if (nums[left - 1] !== nums[right]) {
      nums[left++] = nums[right];
    }
    right++;
  }
  return left;
}
