//Initialize Firebase
var config = {
    apiKey: "AIzaSyBezf79yaQQKYyC4Mz-wFCmtqccu_H4Acw",
    authDomain: "transportation-scheduler.firebaseapp.com",
    databaseURL: "https://transportation-scheduler.firebaseio.com",
    projectId: "transportation-scheduler",
    storageBucket: "transportation-scheduler.appspot.com",
    messagingSenderId: "245818533501"
};

firebase.initializeApp(config);

//Variables
var database = firebase.database();

//Train information gets stored and displayed onto webpage
    //Get 'snapshot' of stored data at initial load and subsequent value changes
    database.ref().on("child_added", function(snapshot) {
        var transportation = snapshot.val().transportation;
    	var destination = snapshot.val().destination;
    	var firsttransport = snapshot.val().firsttransport;
        var frequency = snapshot.val().frequency;

        console.log(destination);
        console.log(firsttransport);
        
        /*var monthsWorked = moment().diff(moment(startDate), 'months')
    	console.log(monthsWorked);
    	var totalBilled = monthsWorked * monthlyRate;*/

    $("#tbody").append("<tr> <td>" + transportation + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + "TBD" + "</td><td>" + "TBD" + "</td>");

    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code)
    });

//User Submits train information
    $("#add-transport").on("click", function() {
        event.preventDefault();
        
        var transport = $("#transport-input").val().trim();
        var destination = $("#destination-input").val().trim();
        var time = $("#time-input").val().trim();
        var frequency = $("#frequency-input").val().trim();
        
        console.log(transport);

        //Adds info into database
        database.ref().push({
            transportation: transport,
            destination: destination,
            firsttransport: time,
            frequency: frequency,
        });

    });
    