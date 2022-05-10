// Map

let arr = [1, 2, 3, 4, 5];

let mapRes = arr.map((item) => { return item + 3});

console.log('Map', mapRes);

let flterRes = arr.filter((item) => item > 3);
console.log('Filter', flterRes);

let reduceRes = arr.reduce((cur, acc) => cur + acc, 0);
console.log('Reduce!', reduceRes);




