//	Upto n Prime number print

const prompt = require('prompt-sync')();

function primeNum(num)
{
	let cnt = 1;
	let k=2;
	
	let ret = '';
	
	for(let i=1;i<=num;)
	{
		cnt = 1;
		for(let j=1,s=k/2; j<=s;  j++,s--)
		{
			if( (k%2 == 0 && k!=2) || (k%3 == 0 && k!=3) || (k%5 == 0 && k!=5) )
			{
				break;
			}
			
			if(k%j == 0 || k%s ==0)
			{
				cnt++;
			}
		}
		
		if(cnt == 2 )
		{
			ret = ret+ k + ' ';
			i++;
		}	
		k++;
	}
	
	console.log(ret);
	return ret;
}

let num = Number(prompt());
console.log("After Return:",primeNum(num));

