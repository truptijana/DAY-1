//! Program to check if its a prime no or not
const number = prompt(("Enter a positive number"))
let isPrime = true;


if(number === 1)
{
    console.log('1 is neither prime nor composite');
}

else if(number > 1)
{
    for(let i=2; i<number ;i++)
    if(number %i == 0){
        isPrime=false;
        break;
    }
}

if(isPrime){
    console.log(`${number} is a prime number`);
}
else
{
    console.log(`${number} is not a prime number`);
}