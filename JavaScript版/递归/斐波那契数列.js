//斐波那契数列
// function fibonacii(n) {
//     if (n >= 0) {
//         if (n < 2) return n;
//         return fibonacii(n - 1) + fibonacii(n - 2);
//     }
//     return undefined;
// }

// console.log(fibonacii(1000));

//记忆化斐波那契数列,
//同时使用尾调用优化
"use strict"
function fibonaciiMemoization(n) {
    return fibonacii(0, 1, n);
}

function fibonacii(a, b, n) {
    const mem = [a, b];
    if (mem[n] != null) return mem[n];
    return mem[n] = fibonacii(b, a + b, n - 1);
}

console.log(fibonaciiMemoization(746));
