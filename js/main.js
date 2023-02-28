const toggleModal = ((e) => {
  const modal = document.getElementById("modalContainer");
  if (modal.style.display === "none") {
    modal.style.display = "block";
    trapped = trapFocus(modal);
  } else {
    modal.style.display = "none";
    trapped.onClose();
  } 
})