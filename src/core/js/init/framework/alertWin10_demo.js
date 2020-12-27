//Simple Alert

function CallAlert()
{
    alert("This is a simple alert!") ;
}




//Custom Alert with Callbacks

function AdvCallAlert()
{
var buttonList = ["Yes", "No", "Cancel"] ;
var buttonListFunc = ["YesFunction()", "NoFunction()", "CancelFunction()"] ;
alert("Click on the following buttons to call the corresponding methods.", buttonList, buttonListFunc, "Alert Box", "../../../img/favicon.ico") ;
}


function YesFunction(){
    document.getElementById("clickResult").innerHTML = "YesFunction" ;
}
function NoFunction(){
    document.getElementById("clickResult").innerHTML = "NoFunction" ;
}
function CancelFunction(){
    document.getElementById("clickResult").innerHTML = "CancelFunction" ;
}
