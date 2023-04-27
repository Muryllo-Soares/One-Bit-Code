let a = 0

let c = a || 42
console.log({a,c})

c = 0 ?? 42
console.log({c})

c = false ?? 42
console.log({c})