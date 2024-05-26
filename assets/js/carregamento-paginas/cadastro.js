import { BuscarContato, CadastrarContato, AtualizarContato, ExcluirContato } from '/assets/js/servicos.js';
import { card_contato_cadastro, spinner, loadingSpinner, cardCustom } from '/assets/js/modelos-html.js';
import { debounce, formData, validarLogin, prepararHeader } from '/assets/js/util.js';

const usuario = validarLogin();

document.addEventListener("DOMContentLoaded", async () => {
  prepararHeader(usuario);

  const url_params = new URLSearchParams(window.location.search);
  const _id = url_params.get('id');

  await carregarContato(_id);

  prepararMudancasFoto();
  prepararSalvar();
  prepararExclusao(_id);
});

const carregarContato = async (id) => {
  const spinner_sem_conteudo = document.getElementById('content-cadastro').appendChild(cardCustom(spinner()));

  const contato = id ? await BuscarContato(id) : {};
  const template_contato = card_contato_cadastro(contato);

  spinner_sem_conteudo.remove();
  document.getElementById('content-cadastro').appendChild(template_contato);
}

const prepararMudancasFoto = () => {
  const botao_editar_foto = document.getElementById('botao-editar-foto');
  botao_editar_foto.addEventListener('click', () => {
    const field_foto = document.getElementById('input-custom-image');
    field_foto.classList.toggle('hidden');
    input_link_foto.focus();
  });

  const input_link_foto = document.getElementById('input-image');

  const debounceLinkFoto = debounce((link) => {
    const foto = document.getElementById('foto');
    foto.firstElementChild.src = link;
    foto.classList.remove('hidden');
  }, 500);

  input_link_foto.addEventListener('input', () => {
    debounceLinkFoto(input_link_foto.value);
  });
}

const exibirSpinner = () => document.getElementById('content-cadastro').firstElementChild.appendChild(loadingSpinner());

const prepararSalvar = () => {
  const form = document.getElementById('formulario-cadastro');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const spinner_loader = exibirSpinner();

    try {
      const dados_contato = formData({ form });

      let retorno_api;
      if (dados_contato.id)
        retorno_api = await AtualizarContato(dados_contato);
      else
        retorno_api = await CadastrarContato(dados_contato);

      navigate('/');
    } catch (e) {
      console.error(e);
    }

    spinner_loader.remove();
  });
}

const prepararExclusao = (_id) => {
  const botao_excluir = document.getElementById('botao-excluir');
  if (!botao_excluir) return

  botao_excluir.addEventListener('click', async () => {
    const spinner_loader = exibirSpinner();

    try {
      await ExcluirContato(_id);
      navigate('/');
    } catch (e) {
      console.error(e);
    }

    spinner_loader.remove();
  });
}
