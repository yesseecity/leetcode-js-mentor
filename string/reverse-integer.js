/**
 * @param {number} x
 * @return {number}
 */
reverse = function(x) {
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(2, 31) * -1;
  let digit = 0;
  let reverse = 0;
  let temp = x;

  while (temp !== 0) {
      
    // 個位數往前拋
    digit = temp % 10
    reverse = reverse * 10 + digit

    // 剩餘的降位數
    temp = Math.trunc(temp/10)
  }

  if (reverse > max || reverse < min) return 0;
  return reverse
};

console.log(reverse(1534236469))