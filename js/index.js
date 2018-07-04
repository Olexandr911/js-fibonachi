function fib(n) {
let fibPrev = 1, 
fibPrePrev = 1;
for (let f=3; f <=n; f++ )
{
let fibNext=fibPrev+fibPrePrev;
fibPrev = fibPrePrev;
fibPrePrev = fibNext; 
}
  return fibPrePrev;
}

alert( fib(3) ); 
alert( fib(6) ); 
alert( fib(12) ); 
