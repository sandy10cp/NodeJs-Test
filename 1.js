
function test1(n) {
    let count = 0;
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 1; j <= (2 * n - 1); j++) {
            if (j >= n + 1 - i && j <= n - 1 + i) {
                (j % 2) == 0 ? s += 'X' : s += 'O'
            } else {
                s += " "
            }
        }
        console.log(s);
    }
}

test1(7);