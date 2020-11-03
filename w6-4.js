function recursion (a, n){
  if (n === a) {
     return "";
  } else if (n+1 > a){    
   	return a = a + " " + recursion (a + 1, n);
  } else if (n-1 < a){    
   	return a = a + " " + recursion (a - 1 , n);
  }
}

function foo (a, b) {
	console.log(recursion (a, b) + b);
}

const intervalId = setInterval (foo, 1000, 5 , 15);

//setTimeout (function (){
//  clearInterval(intervalId);
//}, 3000)