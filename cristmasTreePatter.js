/*
	i/p:- 7
	o/p:- 
      *
     * *
    * * *
   * * * *
  * * * * *
 * * * * * *
* * * * * * *
     * *
     * *
*/

const prompt = require('prompt-sync')();

function cristmasTree(num)
{
	if(num==0)
		return;
	
	if(num<0)
	{
		num = -num;
	}
	
	let inc = num, dec = num, k = num;
	
	for(let i =1; i<=(num*2)-(num/2)-1; i++)
	{
		let str = "";
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
		
		if(i >= num)
		{
			dec = num-1;
			inc = num+1;
		}
		else
		{
			inc = inc +1;
			dec = dec - 1;
		}
		console.log(str);
	}
}

let num = Number(prompt("Enter number of rows: "));

cristmasTree(num);



