// sorting arrays in both ascending and descending order
// string array sorting
let fruits = ["papaya","banana","goa","apple"]
console.log(fruits.sort())
console.log(fruits.reverse())


// number array sorting by bubble sort
var scores = [12,18,14,21,11]
console.log(scores.sort((a,b)=> a-b))
console.log(scores.sort((a,b)=> b-a))

for(let i=0;i<scores.length;i++)
    {
        console.log(scores[i])
    }