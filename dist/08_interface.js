"use strict";
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 12, n2: 42 }));
function multipleParams(nums) {
    return nums.n1 + nums.n2;
}
console.log(multipleParams({ n1: 23, n2: 54 }));
const somaNumbers = {
    n1: 5,
    n2: 5
};
console.log(multipleParams(somaNumbers));
