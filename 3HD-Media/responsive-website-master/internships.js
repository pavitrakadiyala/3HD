
let formMessage = firebase.database().ref('internships');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#userFullName').value;
  let email = document.querySelector('#userEmail').value;
  let userCity = document.querySelector('#userCity').value;
  let phoneNumber = document.querySelector('#phoneNumber').value;
  let userAddress = document.querySelector('#userAddress').value;
  let date = document.querySelector('#date').value;
  let userCollege = document.querySelector('#userCollege').value;
  let userqualification = document.querySelector('#userqualification').value;
  let userspecialization = document.querySelector('#userspecialization').value;

  //send message values
  sendMessage(name, email, phoneNumber, userCity, userAddress, date,userCollege,userqualification,userspecialization );

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, phoneNumber, userCity, userAddress, date,userCollege,userqualification,userspecialization ) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    City: userCity,
    number: phoneNumber,
    address: userAddress,
    date: date,
    college: userCollege,
    qualification: userqualification,
    specialisation: userspecialization
  });
}