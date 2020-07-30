function setProgressOfIcon(progress){
  if(progress <= 100 && progress >= 0){
    time = 2000 * (progress / 100);
    progress +="%";
    $("#progBarWtIcon").animate({width:progress}, time);
  }
}

function doSetProgressOfIcon(){
  var progress = $("#percentOfIcon").val();
  setProgressOfIcon(progress);
}

setProgressOfIcon(50);