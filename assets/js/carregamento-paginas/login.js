import { Login } from '/assets/js/servicos.js';
import { loadingSpinner, loginCard } from '/assets/js/modelos-html.js';
import { formData, navigate, validarLogin } from '/assets/js/util.js';

const usuario_logado = validarLogin();
if (usuario_logado) navigate('/');

document.addEventListener("DOMContentLoaded", async () => {
  document.body.appendChild(loginCard());
  prepararForm();
});

const prepararForm = () => {
  const form = document.getElementById('formulario-login');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const spinner_loader = document.getElementById('card').appendChild(loadingSpinner());

    try {
      const dados_login = formData({ form });
      await Login(dados_login['email'], dados_login['senha']);
    } catch (e) {
      document.getElementById('erro-requisicao').innerText = '* ' + e.message || e;
      spinner_loader.remove();
    }

  });
}
