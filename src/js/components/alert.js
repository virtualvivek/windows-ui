const AlertTriggers = document.querySelectorAll('[data-toggle="modal"]');

for (const AlertTrigger of AlertTriggers) {
 const getAlertID = AlertTrigger.getAttribute("data-target");

  AlertTrigger.onclick = function(e) {
    if (e.target !== this && AlertTrigger.classList.contains("app-alert"))
    return;
    document.getElementById(getAlertID).classList.toggle("show");
  };
};