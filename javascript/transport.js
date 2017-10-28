//Initialize Firebase
var config = {
    apiKey: "AIzaSyBezf79yaQQKYyC4Mz-wFCmtqccu_H4Acw",
    authDomain: "transportation-scheduler.firebaseapp.com",
    databaseURL: "https://transportation-scheduler.firebaseio.com",
    projectId: "transportation-scheduler",
    storageBucket: "",
    messagingSenderId: "245818533501"
};

firebase.initializeApp(config);

//Variables
var database = firebase.database();

//Train information gets stored and displayed onto webpage
    //Get 'snapshot' of stored data at initial load and subsequent value changes
    database.ref().on("value", function() {

    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code)
    });

//User Submits train information
    //Saves info into database