function valuedivide(value) {
    const nums = []
    let sum = 0;
    while (value > 0) {
        sum = value % 10;
        nums.push(sum)
        value =Math.floor( value/ 10);
        

    }
    nums.reverse()
    return nums;

    


}
console.log(valuedivide(3444))