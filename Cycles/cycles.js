let N = +prompt(`Дай мені перше число, від якого почнемо складання`);

while (N === `` || N === null || isNaN(N) || N === 0) {
  N = +prompt(`Ти маєш надати число`);
}

while (!(N % 1 === 0)) {
  N = +prompt(`Ваше число не є цілим, потрібно обрати ціле`);

}

alert(`Ваше перше число: ${N}`);
document.writeln(`Ваше перше число:`, N);

let M = +prompt(`Дай мені друге число, до якого будемо складувати`);

while (M === `` || M === null || isNaN(M) || M === 0) {
  M = +prompt(`Ти маєш надати число`);
}


do {
  M = +prompt(`Друге число, має бути більше за перше`);
}  while (M < N);




while (!(M % 1 === 0)) {
  M = +prompt(`Ваше число не є цілим, потрібно обрати ціле`);
}

alert(`Ваше друге число: ${M}`);
document.writeln(`Ваше друге число:`, M);

const pair = confirm(`Чи пропускати при обчисленні ПАРНІ числа?`);

if (pair == true) {
  alert(`Ми пропускаємо парні числа`);
} else { alert(`Ми не пропускаємо парні числа`);
}

let sum = 0;

if (pair == true)
for (let i=N; i<=M; i++) {   
      if (i % 2 !== 0) {
      sum = sum + i
    }
    
}

if (pair == false)
for (let i=N; i<=M; i++) {         
      sum = sum + i;
    
}

document.writeln(`Ваша сума:${sum}, почті без підказок`);
alert(`Сумма ${sum}, почті без підказок`);