$(document).ready(function() {
    var quizPrompt = $(".context");
    var beginButton = $(".begin-button");
    // remove elements from page to begin quiz
    beginButton.on("click", function (){
        beginButton.remove();
    });

});