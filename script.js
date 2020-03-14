// get current day
var today = moment().format('dddd, MMMM Do');
$("#currentDay").append(today);

// save to local storage
window.onload = function(){

  var $saveButtons = $('.saveBtn'); 
  var calendarInput = $(".calendarInput")[0];  
  calendarInput.value =  localStorage.getItem("calendarInput"); 
}

// pull from local storage
$(".saveBtn").click(function(event){
    event.preventDefault();
    var calendarInput = $(".calendarInput").val();
    localStorage.setItem("calendarInput", calendarInput);  
    calendarInput.value = $(".calendarInput").val();
});

// change colour based on time of day
var calendarInputs = $('.hour');

let hours = [];
for(var i = 0; i < calendarInputs.length; i++){

    let $span = $(calendarInputs[i]).find('span');
    let number = Number($span.text().trim().split(':')[0]);
    let spanElement = $span[0];

    let $parent = $(calendarInputs[i]).parent();
    let inputNode = $parent.find('input')[0];
    if(i > 3){
      number += 12;
      hours.push({domNode:inputNode, hour: number});
    }
    else{
      hours.push({domNode:inputNode, hour: number});
    }
}

// get current time using moment.js

    hours.forEach( hourObj =>{

      var hourNumber = hourObj.hour; // 24 hour.
      var domNode = hourObj.domNode;
      var currentHour = moment().hour();

      if(hourNumber < currentHour){
          $(domNode).addClass('past');
      }
      else if(hourNumber == currentHour){
          $(domNode).addClass('present');
      }
      else{
          $(domNode).addClass('future');
      }
    })
