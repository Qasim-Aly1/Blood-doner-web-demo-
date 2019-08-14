// firebase Authentication
// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     // User is signed in.

//     document.getElementById("userDiv").style.display = "block";
//     // document.getElementById("login_div").style.display = "block";

//     var user = firebase.auth().currentUser;
//     if (user != null) {
//       var email_id = user.email;
//       document.getElementById("log_in").innerHTML = "wellcome now your part of our website and the User email address is: " + email_id;
//       window.location.href="sign-in.html";
//     }
//   } else {
//     // No user is signed in.

//     // document.getElementById("userDiv").style.display = "block";
//     // document.getElementById("login_div").style.display = "block";
//   }
// });
// // login form
// function login() {
//   var userEmail = document.getElementById("email_flied").value;
//   var userPass = document.getElementById("password_flied").value;

//   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//     if(errorCode === 'aut/wrong-password'){
//       alert("Wrong password");

//     }
//     else{
//     alert("Error: " + errorMessage);
//     }
//     console.log(error);
//     document.getElementById('btn1').disabled =false;
// });
// // end auth
// document.getElementById('btn1').disabled =true;
// //  logout form
// function logout() {
//   firebase.auth().signOut();
// };

// // hendle sign up button pree
// function handleSignUp() {
//   var email = document.getElementById('email_flied').value;
//   var password = document.getElementById('password_flied').value;
//   if (email.length < 4) {
//     alert('Please enter an email address.');
//     return;
//   }
//   if (password.length < 4) {
//     alert('Please enter a password.');
//     return;
//   }}
// // sign in

// firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // [START_EXCLUDE]
//   // if (errorCode == 'auth/weak-password') {
//   //   alert('The password is too weak.');
//   // }
//   //  else {
//   //   alert(errorMessage);
//   // }
//   console.log(error);

//   // [END_EXCLUDE]
// })}

var slideIndex;
var slides;
var  dots;
var  captionText;
function initGallery(){
  slideIndex =0;
  slideIndex = document.getElementsByClassName('imageHolder');
  slides = slideIndex;
  slides[slideIndex].style.opacity = 1;
  
  captionText =  document.querySelector("captionHolder .captionText");
  // captionText.innerText = slides[slideIndex].getElementsByClassName(".captionText").innerText;

  // captionText.innerText = slides[slideIndex].document.querySelector("captionText").innerText;
  alert("hhh")
};
// initGallery();


