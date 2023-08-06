// Big O: O(nˆ3)
// Explanation: The outer loop is O(n) and the inner loops are O(n) and O(n) so we multiply them to get O(nˆ2). The two loops are nested so we multiply them to get O(nˆ3).

function cubicFunc(num){
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            for(let k = 0; k < num; k++){
                console.log(i, j, k);
            }
        }
    }
}

cubicFunc(5);