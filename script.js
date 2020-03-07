// get current day
var today = moment().format('dddd, MMMM Do');
$("#currentDay").append(today);

// save to local storage
var saveButton = $(this).attr("saveBtn");
var calendarInput = localStorage.getItem(".calendarInput");
    
$(".saveBtn").click(function(event){
    event.preventDefault();

    var calendarInput = $(".calendarInput").val();

    localStorage.setItem("calendarInput", calendarInput);
    calendarInput.innerHTML = $(".calendarInput").val();
});

// pull from local storage


     
// traverse the DOM and get the value of the form input 

// input the sibling of the button div. Button is the child of the button div


// // what's in red is just a file name green is the value 
  
//   localStorage.getItem("inputtedEvent")
// // THIS 
// });


// change colour based on time of day
// update these 

// var nineAM = document.getElementById('#9');
// var tenAM = document.getElementById('#10');
// var elevenAM = document.getElementById('#11');
// var twelvePM = document.getElementById('#12');
// var onePM = document.getElementById('#1');
// var twoPM = document.getElementById('#2');
// var threePM = document.getElementById('#3');
// var fourPM = document.getElementById('#4');
// var fivePM = document.getElementById('#5');

// function timeOfDate(){
// get current time using moment.js
console.log(moment().hour());

// to get time for each time block use .each for each time block you get the time by class getAttribute to get id split function 
// can't use number in JS use split method to split hour-9 to just 9. creates an array [0] hour [1] 9 
// THEN use if else statement 

    // var present = "";
    // var past = "";
    // var future = "";

    // if (nineAM == moment('HH')){
    //     document.body.className = "present";
    // }
    // else if (nineAM < moment('HH')){
    //     document.body.className = "past";
    // }
    // else{
    //     document.body.className = "future";
    // }
    // console.log(moment.js)
// };
// 	var d = moment();
// 	var n = d.getHours();
// 	if (n > 19 || n < 6)
// 	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
// 	  document.body.className = "past";
// 	else if (n > 16 && n < 19)
// 	  // If time is between 4PM – 7PM sunset theme to ‘body’
// 	  document.body.className = "present";
// 	else
// 	  // Else use ‘day’ theme
// 	  document.body.className = "future";
// });
