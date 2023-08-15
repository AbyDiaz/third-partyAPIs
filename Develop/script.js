// for the current day display 
var now = dayjs().format("MMMM DD, YYYY");
$('#currentDay').html(now);

var tasks = {}


// time block was clicked and wants to be edited
$(".time-txt").on("click", function() {
    var text = $(this)
    .text()
    .trim();
    // replacing ul with new text area
    var textInput = $("<textarea>")
    .addClass("textarea col-sm-9 p-3")
    .val(text);
    // auto focus new element 
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};




