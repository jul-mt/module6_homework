let arr = [1, NaN, 0, "ааа", 2, null, 5];
let even = 0;
let odd = 0;
let zeros = 0;

function oddEvenZerosCounter() {
	for (let i = 0; i < arr.length; i++) { 
  if ((typeof(arr[i]) !== "number") || arr[i]+"" == "NaN") {
   } else {
      if (arr[i] === 0) { 
       zeros++;
      } else {
        if (arr[i]%2 === 0) {
          even++;
        } else {
          odd++;
       }
      } 
    }
  }
}

oddEvenZerosCounter();
  
if (zeros === 0) {
  console.log("Четных чисел: "+even+". Нечетных: "+odd);
} else {
  console.log("Четных чисел: "+even+". Нечетных: "+odd+". Нулей: "+zeros);
}  