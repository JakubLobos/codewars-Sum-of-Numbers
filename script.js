function getSum(a, b)
{
    const array = []
    if (b > a) for (let index = a; index <= b; index++) array.push(index);
    else for (let index = a; index >= b; index--) array.push(index); 
    return array.reduce((number, number2) => number + number2, 0);
}

console.log(getSum(3, 3))