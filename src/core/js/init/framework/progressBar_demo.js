function setProgress(progress,progressBarId){
  if(progress <= 100 && progress >= 0){
    time = 2000 * (progress / 100);
    progress +="%";
    $("#"+progressBarId).animate({width:progress}, time);
  }
}

function doSetProgress(inputId,progressBarId){
  var progress = $("#"+inputId).val();
    
  setProgress(progress,progressBarId);
}

setProgress(70,'progBar');
setProgress(50,'progBarWtIcon');