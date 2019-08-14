(function(){  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBnSIAvtsqVUneqyyNPUM9xsvv-pAZyBOs",
    authDomain: "test-f80d0.firebaseapp.com",
    databaseURL: "https://test-f80d0.firebaseio.com",
    projectId: "test-f80d0",
    storageBucket: "test-f80d0.appspot.com",
    messagingSenderId: "279349108302"
  };
  firebase.initializeApp(config);

    // get element
    const userEmail = document.getElementById('email_flied');
    const userPass = document.getElementById('password_flied');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignin = document.getElementById('btnSignin');
    const btnLogout = document.getElementById('btnLogout');
  
    // Add lofin event
    btnLogin&&btnLogin.addEventListener('click', e=>{
      // alert("reachedddd")
      e.preventDefault()
        // get email and pass 
        const email = userEmail.value;
        const pass = userPass.value;
        const auth = firebase.auth;
        // return(e)
        // logn in
      
  auth().signInWithEmailAndPassword(email, pass).then((user)=>{
    alert("Signin successful");
    console.log(user)
    if(!window.location.href.includes("index.html")){

      window.location.href = "index.html";
    }

  })
       .catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;

      if(errorCode =='auth/Wrong-password'){
          alert('invalid password');
      }else{
          alert('Error :'+ errorMessage )
      }

    });
});
// add event sign up
btnSignin&&btnSignin.addEventListener('click', e=>{
    // get email and pass 
    e.preventDefault()
    const email = userEmail.value;
    const pass = userPass.value;
    const auth = firebase.auth;

auth().createUserWithEmailAndPassword(email, pass).then((success)=>{
  // alert(success)
})
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    alert(error);
    // [END_EXCLUDE]
  });
});

btnLogout&&btnLogout.addEventListener('click', e => {
  e.preventDefault()
  firebase.auth().signOut();
    });
    // Add a realtime listener
    // alert("yess")
     firebase.auth().onAuthStateChanged(function(user){
      //  alert(user)
         if(user){
            //  console.log(user);
            btnLogout.classList.remove('hide');
            const user = firebase.auth().currentUser;
            email = user.email;
            alert('Email: '+ email);
            if(!window.location.href.includes("index.html")){

              window.href = "index.html";
            }
         }
         else{
            btnLogout.classList.add('hide'); 
          
         }
     });
}());