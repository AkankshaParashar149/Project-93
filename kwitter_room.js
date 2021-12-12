// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAzb_DNuVTHAoq6mX8du7qQnkvAsAPbGCM",
      authDomain: "kwitter-c43a1.firebaseapp.com",
      projectId: "kwitter-c43a1",
      storageBucket: "kwitter-c43a1.appspot.com",
      messagingSenderId: "158607669657",
      appId: "1:158607669657:web:d985b114a4e5b3cc4c7b08"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
