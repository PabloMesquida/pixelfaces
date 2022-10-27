const botonAceptarCookies = document.getElementById("btn-aceptar");
const avisoCookies = document.getElementById("aviso");
const fondoAvisoCookies = document.getElementById("fondo-aviso");

window.dataLayer = window.dataLayer || [];

if (!localStorage.getItem("cookies-aceptadas")) {
  avisoCookies.classList.add("activo");
  fondoAvisoCookies.classList.add("activo");
}

botonAceptarCookies.addEventListener("click", () => {
  avisoCookies.classList.remove("activo");
  fondoAvisoCookies.classList.remove("activo");
  localStorage.setItem("cookies-aceptadas", true);
  window.dataLayer.push({ event: "cookies-aceptadas" });
});
