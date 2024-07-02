import { auth,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "./firebase.js";


const register = ()=>{
  const email = document.getElementById("floatingInput");
  const password = document.getElementById("floatingPassword");
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully Registered",
      showConfirmButton: false,
      timer: 2000
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This User Is Already Exist",
      footer: 'Please Enter New Credential'
    });
    // ..
  });
}

const registerBtn = document.getElementById("registerBtn")
registerBtn.addEventListener("click", register)


const login = ()=>{
  const lemail = document.getElementById("lfloatingInput");
  const lpassword = document.getElementById("lfloatingPassword");
  signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Login Successfully",
      showConfirmButton: false,
      timer: 2000
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Wrong Credential",
      footer: 'Please Enter Correct Credential'
    });    // ..
  });
}

const loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click", login)





