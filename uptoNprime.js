//	Upto n Prime number print

const prompt = require('prompt-sync')();

function primeNum(num)
{
	let cnt = 1;
	
	for(let i=2;i<=num;i++)
	{
		cnt = 1;	
		for(let j=1,k=(i/2); j<=k; j++,k--)
		{
			if((i%2 ==0 && i!=2) || (i%3 ==0 && i!=3)  || (i%5 ==0 && i!=5))
			{
				break;
			}
			
			if( i%j == 0 || i%k ==0 )
			{
				cnt++;
			}
		}
		
		if(cnt == 2)
		{
			console.log(i);
		}
	}
	
}


let num = Number(prompt());

primeNum(num);

		
