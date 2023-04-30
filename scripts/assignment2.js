function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  var typeYear = prompt('enter year'); 
    console.log(leapYear(typeYear));