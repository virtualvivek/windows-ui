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
	};

	// add to global namespace
	window.WINTabs = WINTabs;

})( window );

//Another Function  -------------------
(function() {

        [].slice.call( document.querySelectorAll( '.app-tabs' ) ).forEach( function( el ) {
            new WINTabs( el );
        });

})();










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
   // make sure its as tall as it needs to be to overlay all the content on the page
  mObj.style.height = document.documentElement.scrollHeight + "px";

  // create the DIV that will be the alert 
  alertObj = mObj.appendChild(d.createElement("div"));
  alertObj.id = "alertBox";
    
    
    
     // Styling Config as for Win10 or Win8    
    
    if(AlertStyle=='Win10'){
    
        $("#alertBox").css('width', '55%'); 
        $("#alertBox").css('background', 'var(--alpha_c)');
        $("#alertBox").css('backdrop-filter', 'blur(30px)');
        
    }
    

  // MSIE doesnt treat position:fixed correctly, so this compensates for positioning the alert
  if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
  // center the alert box
  alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";

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
        if(count == 0) btn.focus();
	}
	
	d.onkeyup=function(e){
		var e=window.event || e
		var keyunicode=e.keyCode? e.keyCode : e.charCode ;
		if(keyunicode == 27) removeCustomAlert() ;	
	}
    
    
    // Styling Config as for Win10 or Win8    
    
    if(AlertStyle=='Win10'){

        $("#headerContainer").css('padding-left', '0');
        $("#bodyContainer").css('padding-left', '0');
        $("#bodyContainer").css('padding-right', '0');
        
    }
    
    if(BlurEnabled==true && AlertStyle=='Win10'){
    
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
		{IMAGE_URL = "images/info.png" ;}
	else
		{IMAGE_URL = imageURL ;}

createCustomAlert(alertText, buttonsNames, buttonCallFuncs, imageURL);
	
    }
}









// --------------------------------------------    WIN Color Accent    -----------------------------------------------------------

let alphaColor = window.getComputedStyle(document.documentElement).getPropertyValue('--AppColor');

alphaColor = alphaColor.trim();

alphaColor = alphaColor+'9C';

document.documentElement.style.setProperty('--alpha_c', alphaColor);


















// --------------------------------------------    WIN BottomSheet    -----------------------------------------------------------


;(function(window){

	var
		// Is Modernizr defined on the global scope
		Modernizr = typeof Modernizr !== "undefined" ? Modernizr : false,

		// Always expect both kinds of event
		buttonPressedEvent = 'touchstart click',

		// List of all animation/transition properties
		// with its animationEnd/transitionEnd event
		animationEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},

		transitionEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},

		Win = function() {
			this.init();
		};

	// Current version.
	Win.version = '1.0.0';

	// Initialization method
	Win.prototype.init = function() {
		this.buttonPressedEvent = buttonPressedEvent;

		//event trigger after animation/transition end.
		this.transitionEndEventName = Modernizr ? transitionEndEventNames[Modernizr.prefixed('transition')] : getTransitionEndEventNames();
		this.animationEndEventName  = Modernizr ? animationEndEventNames[Modernizr.prefixed('animation')] : getAnimationEndEventNames();
		this.transitionAnimationEndEvent = this.animationEndEventName + ' ' + this.transitionEndEventName;
	};

	Win.prototype.getViewportHeight = function() {

		var docElement = document.documentElement,
				client     = docElement['clientHeight'],
				inner      = window['innerHeight'];

		if( client < inner )
			return inner;
		else
			return client;
	};

	// Get all the properties for transition/animation end
	function getTransitionEndEventNames() {
		return _getEndEventNames( transitionEndEventNames );
	}

	function getAnimationEndEventNames() {
		return _getEndEventNames( animationEndEventNames );
	}

	function _getEndEventNames(obj) {
		var events = [];

		for ( var eventName in obj ) {
			events.push( obj[ eventName ] );
		}

		return events.join(' ');
	}

	// Creates a Win object.
	window.Win = new Win();

})(this);


