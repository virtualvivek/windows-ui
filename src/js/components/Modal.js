const ModalTriggers = document.querySelectorAll('[data-win-toggle="modal"]');

for (const ModalTrigger of ModalTriggers) {
 const getAlertID = ModalTrigger.getAttribute("data-win-target");

  ModalTrigger.onclick = function(e) {
    if (e.target !== this && (ModalTrigger.classList.contains("app-alert") || ModalTrigger.classList.contains("app-dialog")))
    return;
    document.querySelector(getAlertID).classList.toggle("show");
  };
};