/**
 * 計算數字陣列的總和
 * @param numbers - 要計算總和的數字陣列
 * 
 * 範例:
 * 輸入: [1, 2, 3, 4, 5]
 * 輸出: 15
 * 
 * 輸入: [-1, -2, -3]
 * 輸出: -6
 * 
 * 輸入: []
 * 輸出: 0
 */
export function arraySum(numbers: number[]): number {
    // 在此實現函式
    // 做法1：
    // let total = 0
    // numbers.forEach(number => {
    //     total += number
    // });
    // return total;
    // 做法2：
    const initValue = 0;
    const countNum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,
        initValue,)
    return countNum;
}