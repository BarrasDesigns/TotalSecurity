const toggleModal1 = ((e) => {
  const modal = document.getElementById("modalContainer--ventas");
  if (modal.style.display === "none") {
    modal.style.display = "block";
    trapped = trapFocus(modal);
  } else {
    modal.style.display = "none";
    trapped.onClose();
  } 
})
const toggleModal2 = ((e) => {
  const modal = document.getElementById("modalContainer--hikStore");
  if (modal.style.display === "none") {
    modal.style.display = "block";
    trapped = trapFocus(modal);
  } else {
    modal.style.display = "none";
    trapped.onClose();
  } 
})
const toggleModal3 = ((e) => {
  const modal = document.getElementById("modalContainer--cobranza");
  if (modal.style.display === "none") {
    modal.style.display = "block";
    trapped = trapFocus(modal);
  } else {
    modal.style.display = "none";
    trapped.onClose();
  } 
})
const toggleModal4 = ((e) => {
  const modal = document.getElementById("modalContainer--atencionAclientes");
  if (modal.style.display === "none") {
    modal.style.display = "block";
    trapped = trapFocus(modal);
  } else {
    modal.style.display = "none";
    trapped.onClose();
  } 
})
const toggleModal5 = ((e) => {
  const modal = document.getElementById("modalContainer--soporteTecnico");
  if (modal.style.display === "none") {
    modal.style.display = "block";
    trapped = trapFocus(modal);
  } else {
    modal.style.display = "none";
    trapped.onClose();
  } 
})
