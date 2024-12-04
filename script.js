

document.addEventListener("DOMContentLoaded", () => {
   const loginBtn = document.getElementById("login-btn");
   const addDefinitionBtn = document.getElementById("add-definition-btn");
   const likeButtons = document.querySelectorAll(".like-btn");

   loginBtn.addEventListener("click", () => {
      if (loginBtn.textContent === "Iniciar sesión") {
         loginBtn.textContent = "Cerrar sesión";
      } else {
         loginBtn.textContent = "Iniciar sesión";
      }
   });

   addDefinitionBtn.addEventListener("click", () => {
      addDefinitionBtn.style.display = "none";
   });

   likeButtons.forEach((button) => {
      button.addEventListener("click", () => {
         const currentLikes = parseInt(button.textContent);
         button.textContent = `${currentLikes + 1} me gusta`;
         alert(`Te gustó la definición: ${button.parentElement.querySelector("h2").textContent}`);
      });
   });
});
