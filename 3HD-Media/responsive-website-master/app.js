
var firestore = firebase.firestore();

//dom elements

const submitBtn = document.querySelector("#submit");

// ERROR: you used the id of #userName, suppose to be: userFullName
let userName = document.querySelector("#userFullName");
let userMessage = document.querySelector("#userMessage");
let userEmail = document.querySelector("#userEmail");
let phoneNumber = document.querySelector("#phoneNumber");
let userCity = document.querySelector("#userCity");
let userOrganisation = document.querySelector("#userOrganisation");


document.getElementById("submit").addEventListener("click", function () {
  //submitBtn.addEventListener("click", function() {
  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;
  let userMessageInput = userMessage.value;
  let phoneNumberInput = phoneNumber.value;
  let userCityInput = userCity.value;
  let userOrganisationInput = userOrganisation.value;

  //Access Database
  // ERROR: db is not referenced to anything. You set it to firestore!
  firestore
    // ERROR: You didn't have a collection. Where would firebase send them!
    .collection("services")
    .doc()
    .set({
      name: userNameInput,
      email: userEmailInput,
      messege: userMessageInput,
      number: phoneNumberInput,
      city: userCityInput,
      organisation: userOrganisationInput
    })
    .then(function () {
      console.log("Data Saved");
    })
    .catch(function (error) {
      console.log(error);
    });
});