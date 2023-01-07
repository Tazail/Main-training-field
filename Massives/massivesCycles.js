const students = [`Олександр`, `Ігор`, `Олена`, `Іра`, `Олексій`, `Світлана`];
const themes = [`Диференційне рівняння`, `Теорія автоматів`, `Алгоритми і структури даних`];
const marks = [4,5,5,3,4,5];

function getPairs() {
let arr = new Array();
let arrFem = new Array();
let arrMale = new Array();
  for (i = 0; i < students.length; i++) {
      if (students[i][students[i].length - 1] === `а`) {
        arrFem.push(students[i]);
      } else {
        arrMale.push(students[i])
      }
    }
    for (i = 0; i < arrMale.length; i++) {
    arr[i] = [arrMale[i], arrFem[i]];
    }
return arr;
}


function getThemes() {
let arr = new Array();
let arrFem = new Array();
let arrMale = new Array();
  for (i = 0; i < students.length; i++) {
      if (students[i][students[i].length - 1] === `а`) {
        arrFem.push(students[i]);
      } else {
        arrMale.push(students[i])
      }
    }
    for (i = 0; i < arrMale.length; i++) {
    arr[i] = [arrMale[i] + ` і ` +  arrFem[i], themes[i]];
    }

return arr;
}



function getMarks() {
let arr = new Array(6);
  for (i = 0; i < students.length; i++) {
    arr[i] = [students[i], marks[i]];
      }
result = arr;
return result;
}



function getFinalMarks(min,max) {
let arr = new Array();
let arrFem = new Array();
let arrMale = new Array();
  for (i = 0; i < students.length; i++) {
      if (students[i][students[i].length - 1] === `а`) {
        arrFem.push(students[i]);
      } else {
        arrMale.push(students[i])
      }
    }
    for (i = 0; i < arrMale.length; i++) {
    arr[i] = [arrMale[i] + ` і ` +  arrFem[i], themes[i], Math.floor(Math.random() * (max - min) + min)];
    }

return arr;
}



console.log(getPairs());
console.log(getThemes());
console.log(getMarks());
console.log(getFinalMarks(1,5));