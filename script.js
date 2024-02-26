function stringChop(str, size) {
  // your code here
let arr=[];
  let i=0;
  let n=str.length;
  while(i<n){ 
    if(i+size<=n)arr.push(str.slice(i,i+size));
    else arr.push(str.slice(i));
    i+=size;
  }
  return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
