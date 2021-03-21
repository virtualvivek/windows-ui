
// ----------------------------------------------- API setStatusBarPrimary() -------------------------------------


function setStatusBarPrimary(){
    var style = getComputedStyle(document.body);
    var theColorIs = style.getPropertyValue("--PrimaryColor");
    
    var meta=document.createElement("meta");
    meta.name="theme-color";
    meta.setAttribute("content", theColorIs);
    document.getElementsByTagName("head")[0].appendChild(meta); 
}

// ----------------------------------------------- API setStatusNightMode -------------------------------------

function setDarkModeAPI() {
        
    document.head.innerHTML += '<meta name="theme-color" content="#403E41" />';
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
    document.documentElement.style.setProperty('--color_primary_dark','#403E41');
}

//Setting night mode on the page

if(localStorage.getItem("isNight")=='true'){
    document.body.style.setProperty('transition', 'none');
    setDarkModeAPI();
}