;(function(window) {

	var Win = window.Win;

	var WinModal = function() {
		if ( !(this instanceof WinModal) ) {
			return new WinModal();
		}

		this.init();
	};

	WinModal.prototype.init = function() {
		this.$body               = $('body');
		this.$element            = null;
		this.$overlay            = null;
		this.isShown             = false;
		this.hasPerspective      = false;
		this.modalWin         = '';
		this.modalWinOut      = '';
		this.modalWinProvided = true;
		this.bindUIActions();
	};

	WinModal.prototype.bindUIActions = function() {
		$(document).on( Win.buttonPressedEvent,
										'.bottomsheet-modal-button',
										$.proxy(this.open, this));

		$(document).on( Win.buttonPressedEvent,
										'.bottomsheet-modal-close, [data-bottomsheet-dismiss="modal"]',
										$.proxy(this.close, this));

		var self = this;

		$(window).on( 'keyup', function( e ) {
			if ( e.keyCode === 27 ) self.close(e);
		});
	};

	WinModal.prototype.open = function( e ) {
		e.preventDefault();

		if ( this.isShown ) {
			return;
		}

		var $button = $(e.target),
				target  = $button.data('bottomsheet-target');

		this.$element = $('#'+target || '#bottomsheet-modal-wrap');
        
        //console.log(target);

		if ( !this.$element.length ) return;

		// Win Modal Type
		this.modalWin     = $button.data( 'bottomsheet-type' );
		this.modalWinOut  = $button.data( 'bottomsheet-out-type' );

		if ( $button.data( 'bottomsheet-needs-perspective' ) ) {
			this.$body.addClass( 'bottomsheet-perspective' );
			this.hasPerspective = true;
		}

		// check if the bottomsheet class is already added
		if ( this.$element.hasClass( this.modalWin ) || this.modalWin === undefined ) {
			this.showModal();
		} else {
			this.modalWinProvided = false;
			this.$element.addClass( this.modalWin );

			this.$element.on( Win.transitionAnimationEndEvent, $.proxy(function() {
				this.$element.off( Win.transitionAnimationEndEvent );
				this.showModal();
			}, this));
		}
	};

	WinModal.prototype.close = function( e ) {
		e.preventDefault();

		if ( !this.isShown ) {
			return;
		}

		this.$element.on( Win.transitionAnimationEndEvent, $.proxy(function () {
			this.$element.off( Win.transitionAnimationEndEvent );
			this.hideModal();
		}, this));

		this.$element.removeClass( 'bottomsheet-show' );
		this.isShown = false;

		if ( this.modalWinOut ) {
			this.$element.addClass( this.modalWinOut );
		}
	};

	WinModal.prototype.showModal = function() {
		this.addOverlay();
		this.$element.addClass( 'bottomsheet-show' );
		this.isShown = true;
	};

	WinModal.prototype.hideModal = function() {
		if ( this.modalWinOut ){
			this.$element.removeClass( this.modalWinOut );
			this.modalWinOut = '';
		}

		if ( this.hasPerspective ) {
			this.$body.removeClass( 'bottomsheet-perspective' );
			this.hasPerspective = false;
		}

		this.removeOverlay();
		this.$element.removeClass( this.modalWin );
		this.modalWin = '';
	}

	WinModal.prototype.addOverlay = function() {
		var atts = [];

		atts.push('class="bottomsheet-overlay bottomsheet-modal-overlay"');
		atts.push('id="bottomsheet-modal-overlay"');
		atts.push('data-bottomsheet-dismiss="modal"')

		this.$overlay = $('<div ' + atts.join(' ') + ' />').insertAfter( this.$element );
		this.$overlay[0].offsetWidth;
	};

	WinModal.prototype.removeOverlay = function() {
		this.$overlay.remove();
		this.$overlay = null;
	};

	window.Win.Modal = WinModal();

})(this);

















// --------------------------------------------    WIN SliderBar    -----------------------------------------------------------


// First let's set the colors of our sliders
const settings={
  fill: 'var(--AppColor)',
  background: '#999999'
}

// First find all our sliders
const sliders = document.querySelectorAll('.app-range-slider');

