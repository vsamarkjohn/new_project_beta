console.log('link to web mijn script');

function toonBericht(soortBericht, hetbericht, lokatie) {
toastr.options = {
    "closeButton": true,
    "debug": true,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "2500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  switch(lokatie) {
    case 'BL':
      toastr.options["positionClass"]="toast-bottom-left";
      break;
    case 'TL':
      toastr.options["positionClass"]="toast-top-left";
      break;
    case 'BR':
      toastr.options["positionClass"]="toast-bottom-right";
      break;
    case 'TR':
      toastr.options["positionClass"]="toast-top-right";
      break;
      default:
      toastr.options["positionClass"]="toast-top-left";
      break;
  }
//toonBericht opties
switch (soortBericht) {
    case "succes-msg":
        toastr['success'](hetbericht)
        break;
    case "info-msg":
        toastr['info'](hetbericht)
        break;
    case "fout-msg":
        toastr['error'](hetbericht)
        break;
    case "warning-msg":
        toastr['warning'](hetbericht)
        break;
    break;
    default:
        toastr.options.timeOut = 0;
        toastr['error']("Fout berichttype")
        break;
  };
  // toastr.options.timeOut = defaultTimeout;
// toonBericht code
};

function validatePassword()
{
var getHTMLPassword = document.querySelector("#defaultForm-password").value;
console.log(getHTMLPassword);
var getRepeatPassword = document.querySelector("#validateForm-password").value;
console.log(getRepeatPassword);
// var getHTMLPassword = 'Markjohn1!'; // test
// var getRepeatPassword = 'Markjohn1!'; // test
var letter = /[a-z]/;
var upper = /[A-Z]/;
var number = /[0-9]/;
var symbolsOnly = /[!@#$%^&*(()_+{}|:"<>?)]/;

if(getHTMLPassword.length < 6 || getHTMLPassword != getRepeatPassword || !letter.test(getHTMLPassword) || !number.test(getHTMLPassword) || !upper.test(getHTMLPassword) || !symbolsOnly.test(getHTMLPassword)) {
      if(getHTMLPassword.length<6){
      console.log("Please make sure password is longer than 6 characters.")
      return false;
      }
      if(getHTMLPassword != getRepeatPassword){
      console.log("Please make sure passwords match.");
      toastr.warning("Please make sure passwords match.");
      return false;
      }
      if(!letter.test(getHTMLPassword)){
      console.log("Please make sure password includes a lower case character.");
      toastr.warning("Please make sure password includes a lower case character.");
      return false;
      }
      if(!upper.test(getHTMLPassword)) {
      console.log("Please make sure password includes an upper case character.");
      toastr.warning("Please make sure password includes an upper case character.");
      return false;
      }
      if(!number.test(getHTMLPassword)){
      console.log("Please make sure Password Includes a Digit");
      toastr.warning("Please make sure Password Includes a Digit");
      return false;   
      } 
      if(!symbolsOnly.test(getHTMLPassword)){
      console.log("Please make sure Password Includes a Symbols");
      toastr.warning("Please make sure Password Includes a Symbols");
      return false; 
      }
}
  /*email test*/
var email = document.getElementById('orangeForm-email').value;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email)) {
     console.log('Please provide a valid email address');
     toastr.warning('Please provide a valid email address');
    form.email.focus;
     return false;
}

// var yourName = document.getElementById('orangeForm-name').value;
// console.log(yourName);
// var filter2 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9\s]{2,4})+$/;
//   if (!filter2.test(yourName)) {
//      console.log('Please provide your name');
//      toastr.warning('Please provide your name');
//     // form.email.focus;
//      return false;
// }
return toastr.success("Signup Successful");
}



// DebugOption
var debugOption = true;
function setDebug(onOrOff) {
    toastr["success"]("Functie setDebug gestart.");
    let myElements = document.querySelector(".debugElement");
    if (debugOption) {
        myElements.setAttribute('style', 'display: flex !important');
    }
    else {
        myElements.setAttribute('style', 'display: none !important');
    }
}

function switchDebug() {
    debugOption = !debugOption;
    setDebug(debugOption);
}


//Validate Password

// function toonBericht(typeBericht){
//     var defaultTimeout = 5000;
//     switch (typeBericht) {
//         case "info-knop" :
//             toastr.info('Info knop.');
//             break;
//         case 'warning-knop':
//             toastr.warning('Warning Knop.');
//             break;
//         case 'error-knop':
//             toastr.error('Error Knop.');
//             break;
//         case 'success-knop':
//             toastr.success ('Success Knop.');
//             break;
//         default:
//             toastr.infor ('Default message.');
//             break;
//         }    
// }
// toonBericht('warning-knop');

// toonBericht code