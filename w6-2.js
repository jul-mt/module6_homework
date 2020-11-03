function isSimple(num) {
  if (num > 1000) {
    return 'Число больше 1000, данные не венрны';
  } 
  if (num < 2) {
    return 'Наименьшее простое число = 2. Число не является простым.';
  }
    if (num === 2) {
    return 'Простое число';
  }

  let i = 2;
  const maxDivider = Math.sqrt(num);
  while (i <= maxDivider) {
    if (num % i === 0) {
      return 'Не является простым числом';
    }
    i++;
  }
  
  return 'Простое число';
}

console.log(isSimple(1001));
console.log(isSimple(7));
console.log(isSimple(1));
console.log(isSimple(6));
console.log(isSimple(2));