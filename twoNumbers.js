function twoNumbers(array, target) {
    let len = array.length;
    if (len < 2) return null;
    for (let i = 0; i < len - 1; i++) {
        let diff = target - array[i];
        console.log(diff)
        for (let j = i + 1; j < len; j++) {
            if (array[j] === diff) {
                console.log(array[j])
                return [i, j]
            }
        }
    }
}

function twoNumbersOptimize(array, target) {
    let len = array.length;
    if (len < 2) return null;
    let diffs = {}
    for (let i = 0; i < len; i++) {

        if (diffs[array[i]] !== undefined) {
            return [diffs[array[i]], i]
        }
        
        let ntf = target - array[i]
        diffs[ntf] = i
    }
    return;
}
//console.log(twoNumbersOptimize([3, 2, 4], 6))
console.log(twoNumbersOptimize([3, 2, 3], 6))
//console.log(twoNumbersOptimize([1, 3, 7, 9, 2], 11))