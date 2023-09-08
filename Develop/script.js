// for the current day display 
var now = dayjs().format("MMMM DD, YYYY");
$('#currentDay').html(now);

var tasks = [];

// time block was clicked and wants to be edited
$("ul").on("click",  function() {
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


    auditTask(textInput);

});


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};  

// save button clicked 
$(".saveBtn").on("click",  function() {
    //get task text from the textare in the same row
    var taskText = $(this)
    .closest(".hour")
    .siblings(".time-txt")
    .find("textarea")
    .val();

    var taskTime = $(this)
    .closest(".hour")
    .attr("id")
    //.replace("num-", "");

    saveTasks();


    console.log('save button clicked');


    if (taskText && taskTime) {
        // save in tasks array
        tasks.push ({
            text: taskText,
            time: taskTime
        });
        saveTasks();
    }
});

var auditTask = function (taskEl) {
    // get time from task element
    var date = $(taskEl)
    .closest('.hour');
    console.log(date);

    var time = dayjs().hour();
    console.log(time);
};


  

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {
            text: [],
            time: []
        };
    }
 
};

loadTasks();




