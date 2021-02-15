/*
	i/p:- 5
	o/p:- 
	1	    *
	2	   * *
	3	  * * *
	4	 * * * *
	5	* * * * *	
*/

const prompt = require('prompt-sync')();

function dimond(num)
{
	if(num==0)
		return;
	
	if(num<0)
	{
		num = -num;
	}
	
	let inc = num, dec = num, k = num;
	
	for(let i =1; i<=num; i++)
	{
		let str = i+"";
		k = dec;
		for(let j=1; j<=inc;j++)
		{	
			if(j == k)
			{
				str = str.concat("*");
				k = k+2;
			}
			else
			{
				str = str.concat(" ");
			}
		}
		inc = inc +1;
		dec = dec - 1;
		console.log(str);
	}

}

let num = Number(prompt("Enter number of rows: "));

dimond(num);



