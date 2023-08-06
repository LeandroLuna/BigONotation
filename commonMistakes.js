// 0(n + n) = O(2n) is the same as O(n) because we drop the constants.
function twoLoops(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }

    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

// 0(n + m) because we don't know which one is bigger.
function twoInputs(n, m) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }

    for (let i = 0; i < m; i++) {
        console.log(i)
    }
}

// 0(n * m) because we have nested loops and we don't know which one is bigger.
function twoInputsMultiplied(n, m) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            console.log(i, j)
        }
    }
}