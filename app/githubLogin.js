import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const githubButton= document.querySelector("#githubLogin");

githubButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GithubAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");
    
    // Close the login modal
    // const modalInstance = bootstrap.Modal.getInstance(githubButton.closest('.modal'));
    // modalInstance.hide();
    

    // show welcome message
    showMessage("¡Bienvenido! " + credentials.user.displayName);
    setTimeout(()=> location.href="./index.html",1000);
  } catch (error) {
    console.log(error);
  }
});

