function getScreenOffset(element) {
  let windowHeight = window.innerHeight;
  let componentOffset = element.getBoundingClientRect().top;

  return componentOffset > (windowHeight/2) ?  true : false;
}