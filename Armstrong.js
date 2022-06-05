//! Program to check an Armstrong number
let sum =0;
let number = prompt('Enter a three digit positive number');

let temp = number;
while(temp>0){


let rem = temp%10;

sum+= rem*rem*rem;
temp = parseInt(temp/10);
}
if(sum==number)
{
    console.log(`${number} is a Armstrong number`);
}

else
{
    console.log(`${number} is not a armstrong number`);
}