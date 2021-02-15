const prompt = require('prompt-sync')();

let str = String(prompt("Enter any string: "));

console.log(str);

for(let i=0;i<str.length;i++)
{
	console.log(str.charAt(i));
}
