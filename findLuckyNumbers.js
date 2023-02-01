// Write your code below this line.
// const array = Array(10) 
// 				.fill()
// 				.map(() => 10 * Math.random()); 

// console.log(array);

// const array = Array.from({ length: 10 }, () => Math.random() * 10);
// console.log(array);


const n = 5
  
const arr = [];
  
if (n == 0) {
    console.log(null)
}
  
let randomnumbers = new Set, ans;
  
while (randomnumbers.size < n) {
  randomnumbers.add(Math.floor(
        Math.random() * 10) + 1);
}
  
ans = [...randomnumbers];
  
console.log(ans)