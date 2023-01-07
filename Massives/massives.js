const students = [`Олександр`, `Ігор`, `Олена`, `Іра`, `Олексій`, `Світлана`];
const themes = [`Диференційне рівняння`, `Теорія автоматів`, `Алгоритми і структури даних`];
const marks = [4,5,5,3,4,5];



function getPairs() {
  let pair1 = [students[0], students[2]];
  let pair2 = [students[1], students[3]];
  let pair3 = [students[4], students[5]];
  let result = [pair1, pair2, pair3];
return result;
}



function getThemes() {
  let pair1 = [students[0] + ` і ` + students[2], themes[0]];
  let pair2 = [students[1] + ` і ` + students[3], themes[1]];
  let pair3 = [students[4] + ` і ` + students[5], themes[2]];
  let result = [pair1, pair2, pair3];
return result;
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
  let pair1 = [students[0] + ` і ` + students[2], themes[0],Math.floor(Math.random() * (max - min) + min)];
  let pair2 = [students[1] + ` і ` + students[3], themes[1],Math.floor(Math.random() * (max - min) + min)];
  let pair3 = [students[4] + ` і ` + students[5], themes[2],Math.floor(Math.random() * (max - min) + min)];
  let result = [pair1, pair2, pair3];
return result;
}


console.log(getPairs());
console.log(getThemes());
console.log(getMarks());
console.log(getFinalMarks(1,5));
