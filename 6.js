function deepSum(arr) {
    var sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum);
}
deepSum([1, 2, 3, 4])