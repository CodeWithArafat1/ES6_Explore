let a = {a: 10}, b={b: 30}


// let set = new Set([a,b])
// //? memory lik
// a = null

// console.log(set)

// let arr = [...set]


// console.log(arr[0])

let weakSet = new WeakSet([a,b])
a = null
console.log(weakSet.has(a)) //? check has value ase ki na