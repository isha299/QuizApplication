// auth.js
const firebaseConfig = {
  apiKey: "AIzaSyDW3X2qJ0zG4mrzP4fyNZVkn1wFoH7Wkss",
  authDomain: "quiz-application-9878e.firebaseapp.com",
  projectId: "quiz-application-9878e",
  storageBucket: "quiz-application-9878e.firebasestorage.app",
  messagingSenderId: "253371098424",
  appId: "1:253371098424:web:68bdca69c92a74c396cdcd"
};
// Firebase configuration - replace with your Firebase project's configuration
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Create account (sign-up) function
  function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Create user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        alert("created");
        // console.log('User created:', user);
        // Redirect or show success message here
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.error('Error creating user:', errorCode, errorMessage);
        alert(errorMessage);
      });
  }
  
  // Log in function
  function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        alert("logged in");
        // console.log('User logged in:', user);
        // Redirect to another page or show success message here
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            window.location.href = "./second-page.html";
          }
        });
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.error('Error signing in:', errorCode, errorMessage);
        alert(errorMessage);
      });
  }