// Iterate through that list of sliders
// ... We can then access each of wthem by calling slider
Array.prototype.forEach.call(sliders,(slider)=>{
  // Look inside our slider for our input add an event listener
//   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
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
  // now we'll create a linear gradient that separates at the above point
  // Our background color will change here
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}
















//                                          ||  QJuery Depandent Code  ||


// --------------------------------------------    WIN InputPassword    -----------------------------------------------------------


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
        //Try re-creating the element (yep... this sucks)
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











// --------------------------------------------    WIN InputQuantity    -----------------------------------------------------------

jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
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










// ----------------------    WIN Busy Loaders And Line Progress Creating from js using search class name  --------------------------------


$(".app-busy-loader").html('<div class="w-ball-wrapper ball-1">'
                    +'<div class="w-ball"></div></div>'
                    +'<div class="w-ball-wrapper ball-2">'
                    +'<div class="w-ball"></div></div>'
                    +'<div class="w-ball-wrapper ball-3">'
                    +'<div class="w-ball"></div></div>'
                    +'<div class="w-ball-wrapper ball-4">'
                    +'<div class="w-ball"></div></div>'
                    +'<div class="w-ball-wrapper ball-5">'
                    +'<div class=" w-ball"></div></div>');


$(".app-loaderBar-medium").html('<div class="app-loaderBar" id="first"></div>'
                     +'<div class="app-loaderBar" id="second"></div>'
                     +'<div class="app-loaderBar" id="third"></div>'
                     +'<div class="app-loaderBar" id="fourth"></div>');








// --------------------------------------------    WIN Tab Layout Toggle Config  -----------------------------------------------------------


 $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#app-wrapper").toggleClass("toggled");
        
        //adding margin-left property to change on toogle tabBar
        if($("#app-wrapper").hasClass("toggled"))
            {
                $(".app-section-container").css('margin-left', '135px');
                $(".searchBarAuto-container").css('display',"none");
                $(".fixed").css('padding-left',"135px");
            }
        if(!$("#app-wrapper").hasClass("toggled"))
            {
                $(".app-section-container").css('margin-left', '335px');
                $(".searchBarAuto-container").css('display',"block");
                $(".fixed").css('padding-left',"335px");
            }
    });








// --------------------------------------------    WIN Blurr App Config  -----------------------------------------------------------

if(BlurEnabled==true){
    
    $(".fixed").css('backdrop-filter', 'blur(30px)');
    $(".fixed").css('background', 'transparent');
    
 
    $(".bottomsheet-content").css('background', 'var(--alpha_c)');
    $(".bottomsheet-content").css('backdrop-filter', 'blur(30px)');
    
    $(".searchAuto-select.list.ul").css('backdrop-filter', 'blur(30px)');
    $(".searchAuto-select.list ul").css('background', 'transparent');
    
}

















// ----------------------------------------    WIN SearchBar With Suggestions  -----------------------------------------------

