//配列の問題
const array = [2, 4, 7, 5, 4, 3, 8];
const newarray = array.filter( function( value, index, array ) {
  return array.indexOf(value) === index;
})
console.log(newarray);

//うるう年の問題
function LeapYear(year){
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear2020 = 2020;
if(LeapYear(checkYear2020)){
  console.log(checkYear2020 + '年はうるう年です。');
}else{
  console.log(checkYear2020 + '年はうるう年ではありません。');
}

let checkYear2021 = 2021;
if(LeapYear(checkYear2021)){
  console.log(checkYear2021 + '年はうるう年です。');
}else{
  console.log(checkYear2021 + '年はうるう年ではありません。');
}
