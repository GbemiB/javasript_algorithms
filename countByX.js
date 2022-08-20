function countBy(x, n) {
    var z = [];
    for (let i = 1; i <= n * x; i++)
        if (i % x === 0) z.push(i)
    return z;
}
console.log(countBy(5, 10));