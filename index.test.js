const { multiply, concatenatedOdds } = require("./index");

test("multiply 5 and 6 equals to 30", () => { 
    expect(multiply(5,6)) .toBe(30);
 });

 test("multiply 6 and 4 equals to 24", () => { 
    expect(multiply(6,4)) .toBe(24);
 });

 test("multiply 3 and 4 equals to 12", () => { 
    expect(multiply(3,4)).toBe(12);
 });

 
test('should concatOddNumbers from the arrays', () => {
    const arr1=[3,2,1];
    const arr2=[ 9,4,15,-1];
   const results = concatenatedOdds(arr1, arr2);
   expect(results).toEqual([-1,1,3,9,15]);
 });

 test('should concatOddNumbers from the arrays', () => {
    const arr1=[3,2,1];
    const arr2=[ 9,4,15,5,7];
   const results = concatenatedOdds(arr1, arr2);
   expect(results).toEqual([1, 3, 5,7,9,15]);
 });

 test('should concatOddNumbers from the arrays', () => {
    const arr1=[5,7,8,11];
    const arr2=[11,4,15,5,7];
   const results = concatenatedOdds(arr1, arr2);
   expect(results).toEqual([1, 3, 5,7,9,15]);
 });


 