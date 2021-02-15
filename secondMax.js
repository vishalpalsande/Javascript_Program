const prompt = require('prompt-sync')();

function secondMaximum(arr,n)
{
	if(n==1)
	{
		return false;
	}
	
	let max1 = arr[0],max2 = arr[1];
	
	for(let i = 1 ; i < n; i++)
	{
		if(arr[i] > max1)
		{
			max2 = max1;
			max1 = arr[i];
		}
		else
		{
			if(arr[i] > max2)
			{
				max2 = arr[i];
			}
		}
	}
	
	if(max1 != max2)
	{
		return max2;
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

if(secondMaximum(arr,n) == false )
{
	console.log("There is no second maximum value in array");
}
else
{
	console.log("Second Highest value is: ",secondMaximum(arr,n));
}
