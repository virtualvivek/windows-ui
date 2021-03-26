/*
MIT License

Copyright (c) 2020 Vivek Verma
https://github.com/virtualvivek/Windows10-framework

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


// --------------------------------------------    WIN Tab Layout    -----------------------------------------------------------

( function( window ) {
	
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function WINTabs( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	WINTabs.prototype.options = {
		start : 0
	};

	WINTabs.prototype._init = function() {
		// tabs elems
		this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
		// content items
		this.items = [].slice.call( this.el.querySelectorAll( '.app-content-wrap > section' ) );
		// current index
		this.current = -1;   
		// show current content item
		this._show();
		// init events
		this._initEvents();
	};

	WINTabs.prototype._initEvents = function() {
		var self = this;
		this.tabs.forEach( function( tab, idx ) {
			tab.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				self._show( idx );
			} );
		} );
	};

	WINTabs.prototype._show = function( idx ) {
		if( this.current >= 0 ) {
			this.tabs[ this.current ].className = this.items[ this.current ].className = '';
		}
		// change current
		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
		this.tabs[ this.current ].className = 'tab-current';
		this.items[ this.current ].className = 'content-current';
        
        

        // This function is to scrolls current active tab to viewport -------[[[[ Navigation Mobile ]]]]---------
        jQuery.fn.scrollCenter = function(elem, speed) {
          jQuery(this).animate({
            scrollLeft: jQuery(this).scrollLeft() - jQuery(this).offset().left + jQuery(elem).offset().left-80 //80 for more left padding
          }, speed == undefined ? 1000 : speed);
          return this;
        };
        $("nav").scrollCenter(".tab-current", 300);
       
	};

	// add to global namespace
	window.WINTabs = WINTabs;

})( window );

//Another Function  -------------------
(function() {

        [].slice.call( document.querySelectorAll( '.app-container' ) ).forEach( function( el ) {
            new WINTabs( el );
        });

})();








// --------------------------------------------    WIN Tab Layout Toggle Config  -----------------------------------------------------------

 $("#app-nav-toggle").click(function(e) {
        e.preventDefault();
        $("#app-nav-wrap").toggleClass("toggled");
        
        //adding margin-left property to change on toogle tabBar
        if($("#app-nav-wrap").hasClass("toggled"))
            {  
              $(".app-section-container").css("padding-left", "75px");
              $(".app-section-container.has-padding").css("padding-left", "105px");
            }
        if(!$("#app-nav-wrap").hasClass("toggled"))
            {
              $(".app-section-container").css("padding-left", ""); 
            }
    });
//Appending <br> to make some space from top when fixed title is there --
jQuery("<br><br><br><br>").insertAfter("h1.fixed");










// --------------------------------------------    Day Night Switch Config  -----------------------------------------------------------

function setDarkMode() {
            
        $('head').append('<style>input[type="date"]::-webkit-calendar-picker-indicator{filter:invert(1);}</style>');
        $('meta[name="theme-color"]').remove();
        $('head').append('<meta name="theme-color" content="#403E41" />');
        document.documentElement.style.setProperty('--color_light_bg','#111');
        document.documentElement.style.setProperty('--color_dark_text','#FFF');
        document.documentElement.style.setProperty('--color_nav','#403E41');
        document.documentElement.style.setProperty('--color_light_grey','#444');
        document.documentElement.style.setProperty('--color_link_bg_hover','#555');
        document.documentElement.style.setProperty('--color_link_bg_active','#222');
        document.documentElement.style.setProperty('--color_button','#555555');
        document.documentElement.style.setProperty('--color_button_hover','#999');
        document.documentElement.style.setProperty('--color_button_active','#222');
        document.documentElement.style.setProperty('--color_button_active_border','#EEE');
        document.documentElement.style.setProperty('--color_primary_light','#FFF');    
}

function setLightMode() {
            
        $('head').append('<style>input[type="date"]::-webkit-calendar-picker-indicator{filter:none;}</style>');
        $('meta[name="theme-color"]').remove();
        $('head').append('<meta name="theme-color" content="#EEE" />');
        document.documentElement.style.setProperty('--color_light_bg','#FFF');
        document.documentElement.style.setProperty('--color_dark_text','#222');
        document.documentElement.style.setProperty('--color_nav','#EEE');
        document.documentElement.style.setProperty('--color_light_grey','#EEE');
        document.documentElement.style.setProperty('--color_link_bg_hover','#CFCFCF');
        document.documentElement.style.setProperty('--color_link_bg_active','#B8B8B8');
        document.documentElement.style.setProperty('--color_button','#D9D9D9');
        document.documentElement.style.setProperty('--color_button_hover','#666');
        document.documentElement.style.setProperty('--color_button_active','#999');
        document.documentElement.style.setProperty('--color_button_active_border','#888');
        document.documentElement.style.setProperty('--color_primary_light','var(--PrimaryColor)');   
}




// --------------------------------------------    Show Day Night Switch  -----------------------------------------------------------

if(ShowDarkModeSwitch===true){
    let DMSwicth= '<label class="app-switch"><input id="DayNightSwitch" type="checkbox" autocomplete="off"/><div data-off="Day" data-on="Night"></div></label>';  
        jQuery(DMSwicth).insertAfter('#app-nav-toggle');
        jQuery(DMSwicth).insertAfter('#index-switch');
}

$("#DayNightSwitch").on('change', function() {
    
    if ($('#DayNightSwitch').prop("checked")) {   
        setDarkMode();  
        localStorage.setItem("isNight",true); //Setting DayNight Mode info to storage
    }
    else {   
        
        $("body").css('transition', '');
        $(".app-container nav").css('transition', '');
        setLightMode();
        localStorage.setItem("isNight",false); //Setting DayNight Mode info to storage
    }
    
});




// -----------------------------------------   Checking Dark Mode is Activated on App Mount    -----------------------------

if(NightMode===true || localStorage.getItem("isNight")=='true'){
    $("body").css('transition', 'none');
    $(".app-container nav").css('transition', 'none');
    setDarkMode();
    $('#DayNightSwitch').prop('checked', true);
}


//  -----------------------------------------   Setting Dark Mode from System State    -----------------------------

if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    $("body").css('transition', 'none');
    $(".app-container nav").css('transition', 'none');
    setDarkMode();
    $('#DayNightSwitch').prop('checked', true);    
}

//  -----------------------------------------   Follow System Theme State    -----------------------------

if(FollowSystemTheme) {
    

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
    if(newColorScheme === "dark") {
        $("body").css('transition', 'none');
        $(".app-container nav").css('transition', 'none');
        setDarkMode();
        $('#DayNightSwitch').prop('checked', true);   
    }
    else {
        $("body").css('transition', '');
        $(".app-container nav").css('transition', '');
        setLightMode();
    }
});
    
}









// --------------------------------------------    WIN InputPassword    -----------------------------------------------------------

jQuery('<button class="unmask" type="button"></button>').insertAfter('.app-input-password');

$('.unmask').on('click', function(){
  
  if($(this).prev('input').attr('type') == 'password')
    changeType($(this).prev('input'), 'text');
  
  else
    changeType($(this).prev('input'), 'password');
  
  return false;
});


function changeType(x, type) {
    if(x.prop('type') == type)
        return x; //That was easy.
    try {
        return x.prop('type', type); //Stupid IE security will not allow this
    } catch(e) {
        //Try re-creating the element
        //jQuery has no html() method for the element, so we have to put into a div first
        var html = $("<div>").append(x.clone()).html();
        var regex = /type=(\")?([^\"\s]+)(\")?/; //matches type=text or type="text"
        //If no match, we add the type attribute to the end; otherwise, we replace
        var tmp = $(html.match(regex) == null ?
            html.replace(">", ' type="' + type + '">') :
            html.replace(regex, 'type="' + type + '"') );
        //Copy data from old element
        tmp.data('type', x.data('type') );
        var events = x.data('events');
        var cb = function(events) {
            return function() {
                //Bind all prior events
                for(i in events)
                {
                    var y = events[i];
                    for(j in y)
                        tmp.bind(i, y[j].handler);
                }
            }
        }(events);
        x.replaceWith(tmp);
        setTimeout(cb, 10); //Wait a bit to call function
        return tmp;
    }
}








// --------------------------------------------    WIN Color Alpha Primary    -----------------------------------------------------------

let alphaColor = window.getComputedStyle(document.documentElement).getPropertyValue('--PrimaryColor');
alphaColor = alphaColor.trim();
alphaColor = alphaColor+'9C';
document.documentElement.style.setProperty('--color_primary_alpha', alphaColor);


// ----------------------------------------------- API setStatusBarPrimary() -------------------------------------
function setStatusBarPrimary(){
    var style = getComputedStyle(document.body);
    var theColorIs = style.getPropertyValue('--PrimaryColor');
    
    var meta=document.createElement('meta');
    meta.name='theme-color';
    meta.setAttribute('content', theColorIs);
    document.getElementsByTagName('head')[0].appendChild(meta); 
}















// --------------------------------------------    WIN SliderBar    -----------------------------------------------------------


// First let's set the colors of our sliders
const settings={
  fill: 'var(--PrimaryColor)',
  background: '#999999'   
}

// First find all our sliders
const sliders = document.querySelectorAll('.app-range-slider');

Array.prototype.forEach.call(sliders,(slider)=>{
  slider.querySelector('input').addEventListener('input', (event)=>{
    // 1. apply our value to the span
    slider.querySelector('span').innerHTML = event.target.value;
    // 2. apply our fill to the input
    applyFill(event.target);
  });
  // Don't wait for the listener, apply it now!
  applyFill(slider.querySelector('input'));
});

// This function applies the fill to our sliders by using a linear gradient background
function applyFill(slider) {
  // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}









// ------------------------------ Defining Loader busy inner body ----------------------------------------------------------

let LoaderBusyBody = '<div class="w-ball-wrapper ball-1"><div class="w-ball"></div></div>'
         +'<div class="w-ball-wrapper ball-2"><div class="w-ball"></div></div>'
         +'<div class="w-ball-wrapper ball-3"><div class="w-ball"></div></div>'
         +'<div class="w-ball-wrapper ball-4"><div class="w-ball"></div></div>'
         +'<div class="w-ball-wrapper ball-5"><div class=" w-ball"></div></div>';








// ----------------------------------------------     WIN Loaders   ----------------------------------------------------------

$(".app-loader-busy").html(LoaderBusyBody);

$(".app-loader-bar").html('<div class="app-loaderBar" id="first"></div>'
                     +'<div class="app-loaderBar" id="second"></div>'
                     +'<div class="app-loaderBar" id="third"></div>'
                     +'<div class="app-loaderBar" id="fourth"></div>');

$(".app-progress-indeterminate").html('<div class="progress-bar"></div>');








// --------------------------------------------    Image Wrapper    -----------------------------------------------------------

$(".app-image.loadable").wrap('<div class=app-image-wrapper></div>');
jQuery('<div class="app-loader-busy light">'+LoaderBusyBody).insertAfter('.app-image.loadable');











// --------------------------------------------    WIN InputQuantity    -----------------------------------------------------------

jQuery('<button class="quantity-button quantity-down">-</button>').insertBefore('.app-quantity input');
jQuery('<button class="quantity-button quantity-up">+</button>').insertAfter('.app-quantity input');


    jQuery('.app-quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });









// --------------------------------------------    WIN BottomSheet    -----------------------------------------------------------

$('.app-bottomsheet-toggle').on('click', function(e) {
  e.preventDefault();
    let modalID = $(this).attr("data-id");
  $('#'+modalID).toggleClass('is-visible');
});














// ----------------------------------------    WIN SearchBar With Suggestions  -----------------------------------------------

function app_register_auto_search(search_id ,selectId) {
    $( search_id ).each(function (i, select) {
        if (!$(this).next().hasClass('searchAuto-select')) {
            $(this).after('<div class="searchAuto-select wide open' + '" tabindex="0" id="'+ selectId +'"><div class="list"><ul></ul></div></div>');
            var searchAuto = $(this).next();
            var options = $(select).find('option');
            var selected = $(this).find('option:selected');
            
            
            if(BlurEnabled===true){ 
                 $(".list ul").css('backdrop-filter', 'blur(30px)');
                 $(".list ul").css('background', 'transparent');
            }
            
            
            options.each(function (j, o) {
                var display = $(o).data('display-text') || '';
                searchAuto.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-display-text="' + display + '">' +  '<a href="'+ $(o).val() +'">'+$(o).text()+'</a></li>');
            });
        }
    });

$('#'+selectId+' ul').before('<div class="app-search-box"><input id="'+ selectId+'s' +'" autocomplete="off" onkeyup="filter(`#'+ selectId+'s'+ '`,`'+selectId +'`)" class="app-input-text app-input-search" type="search" placeholder="Search here.."></div>');
     
        //code to hide >li childs on preloading view
        $('#'+selectId+' ul > li').hide();
         
}

function filter(searchBoxid,selectId){
    var valThis = $(searchBoxid).val();
    $('#'+selectId+' ul > li').each(function(){
     var text = $(this).text();
        (text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show() : $(this).hide(); 
        
        //code to hide >li childs when no text in search
        if ($(searchBoxid).val()==0){
            $('#'+selectId+' ul > li').hide();
        }
   });
};













// --------------------------------------------    Searchable List Layout    -----------------------------------------------------------

function searchBar() {
  $('input[type="search"]').on('keyup', function() {
  let searchString = $(this).val();
  $(".app-list li").each(function(index, value) {
        
    currentName = $(this).find(".app-list-title").text(); 
    if( currentName.toUpperCase().indexOf(searchString.toUpperCase()) > -1) {
      $(value).show( "fast" );
    } else {
      $(value).hide( "fast" );
    }
  });
});
};

searchBar();








// ------------------------------------------   SELECT DropDown    ----------------------------------------------

$('select.dropdown').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('app-select-hidden'); 
    $this.wrap('<div class="select-area"></div>');
    $this.after('<div class="app-select-styled"></div>');

    var $styledSelect = $this.next('div.app-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'app-select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.app-select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.app-select-options').hide();
        });
        $(this).toggleClass('active').next('ul.app-select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});













// ---------------------------------------------    WIN Alert    ---------------------------------------------------------


// variables to hold the title of the alert and image url.
var ALERT_TITLE = null ;
var IMAGE_URL = null ;

//method called when no methods arguments are called
function doNothing()
{
    window.status = "Do Nothing function called"  ;
}

// removes the custom alert from the DOM
function removeCustomAlert() {
  document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

function createCustomAlert(alertText, buttonsNames, buttonCallFuncs) {
  // shortcut reference to the document object
  d = document;

// if the modalContainer object already exists in the DOM, bail out.
  if(d.getElementById("modalContainer")) return;

  // create the modalContainer div as a child of the BODY element
  mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
  mObj.id = "modalContainer";

  // create the DIV that will be the alert 
  alertObj = mObj.appendChild(d.createElement("div"));
  alertObj.id = "alertBox";
    
    
    
     // Styling Config as Blur Enabled    
    
   if(BlurEnabled==true){
                $("#alertBox").css('background', 'var(--color_primary_alpha)');
                $("#alertBox").css('backdrop-filter', 'blur(30px)');
    }
    $("#alertBox").css('left', '24vw');    
    

  // MSIE doesnt treat position:fixed correctly, so this compensates for positioning the alert
  if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
  

	headerContainer = alertObj.appendChild(d.createElement("div"));
	headerContainer.id = "headerContainer" ;

  // create an H1 element as the title bar
  h1 = headerContainer.appendChild(d.createElement("h1"));
  h1.appendChild(d.createTextNode(ALERT_TITLE));

    bodyCont = alertObj.appendChild(d.createElement("div"));
	bodyCont.id = "bodyContainer" ;
	
  // create a paragraph element to contain the txt argument
  msgCon = d.createElement("div") ;
  msgCon.id = "msgconobj" ;
  msg = bodyCont.appendChild(msgCon);
  msg.innerHTML = alertText;
  
  btnDiva = bodyCont.appendChild(d.createElement("div"));
  btnDiva.id = "btnDiv";
  btnDiva.align= "center" ;

	for(var count=0; count < buttonsNames.length; count++)
	{
		btn = btnDiva.appendChild(d.createElement("a"));
		btn.id = buttonsNames[count];
		btn.setAttribute("class", "alertButtons");
		btn.appendChild(d.createTextNode(buttonsNames[count]));
		functionName = buttonCallFuncs[count] ;
		btn.href = "javascript:" + functionName + ";removeCustomAlert();" ;
        if(count === 0) btn.focus();
	}
	
	d.onkeyup=function(e){
		var e=window.event || e
		var keyunicode=e.keyCode? e.keyCode : e.charCode ;
		if(keyunicode === 27) removeCustomAlert() ;	
	}
    
    
    // Styling Config as for Blur Enabled    
    
    if(BlurEnabled==true){
        $("#headerContainer").css('background', 'transparent');
        $("#bodyContainer").css('background', 'transparent');
    }
  
    
}

// over-ride the alert method only if this a newer browser.
// Older browser will see standard alerts
// ARGS: 
// alertText - Text to be show in the alert box (not null)
// buttonsNames - Array of Buttons labels to be shown in the Alert Box (accepts null).
// buttonCallFuncs - Array of Function names to be called when the corresponding buttons are clicked  (accepts null).
// imageURL - URL for the image to be shown insode the alert box (accepts null).
// Eg: 
//		var buttonList = ["Yes", "No", "Cancel"] ;
//		var buttonListFunc = ["YesFunction()", "NoFunction()", "CancelFunction()"] ;
//		alert("Click on the following buttons to call the corresponding methods.", buttonList, buttonListFunc, "Alert Box", "images/alert.png") ;


if(document.getElementById) {
  window.alert = function(alertText, buttonsNames, buttonCallFuncs, alertBoxTitle, imageURL) {
      if(alertText)
	  {
		 if(buttonsNames==null && buttonCallFuncs==null )
		  {			 
			  buttonsNames = ["OK"] ;
			  buttonCallFuncs = ["doNothing()"] ;
		  }	
		  if(buttonsNames==null || buttonCallFuncs==null) {
		  window.status = "Button names length and Functions does not match."  ;
		  return false;
		  }
		  else if(buttonsNames.length != buttonCallFuncs.length) {
		  window.status = "Button names length and Functions does not match."  ;
  		return false;
		  }
	  }
	  else 
	  {
		  window.status = "Enter Proper Alert Message"  ;
		  return false ;
	  }
	  
	if( alertBoxTitle == null )
		{ALERT_TITLE = "Alert!";}
	else
		{ALERT_TITLE = alertBoxTitle ;}
		
	if(imageURL == null)
		{IMAGE_URL = "src/core/img/anim_avatar.jpeg" ;}
	else
		{IMAGE_URL = imageURL ;}

createCustomAlert(alertText, buttonsNames, buttonCallFuncs, imageURL);
	
    }
}
















// --------------------------------------------    WIN Blurr App Config  -----------------------------------------------------------

if(BlurEnabled==true){
    
    $("h1.fixed").css('backdrop-filter','blur(30px)');
    $("h1.fixed").css('background','transparent');
 
//    $(".app-bottomsheet > div").css('background','var(--color_primary_alpha)');
//    $(".app-bottomsheet > div").css('backdrop-filter','blur(30px)');
    
    $(".searchAuto-select.list.ul").css('backdrop-filter','blur(30px)');
    $(".searchAuto-select.list ul").css('background','transparent');
    
}


