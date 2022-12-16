function positiveSum(arr) {
    if (arr.length === 0) return 0
    return arr.reduce((pr, cu) => {
        console.log(pr + ' ' + cu)
        if (cu > 0) {
            return pr + cu
        }
        return pr
    }, 0)

}

// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript