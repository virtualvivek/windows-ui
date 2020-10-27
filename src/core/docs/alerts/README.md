# Alerts

# Table of Contents

  * [Default](#loaderbar)
  * [Advance](#loaderbusy)

---



An alert box is often used if you want to make sure information comes through to the user. Note: The alert box takes the focus away from the current window, and forces the browser to read the message.

# Alert Default
<img src="img/alert_default.png" width="550" />

## Defining alert

```js
function CallAlert()
 {
   alert("This is a simple alert!") ;
 }
```

## Calling alert

```html
 <input type="button" value="Show Alert" onclick="CallAlert()"/>
```

---


# Alert Advance
<img src="img/alert_advance.png" width="550" />

## Defining alert

```js
//alert("Message",buttonsList,buttonsFunctions,"Custom image");

function AdvCallAlert()
{
 var buttonList = ["Yes", "No", "Cancel"] ;
 var buttonListFunc = ["YesFunction()", "NoFunction()", "CancelFunction()"] ;

 alert("Click on the following buttons to call the corresponding methods.", buttonList, buttonListFunc, "Alert Box", "../../img/favicon.ico") ;
}


function YesFunction(){
    document.getElementById('clickResult').innerHTML = "YesFunction" ;
}
function NoFunction(){
    document.getElementById('clickResult').innerHTML = "NoFunction" ;
}
function CancelFunction(){
    document.getElementById('clickResult').innerHTML = "CancelFunction" ;
}

```

## Calling alert

```html
 <input type="button" value="Show Alert" onclick="AdvCallAlert()" /><br>
 <span class="app-label">Function Called :</span><span class="app-label" id="clickResult"></span>
```






