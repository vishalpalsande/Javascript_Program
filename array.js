const prompt = require('prompt-sync')();

let arr = [] ;

let n = Number(prompt("Enter no of elements: "));


console.log("Enter the element:");

for(let i=0;i<n;i++)
{
	arr[i] = Number(prompt());
}

for(let i=0;i<n;i++)
{
	console.log(arr[i]);
}

console.log("In list format: ",arr);

