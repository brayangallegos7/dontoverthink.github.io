import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");
    
    // Close the login modal
   /*  const modalInstance = bootstrap.Modal.getInstance(googleButton.closest('.modal'));
    modalInstance.hide(); */

    // show welcome message
    showMessage("¡Bienvenido! " + credentials.user.displayName);
    setTimeout(()=> location.href="./index.html",1500);

  } catch (error) {
    console.log(error);
  }
});