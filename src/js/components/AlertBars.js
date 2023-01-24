const AlertBarDismissals = document.querySelectorAll('[data-win-dismiss="alert"]');

for (const AlertBarDismissal of AlertBarDismissals) {
  AlertBarDismissal.addEventListener("click", () => {
    var node = AlertBarDismissal.closest(".app-alert-bar");
    node.parentNode.removeChild(node);
  });
}