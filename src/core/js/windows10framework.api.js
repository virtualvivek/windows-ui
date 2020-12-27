
// ----------------------------------------------- API setStatusBarAccent() -------------------------------------


function setStatusBarAccent(){
    var style = getComputedStyle(document.body);
    var theColorIs = style.getPropertyValue("--AppColor");
    
    var meta=document.createElement("meta");
    meta.name="theme-color";
    meta.setAttribute("content", theColorIs);
    document.getElementsByTagName("head")[0].appendChild(meta); 
}