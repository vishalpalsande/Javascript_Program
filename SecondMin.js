const prompt = require('prompt-sync')();

function secondMinimum(arr,n)
{
	if(n==1)
	{
		return false;
	}
	
	let min1 = arr[0],min2 = arr[1];
	
	for(let i = 1 ; i < n; i++)
	{
		if(arr[i] < min1)
		{
			min2 = min1;
			min1 = arr[i];
		}
		else
		{
			if(arr[i] < min2)
			{
				min2 = arr[i];
			}
		}
	}
	
	if(min1 != min2)
	{
		return min2;
	}
	else
	{
		return false;
	}

}



let n = Number(prompt("Enter number of elements: "));

let arr = [];

for(let i=0;i<n;i++)
{
	arr[i] = Number(prompt());
}

if(secondMinimum(arr,n) == false )
{
	console.log("There is no second maximum value in array");
}
else
{
	console.log("Second Highest value is: ",secondMinimum(arr,n));
}








