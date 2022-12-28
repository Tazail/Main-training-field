function getMaxDigit(num) {
  let newArr = num.toString().split(``).map(Number);
  let result = Math.max(...newArr);    
return result;
}
getMaxDigit(56821);
document.writeln(`Функція яка отримує найбілшу цифру з числа, приклад, "56821": ${getMaxDigit(56821)} <br \/>`); 




function countChars(str,inputChar) {
  let charCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === inputChar) {
        charCounter++;
    }      
  }
return charCounter;
}
countChars('абракадабра','б')
document.writeln(`Функція, яка рахує скільки разів певна буква повторюється в слові, приклад, "абракадабра, б": ${countChars('абракадабра','б')} <br \/>`); 



function capitalizeFirst(str) {
  let arr = str.split(` `);
  for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() +arr[i].toLowerCase().slice(1);
  }  
  let str2 = arr.join(` `);    
  return str2;    
}
capitalizeFirst(`ілларіон бРУТАЛЬНИЙ пЕлТрОу`);
document.writeln(`Функція, яка форматує ім'я, роблячи першу букву великою, приклад, "ілларіон бРУТАЛЬНИЙ пЕлТрОу": ${capitalizeFirst(`ілларіон бРУТАЛЬНИЙ пЕлТрОу`)} <br \/>`); 



function isPalyndrome(str) {
  let result = true;
  for(let i = 0; i < str.length; i++) {
  const leftChar = str[i];
  const rightChar = str[str.length - (i + 1)];
    if (leftChar !== rightChar) {
      return false;
    }
 }
 return result;  
}
isPalyndrome(`madam`);
document.writeln(`Функція, яка перевіряє, чи є слово паліндромом, приклад, "madam": ${isPalyndrome(`madam`)} <br \/>`);



function getRandomPassword(num = 8) {
  rawPass = Math.random();
  let a = 1;
  for (let i = 1; i < num; i++) {
    a = a * i * 10 / i;
  }
  result = Math.round(rawPass * a *10);
  return result;
}
getRandomPassword(7);
document.writeln(`Функція генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8, приклад, "7": ${getRandomPassword(7)} <br \/>`);

// ТЫ КОНЕЧНО ПРАВ, ЭТОТ СПОСОБ ГЕМОРРОЙНЫЙ. ТВОЙ ЧЕРЕЗ replaceAll - КУДА ЛУЧШЕ.

// function unsafeRedactName(str,inputChar) {
//   readyStr = text.replace(new RegExp(inputChar, g), ``);
//   return readyStr;
// }



function removeChars(str,inputChar) {  
  readyStr = str.replaceAll(inputChar, ``);
return readyStr;
}
removeChars(`fdfdfdfdfd`,`f`);
document.writeln(`Функція, яка видаляє всі букви з речення, приклад, "fdfdfdfdfd, f": ${removeChars(`fdfdfdfdfd`,`f`)} <br \/>`);
