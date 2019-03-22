console.log(showPrimes(20));

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (checkPrime(number)) console.log(number);
  }
}

//Reusable Check prime function
function checkPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}
