//Simple Alert

function CallAlert()
{
    alert("This is a simple alert!") ;
}




//Custom Alert with callbacks
function AdvCallAlert()
{
var buttonList = ["Yes", "No", "Cancel"] ;
var buttonListFunc = ["YesFunction()", "NoFunction()", "CancelFunction()"] ;
alert("Do you want to enable auto slideshow on desktop?", buttonList, buttonListFunc, "SlideShow Wallpaper", "../assets/img/favicon.ico") ;
}


function YesFunction(){
    //Do Something on yes button clicked
}
function NoFunction(){
     //Do Something on no button clicked
}
function CancelFunction(){
     //Do Something on cancel button clicked
}





