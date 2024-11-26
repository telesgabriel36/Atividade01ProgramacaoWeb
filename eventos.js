// Digitação automatica
document.addEventListener("DOMContentLoaded", function () {
  const txt = "Desenvolvimento Web";
  const elementoSubtitulo = document.getElementById("subtituloApesentacao");
  let index = 0;

  function digitacaoAutomatica() {
    if (index < txt.length) {
      elementoSubtitulo.innerHTML += txt.charAt(index);
      index++;
      setTimeout(digitacaoAutomatica, 50);
    }
  }

  setTimeout(digitacaoAutomatica, 1000);
});

// Mostrar e fechar o menu
const botaoMenu = document.getElementById("botaoMenu");
const overlayMenu = document.getElementById("overlayMenu");
const botaoMenuFechar = document.getElementById("botaoMenuFechar");

// Abre o menu ao clicar no botão
botaoMenu.addEventListener("click", () => {
  overlayMenu.style.display = "flex";
});

// Fecha o menu ao clicar no botão de fechar
botaoMenuFechar.addEventListener("click", () => {
  overlayMenu.style.display = "none";
});

// Fechar o menu ao clicar em qualquer link dentro do menu
function fecharMenu() {
  const linksMenu = document.querySelectorAll("#overlayMenu .conteudoMenu a");

  linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
      overlayMenu.style.display = "none"; // Fecha o menu
    });
  });
}

// Chama a função para fechar o menu quando um link for clicado
fecharMenu();