export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let arr = [];
  if ( start > end ) {
    for (let i = start; i > end ; i -= 1) {
      arr.push(i);
    }
  }
  if ( start < end) {
    for (let i = start ; i < end ; i += 1) {
      arr.push(i);
    }
  }
  return arr;
  throw new Error('Please delete this line and implement the function');
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let Addsum = 0;
  for(let i =0;i<numbers.length;i+=1)
  {
    Addsum += numbers[i];
  }
  return Addsum;

}
