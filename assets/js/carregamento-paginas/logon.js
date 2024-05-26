import { Logon } from '/assets/js/servicos.js';
import { loadingSpinner, loginCard } from '/assets/js/modelos-html.js';
import { formData, navigate, wait, validarLogin } from '/assets/js/util.js';

const usuario_logado = validarLogin();
if (usuario_logado) navigate('/');

const prepararForm = () => {
  const form = document.getElementById('formulario-logon');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const spinner_loader = document.getElementById('card').appendChild(loadingSpinner());

    try {
      const dados_logon = formData({ form });
      dados_logon['id'] = 100 + Math.floor(Math.random() * 400);

      await Logon(dados_logon);
    } catch (e) {
      console.error(e);
      spinner_loader.remove();
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  document.body.appendChild(loginCard('logon'));
  prepararForm();
});
