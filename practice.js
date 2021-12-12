const firebaseConfig = {
    apiKey: "AIzaSyBOvmYjUTWCD3smzmRJRdisd9AsrrD9f7E",
    authDomain: "practice-kwitter-29646.firebaseapp.com",
    databaseURL: "https://practice-kwitter-29646-default-rtdb.firebaseio.com",
    projectId: "practice-kwitter-29646",
    storageBucket: "practice-kwitter-29646.appspot.com",
    messagingSenderId: "564557865865",
    appId: "1:564557865865:web:fc8e395479913f3b1f3758"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"
    });
}