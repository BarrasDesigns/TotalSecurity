const toggleModal1 = ((e) => {
  const modal = document.getElementById("modalContainer--SE");
  if (modal.style.display === "none") {
    modal.style.display = "block";
    trapped = trapFocus(modal);
  } else {
    modal.style.display = "none";
    trapped.onClose();
  } 
})
const toggleModal2 = ((e) => {
  const modal = document.getElementById("modalContainer--cobranzas");
  if (modal.style.display === "none") {
    modal.style.display = "block";
    trapped = trapFocus(modal);
  } else {
    modal.style.display = "none";
    trapped.onClose();
  } 
})
const toggleModal3 = ((e) => {
  const modal = document.getElementById("modalContainer--ventas");
  if (modal.style.display === "none") {
    modal.style.display = "block";
    trapped = trapFocus(modal);
  } else {
    modal.style.display = "none";
    trapped.onClose();
  } 
})