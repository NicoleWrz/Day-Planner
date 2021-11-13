var today = moment();
$("#todays-date").text(today.format("dddd, MMM Do, YYYY"));

var hours = document.querySelectorAll(".hour")

for (var i = 0; i < hours.length; i++) {
    console.log(hours[i].textContent)
    var timeString = hours[i].textContent;
    var timeHours = moment(timeString, "hhA");
    today.isAfter(timeHours);
    console.log(today.isAfter(timeHours))
    //is same
    //is before
    //if statements
    //jquery add css to from div to textarea
}

//local storage

