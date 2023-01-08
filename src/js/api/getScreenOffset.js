function getScreenOffset(element) {
  let windowHeight = window.innerHeight;
  let componentOffset = element.getBoundingClientRect().top;

  if(componentOffset > windowHeight/2) {
    return true;
  }
  else{
    return false;
  }
}