function add(x, y){
    return x + y
}
    console.log(add(2, 4))

function multiply(x, y){
    let z = 0

    for(let i = 0; i < y; i += 1){
        z = add(z, x)
    }
    return z
}
console.log(multiply(6, 4))


function power(x, n){
    let a = 1
for(let i = 0; i < n; i += 1){

    a = multiply(a, x )
}

return a
}

console.log(power(3, 4))


function factorial (n){
    let x = n
    for (let i = n-1; i > 0; i -= 1){
        x = multiply(x, i)
    }
    return x

}

console.log(factorial(5))

function fibonacci (n){
    let array =[0, 1]
    for(let i = 1; i < n; i += 1){
        array.push(add(array[i], array[i - 1]))
    }
return array[n - 1]

}
console.log(fibonacci(8))