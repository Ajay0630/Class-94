function blah(){
    username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
        purpose : "adding user"
    });
}

const firebaseConfig = {
  apiKey: "AIzaSyCK9c8vaI-hqA_lowTvVes6eKEvxAhelqM",
  authDomain: "class-94-1043e.firebaseapp.com",
  databaseURL: "https://class-94-1043e-default-rtdb.firebaseio.com",
  projectId: "class-94-1043e",
  storageBucket: "class-94-1043e.appspot.com",
  messagingSenderId: "576609202",
  appId: "1:576609202:web:9051ae77f6b7b2596022ab"
};

firebase.initializeApp(firebaseConfig);