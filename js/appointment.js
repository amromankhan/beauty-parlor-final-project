//Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyB7BSnUFR04hXMANCcxfluMuIoEeP1Pwzc",
    authDomain: "appointment-2fadf.firebaseapp.com",
    databaseURL: "https://appointment-2fadf-default-rtdb.firebaseio.com",
    projectId: "appointment-2fadf",
    storageBucket: "appointment-2fadf.appspot.com",
    messagingSenderId: "28250332125",
    appId: "1:28250332125:web:0b6ddc1b5c4d2d3ff6b434"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference Database
  var appointmentDB = firebase.database().ref('appointment');

  document.getElementById('appointment').addEventListener("submit", submitform);

  function submitform(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var phoneid = getElementVal('phoneid');
    var msgContent = getElementVal('msgContent');

    saveMessages(name, emailid, phoneid, msgContent);
    //enable alert
    document.querySelector('.alert').style.display = "block";

    //remove the alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 3000);

    //reset the form
    document.getElementById('appointment').reset();
    
}

const saveMessages = (name, emailid, phoneid, msgContent) => {
 var newAppointment = appointmentDB.push();

 newAppointment.set({
    name: name,
    emailid: emailid,
    phoneid: phoneid,
    msgContent: msgContent,
 });
};

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };    