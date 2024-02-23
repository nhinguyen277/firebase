
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { 

    getDatabase,
    ref,
    child,
    get,
    onValue,
   } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCUGY98s1AEW_7poDfi69YuZPAGvUgg01M",
    authDomain: "testfirebase-f77b7.firebaseapp.com",
    projectId: "testfirebase-f77b7",
    storageBucket: "testfirebase-f77b7.appspot.com",
    messagingSenderId: "904757805525",
    appId: "1:904757805525:web:eec985b8b2827a001afd5c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase();
  const messages = ref(database,"/messages");
  onValue(messages,(snapshot) =>{

    //console.log(snapshot);
    const ul= document.getElementById("messages");
    ul.replaceChildren();
    snapshot.forEach((childSnapshot)=>{
        const childKey= childSnapshot.key;
        const childData = childSnapshot.val();

        console.log(childKey);
        console.log(childData);

        const text = document.createTextNode(childData.message);
        const li = document.createElement("li");
        li.appendChild(text);
        ul.appendChild(li);
    });
  },{
    onlyOnce: false
  })