function app_register_auto_search(search_id ,selectId) {
    $( search_id ).each(function (i, select) {
        if (!$(this).next().hasClass('searchAuto-select')) {
            $(this).after('<div class="searchAuto-select wide open' + '" tabindex="0" id="'+ selectId +'"><div class="list"><ul></ul></div></div>');
            var searchAuto = $(this).next();
            var options = $(select).find('option');
            var selected = $(this).find('option:selected');
            
            
            if(BlurEnabled==true){ 
                 $(".list ul").css('backdrop-filter', 'blur(30px)');
                 $(".list ul").css('background', 'transparent');
            }
            
            
            options.each(function (j, o) {
                var display = $(o).data('display-text') || '';
                searchAuto.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-display-text="' + display + '">' +  '<a href="'+ $(o).val() +'">'+$(o).text()+'</a></li>');
            });
        }
    });

$('#'+selectId+' ul').before('<div class="dd-search"><input id="'+ selectId+'s' +'" autocomplete="off" onkeyup="filter(`#'+ selectId+'s'+ '`,`'+selectId +'`)" class="dd-searchbox" type="text" placeholder="Search here.."></div>');
    
    
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






// --------------------------------------------    WIN Container iTab Layout    -----------------------------------------------------------


(function ($) {
    $.fn.horizontalmenu = function (option) {

        var setting = {
            itemClick: function (sender) {
                return true; //if this finction return true then will be executed http request
            }
        };

        if (option) $.extend(setting, option);

        var shadowRight = 80; // width of the .app-itab::after
        // width of the .app-itab::before is identical to the margin-right of the tab list item

        var isHorizontalOverflow = function (selector) {
            var element = $(selector)[0];
            return element.scrollWidth > element.clientWidth;
        }

        var adapt = function (wrapper) {

            var tab = $(wrapper).find('.app-itab'); //tab list

            var items = tab.find('.app-itab-item'); //tab list items
            var item = tab.find('.app-itab-item[data-app-itab-active="true"]'); //tab list active item

            var isOverflow = isHorizontalOverflow(tab);

            $(wrapper).find('.app-itab-overflow-wrapper') //overflow dropdown list wrapper
                .attr('data-app-itab-active', isOverflow);

            var marginLeft = 0, //distance to the left of the active item
                marginRight = 0, //distance to the right of the active item
                index = item.index(); //index of the active item

            if (isOverflow) {
                for (var i = 0; i < items.length; i++) {
                    var current = items.eq(i);
                    var width = current.width();
                    var margin = (parseInt(current.css('margin-right')) || 0);
                    if (i < index) {
                        marginLeft += width + (i + 1 < index ? margin : 0);
                        continue;
                    }
                    marginRight += width + margin;
                }

                //if the tab list active item doesn't fit into the tab list
                if (marginLeft + item.width() + shadowRight > $(tab).width()) {
                    marginLeft *= -1;
                    if (index) {
                        var delta = $(tab).width() - marginRight - shadowRight;
                        //if distance to the right is less than the width of the tab list
                        if (delta > 0)
                            marginLeft += delta; //decrease distance to the left at delta
                        tab.addClass('app-itab-overflow-left');
                    }
                } else {
                    marginLeft = 0;
                    tab.removeClass('app-itab-overflow-left');
                }
                
                tab.addClass('app-itab-overflow-right');
            } else {
                tab.removeClass('app-itab-overflow-left app-itab-overflow-right');
            }

            items.css({
                '-moz-transform': 'translateX(' + marginLeft + 'px)',
                '-o-transform': 'translateX(' + marginLeft + 'px)',
                '-webkit-transform': 'translateX(' + marginLeft + 'px)',
                'transform': 'translateX(' + marginLeft + 'px)'
            });
        }

        var initialize = function (wrapper) {
            if (wrapper.find('.app-itab-overflow-wrapper').length) return false;

            var items = wrapper.find('.app-itab-item');
            items.bind('click', function () {
                var isContinue = setting.itemClick($(this));
                if (!isContinue) {
                    var index = $(this).index();
                    var w = $(this).closest('.app-itab-wrapper');
                    w.find('.app-itab-item').removeAttr('data-app-itab-active');
                    w.find('.app-itab .app-itab-item').eq(index).attr('data-app-itab-active', 'true');
                    w.find('.app-itab-overflow-wrapper .app-itab-item').eq(index).attr('data-app-itab-active', 'true');
                    adapt(w);
                }
                return isContinue;
            });

            $('<div>', {
                class: 'app-itab-overflow-wrapper',
                append: $('<button>', {
                    type: 'menu',
                    class: 'app-itab-overflow-menu'
                }).add($('<div>', {
                    class: 'app-itab-overflow-list',
                    append: items.clone(true, true).removeAttr('style')
                }))
            }).appendTo(wrapper);

            adapt(wrapper);

            var resizeStabilizer = undefined;
            $(window).bind('resize', function () {
                if (resizeStabilizer) clearTimeout(resizeStabilizer);
                resizeStabilizer = setTimeout(function () {
                    adapt(wrapper);
                }, 20);
            });
        }

        return this.each(function () {
            initialize($(this));
        });
    };
})(jQuery);


//iTab Config ----------------------------------

function tabView(tabWrapper,tabContentWrapper) {
            $(tabWrapper).horizontalmenu({
                itemClick : function(item) {
                    $(tabContentWrapper+' .app-itab-content').removeAttr('data-app-itab-active');
                    $(tabContentWrapper+' .app-itab-content:eq(' + $(item).index() + ')').attr('data-app-itab-active', 'true');
                    return false; //if this finction return true then will be executed http request
                }
            });
        };


//__init of view --
//tabView/Child('.your tab wrapper class','.your tab child view');

$(document).ready(function () {
    tabView('.app-itab-wrapper','.app-itab-content-wrapper');
    
});







// --------------------------------------------    Searchable List Layout    -----------------------------------------------------------

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,o=t.console,n=void 0===o?function(){}:function(t){o.error(t)};function s(o,s,a){(a=a||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[o]=function(t){var e;return"string"==typeof t?function(t,e,i){var s,r="$()."+o+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,o);if(h){var l=h[e];if(l&&"_"!=e.charAt(0)){var d=l.apply(h,i);s=void 0===s?d:s}else n(r+" is not a valid method")}else n(o+" not initialized. Cannot call methods, i.e. "+r)}),void 0!==s?s:t}(this,t,i.call(arguments,1)):(e=t,this.each(function(t,i){var n=a.data(i,o);n?(n.option(e),n._init()):(n=new s(i,e),a.data(i,o,n))}),this)},r(a))}function r(t){!t||t&&t.bridget||(t.bridget=s)}return r(e||t.jQuery),s}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return-1==o.indexOf(e)&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return-1!=o&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n];o&&o[s]&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],o=i.length;function n(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),i}var s,r=!1;function a(e){if(function(){if(!r){r=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),a.isBoxSizeOuter=s,i.removeChild(e)}}(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var u=n(e);if("none"==u.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<o;e++)t[i[e]]=0;return t}();var h={};h.width=e.offsetWidth,h.height=e.offsetHeight;for(var l=h.isBorderBox="border-box"==u.boxSizing,d=0;d<o;d++){var f=i[d],c=u[f],m=parseFloat(c);h[f]=isNaN(m)?0:m}var p=h.paddingLeft+h.paddingRight,y=h.paddingTop+h.paddingBottom,g=h.marginLeft+h.marginRight,v=h.marginTop+h.marginBottom,_=h.borderLeftWidth+h.borderRightWidth,z=h.borderTopWidth+h.borderBottomWidth,I=l&&s,x=t(u.width);!1!==x&&(h.width=x+(I?0:p+_));var S=t(u.height);return!1!==S&&(h.height=S+(I?0:y+z)),h.innerWidth=h.width-(p+_),h.innerHeight=h.height-(y+z),h.outerWidth=h.width+g,h.outerHeight=h.height+v,h}}return a}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i]+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},o=Array.prototype.slice;i.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?o.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(o){e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}else n.push(t)}),n},i.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),l=r+"-options",d=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(l);try{i=s&&JSON.parse(s)}catch(e){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+e))}var a=new e(t,i);d&&d.data(t,o,a)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";var i=document.documentElement.style,o="string"==typeof i.transition?"transition":"WebkitTransition",n="string"==typeof i.transform?"transform":"WebkitTransform",s={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],r={transform:n,transition:o,transitionDuration:o+"Duration",transitionProperty:o+"Property",transitionDelay:o+"Delay"};function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=a.prototype=Object.create(t.prototype);u.constructor=a,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.getSize=function(){this.size=e(this.element)},u.css=function(t){var e=this.element.style;for(var i in t){e[r[i]||i]=t[i]}},u.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;-1!=o.indexOf("%")&&(s=s/100*a.width),-1!=n.indexOf("%")&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},u.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",l=o?"bottom":"top",d=this.position.y+t[u];e[h]=this.getYValue(d),e[l]="",this.css(e),this.emitEvent("layout",[this])},u.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},u.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},u._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),!n||this.isTransitioning){var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},u.getTranslate=function(t,e){return"translate3d("+(t=this.layout._getOption("originLeft")?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},u.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},u._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},u.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);this.element.offsetHeight;null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var h="opacity,"+n.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()});u.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:h,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(s,this,!1)}},u.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},u.onotransitionend=function(t){this.ontransitionend(t)};var l={"-webkit-transform":"transform"};u.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=l[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],function(t){for(var e in t)return!1;return!0}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd)e.onEnd[i].call(this),delete e.onEnd[i];this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(s,this,!1),this.isTransitioning=!1},u._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var d={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(d)},u.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){o&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),this.hide()):this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},u.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";var s=t.console,r=t.jQuery,a=function(){},u=0,h={};function l(t,e){var i=o.getQueryElement(t);if(i){this.element=i,r&&(this.$element=r(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++u;this.element.outlayerGUID=n,h[n]=this,this._create(),this._getOption("initLayout")&&this.layout()}else s&&s.error("Bad element for "+this.constructor.namespace+": "+(i||t))}l.namespace="outlayer",l.Item=n,l.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var d=l.prototype;function f(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}o.extend(d,e.prototype),d.option=function(t){o.extend(this.options,t)},d._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},l.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},d._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},d.reloadItems=function(){this.items=this._itemize(this.element.children)},d._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=new i(e[n],this);o.push(s)}return o},d._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},d.getItemElements=function(){return this.items.map(function(t){return t.element})},d.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},d._init=d.layout,d._resetLayout=function(){this.getSize()},d.getSize=function(){this.size=i(this.element)},d._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},d.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},d._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},d._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},d._getItemLayoutPosition=function(){return{x:0,y:0}},d._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},d.updateStagger=function(){var t=this.options.stagger;if(null!=t)return this.stagger=function(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=c[o]||1;return i*n}(t),this.stagger;this.stagger=0},d._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},d._postLayout=function(){this.resizeContainer()},d.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},d._getContainerSize=a,d._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},d._emitCompleteOnItems=function(t,e){var i=this;function o(){i.dispatchEvent(t+"Complete",null,[e])}var n=e.length;if(e&&n){var s=0;e.forEach(function(e){e.once(t,r)})}else o();function r(){++s==n&&o()}},d.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),r)if(this.$element=this.$element||r(this.element),e){var n=r.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},d.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},d.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},d.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},d.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},d._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},d._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},d._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},d._manageStamp=a,d._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t);return{left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom}},d.handleEvent=o.handleEvent,d.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},d.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},d.onresize=function(){this.resize()},o.debounceMethod(l,"onresize",100),d.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},d.needsResizeLayout=function(){var t=i(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},d.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},d.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},d.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},d.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},d.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},d.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},d.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},d.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},d.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},d.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},d.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete h[e],delete this.element.outlayerGUID,r&&r.removeData(this.element,this.constructor.namespace)},l.data=function(t){var e=(t=o.getQueryElement(t))&&t.outlayerGUID;return e&&h[e]},l.create=function(t,e){var i=f(l);return i.defaults=o.extend({},l.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},l.compatOptions),i.namespace=t,i.data=l.data,i.Item=f(n),o.htmlInit(i,t),r&&r.bridget&&r.bridget(t,i),i};var c={ms:1,s:1e3};return l.Item=n,l}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element);return this.isotope.size&&e&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o;s=Math[r&&r<1?"round":"floor"](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var o=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](i,t),n={x:this.columnWidth*o.col,y:o.y},s=o.y+t.size.outerHeight,r=i+o.col,a=o.col;a<r;a++)this.colYs[a]=s;return n},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols;i=t>1&&i+t>this.cols?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft")?o.left:o.right,s=n+i.outerWidth,r=Math.floor(n/this.columnWidth);r=Math.max(0,r);var a=Math.floor(s/this.columnWidth);a-=s%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this._getOption("originTop")?o.top:o.bottom)+i.outerHeight,h=r;h<=a;h++)this.colYs[h]=Math.max(u,this.colYs[h])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){var a=t.jQuery,u=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},h=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});h.Item=s,h.LayoutMode=r;var l=h.prototype;l._create=function(){for(var t in this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){t[i].id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){this._isLayoutInited||!this._getOption("initLayout")?this._layout():this.arrange()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){var t,e,i,o=this;function n(){t&&e&&i&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}this.once("layoutComplete",function(){t=!0,n()}),this.once("hideComplete",function(){e=!0,n()}),this.once("revealComplete",function(){i=!0,n()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return a&&this.options.isJQueryFiltering?function(e){return a(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].updateSortData()}};var d=function(){return function(t){if("string"!=typeof t)return t;var e=u(t).split(" "),i=e[0],o=i.match(/^\[(.+)\]$/),n=function(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}(o&&o[1],i),s=h.sortDataParsers[e[1]];return t=s?function(t){return t&&s(n(t))}:function(t){return t&&n(t)}}}();h.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=function(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var f=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);f.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){this.items[t].sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},h});




// app-Search Config ------------------------------------------------------------------

var qsRegex;
var filterValue;
// init Isotope
var $grid = $(".app-searchable-grid").isotope({
  itemSelector: ".element-item",
  layoutMode: "fitRows",
  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
    var selectResult = filterValue ? $this.is(filterValue) : true;
    return searchResult  && selectResult;
  }
});

// bind filter on select change
$("#app-filters-dropdown").on("change", function() {
  // get filter value from option value
  filterValue = $(this).val();
  $grid.isotope();
});


// use value of search field to filter
var $quicksearch = $("#app-quicksearch").keyup(
  debounce(function() {
    qsRegex = new RegExp($quicksearch.val(), "gi");
    $grid.isotope();
  })
);
// debounce so filtering doesn't happen every millisecond
function debounce(fn, threshold) {
  var timeout;
  return function debounced() {
    if (timeout) {
      clearTimeout(timeout);
    }
    function delayed() {
      fn();
      timeout = null;
    }
    setTimeout(delayed, threshold || 100);
  };
}