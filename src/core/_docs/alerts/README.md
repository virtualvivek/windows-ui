# Alerts

# Table of Contents

  * [Default](#alert-default)
  * [Advance](#alert-advance)

---



An alert box is often used if you want to make sure information comes through to the user. Note: The alert box takes the focus away from the current window, and forces the browser to read the message.

# Alert Default
<img src="img/alert_default.png" width="595" />

## Step 1. Defining alert

```js
function CallAlert()
 {
   alert("This is a simple alert!") ;
 }
```

## Step 2. Calling alert

```html
 <input type="button" value="Show Alert" onclick="CallAlert()"/>
```

---


# Alert Advance
<img src="img/alert_advance.png" width="595" />

## Step 1. Defining alert

```js
//alert("Message",buttonsList,buttonsFunctions,"Custom image");

function AdvCallAlert()
{
 var buttonList = ["Yes", "No", "Cancel"] ;
 var buttonListFunc = ["YesFunction()", "NoFunction()", "CancelFunction()"] ;

 alert("Click following buttons to call the corresponding methods.", buttonList, buttonListFunc, "Alert Box", "img/favicon.png") ;
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

## Step 2. Calling alert

```html
<input type="button" value="Show Alert" onclick="AdvCallAlert()" />  
<p>function called:</p><span id="clickResult"></span>
 
```






