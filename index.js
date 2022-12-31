
//For [1,2,3] [2,3] it will yield [2,3]. On the other hand, for [1,2,3] [2,3,5] will return the same thing.
const intersection = (a, b) =>  a.filter(x => b.includes(x));

//For [1,2,3] [2,3] it will yield [1]. On the other hand, for [1,2,3] [2,3,5] will return the same thing.
const difference = (a, b) => a.filter(x => !b.includes(x));

//This way, you will get an array containing all the elements of a that are not in b and vice-versa
const symmetricDifference = (a, b) => a.filter(x => !b.includes(x)).concat(b.filter(x => !a.includes(x)));

const a1 = ['a', 'b', 'e'];
const a2 = ['a', 'b', 'c', 'd'];

console.log(intersection(a1, a2)) //[ 'a', 'b' ]
console.log(intersection(a2, a1)) //[ 'a', 'b' ]

console.log(difference(a1, a2)) //[ 'e' ]
console.log(difference(a2, a1)) //[ 'c', 'd' ]

console.log(symmetricDifference(a1, a2)) //[ 'e', 'c', 'd' ]