// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



//Current day is displayed when planner is opened
$("#currentDay").append(moment().format("dddd, MMMM Do YYYY"));

//Planner is loaded from local storage
var workday = {};
var loadPlanner = function () {

workday = JSON.parse(localStorage.getItem(savedtasks));
    if (!workday) {
        workday = {
          "9am": "",
          "10am": "",
          "11am": "",
          "12pm": "",
          "1pm": "",
          "2pm": "",
          "3pm": "",
          "4pm": "",
          "5pm": "",
        };
      }


}




//time blocks for standard business hours 9-5 pm


//time blocks are color-coded to indicate whether it is in the past, present or future
//use Moment.js?
const timeblock = Number(newHour.attr("id"));

      const blocktextArea = $('<textarea class="col-8 col-lg-10"></textarea>');

if (timeblock < hour) {
    textArea.addClass("past");
  } else if (timeblock === hour) {
    blocktextArea.addClass("present");
  } else {
    blocktextArea.addClass("future");
  }



//I can enter an event when I click a time block


//event is saved in local storage when save button is clicked
$(".saveBtn").click(function() {
    console.log($("#9am").val())
    console.log($(this))
    console.log(this)
   // localStorage.setItem("savedTasks", JSON.stringify($("#9am").val()));
}
) 







//Saved events remain on page when it is refreshed

    //Loads tasks saved in localStorage 
        //loadPlanner();