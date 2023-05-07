//  TASK 1


// function leapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//   }
//   var typeYear = prompt('enter year'); 
//     console.log(leapYear(typeYear));

// second logic using prompt 

function isLeapYear() {
  const currentYear = new Date().getFullYear();
  if (currentYear % 4 !== 0) {
    return false;
  } else if (currentYear % 100 !== 0) {
    return true;
  } else if (currentYear % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}
if (isLeapYear()) {
  console.log("The current year is a leap year!");
} else {
  console.log("The current year is not a leap year.");
}

//  TASK 2 

function findLeapYears(startYear, endYear) {
  let leapYears = [];

  for (let year = startYear; year <= endYear; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      leapYears.push(year);
    }
  }

  return leapYears;
}
const leapYears = findLeapYears(2023, 2032);
console.log(leapYears);

    //  TASK 3

    function generateOTP() {
      // Set the length of the OTP
      const otpLength = 6;
      let otp = "";
      for (let i = 0; i < otpLength; i++) {
        otp += Math.floor(Math.random() * 10);
      }
    
      return otp;
    }
    const otp = generateOTP();
    console.log(otp); 

        //  TASK 4

        function toCapitalCase(str) {
          const words = str.split(" ");
          const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
          const capitalizedStr = capitalizedWords.join(" ");
        
          return capitalizedStr;
        }
        const str = "hello world";
        const capitalizedStr = toCapitalCase(str);
        console.log(capitalizedStr); // "Hello World"
                
        //  TASK 5

        function calculateAge(dateOfBirth) {
          const dob = new Date(dateOfBirth);
          const now = new Date();
          let age = now.getFullYear() - dob.getFullYear();
          const currentMonth = now.getMonth() + 1;
          const currentDay = now.getDate();
          const birthMonth = dob.getMonth() + 1;
          const birthDay = dob.getDate();
          if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age--;
          }
        
          return age;
        }
        const dateOfBirth = "1999-01-01"; 
        const age = calculateAge(dateOfBirth);
        console.log(age);
                