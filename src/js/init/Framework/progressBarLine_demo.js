function setProgress(progress){
  if(progress <= 100 && progress >= 0){
    time = 2000 * (progress / 100);
    progress +="%";
    $("#progBar").animate({width:progress}, time);
  }
}

function doSetProgress(){
  var progress = $("#percent").val();
  setProgress(progress);
}

setProgress(70);