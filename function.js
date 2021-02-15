//Number is prime number or not

const prompt = require('prompt-sync')();

function primeNum(num)
{
	let cnt = 1;
	
	for(let i=1;i<=num/2;i++)
	{
		if(num % i ==0)
		{
			cnt++;
		}
	}
	
	if(cnt == 2)
	{
		return true;
	}
	else
	{
		return false;
	}
}


let num = Number(prompt());

console.log(primeNum(num));

		
