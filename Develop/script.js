// for the current day display 
var now = dayjs().format("MMMM DD, YYYY");
$('#currentDay').html(now);

var tasks = [];

// time block was clicked and wants to be edited
$(".time-txt").on("click",  function() {
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
    localStorage.setItem("tasks", JSON.stringify(tasks));
};



// editable field was unfocused 
$(".time-txt").on("blur", "textarea", function() {
    // get textarea current value/text
    var text = $(this)
    .val()
    .trim();

    // get status type and postion in list
    var status = $(this)
    .closest(".hour")
    .attr("id")
    // chaining with attr, which returns the id, so list- followed by the category
    .replace("num-", "");
    // onced chained .replace will remove list- from the txt which will give the category name

    // get tasks position in teh list of other li elements 
    var index = $(this)
    .closest(".time-txt")
    .index();

    // update tasks in array and re-scave to local storage
    tasks[status][index].text = text;

    saveTasks();

    
}); 


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




