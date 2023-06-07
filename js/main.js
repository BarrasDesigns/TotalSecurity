// REPRODUCE VIDEO 
function getFullscreenElement() {
  return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullscreenElement
    || document.msFullscreenElement
}

function iniciar() {
  let boton = document.getElementById('btnIntro');
  boton.addEventListener('click', presionar, false);
}
function presionar() {
  let video = document.getElementById('intro');
  video.play();
}
window.addEventListener('load', iniciar, false);

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    document.getElementById("intro").requestFullscreen().catch(console.log);
    document.getElementById("intro").requestFullscreen().catch((e) => {
      document.getElementById("intro").style.display = "block";
      HTMLMediaElement.play();
    });
  }
}

function addEvent(element, evnt, funct) {
  if (element.attachEvent)
    return element.attachEvent('on' + evnt, funct);
  else
    return element.addEventListener(evnt, funct, false);
}

addEvent(
  document.getElementById('fullscreen'),
  'click',
  function () { toggleFullscreen(); }
);

document.getElementById("intro").style.display = "none";

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
