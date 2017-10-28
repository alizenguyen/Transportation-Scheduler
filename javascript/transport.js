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

//User Submits train information
//Train information gets stored and displayed onto webpage