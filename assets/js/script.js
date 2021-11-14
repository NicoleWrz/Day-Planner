$(init);

function init() {
  $("#todays-date").text(moment().format("dddd, MMMM Do YYYY"));
  colorBlocks();
  setInterval(colorBlocks, 60000);
  $(".time-block").each(function () {
    var blockId = $(this).attr("id");
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });
  $(".saveBtn").on("click", saveBlock);
}

function colorBlocks() {
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(moment().format("H"));
    $(this).removeClass("past present future");
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

function saveBlock(event) {
    var hourId = $(this).parent().attr("id");
    localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
  }