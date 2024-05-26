import { splideSlide, cardContato, botaoCustom, inputCustom, cardCustom, alertCustom, spinner } from '/assets/js/modelos-html.js'
import { BuscarListaContato } from '/assets/js/servicos.js';
import { validarLogin, prepararHeader, debounce, wait } from '/assets/js/util.js';

const usuario = validarLogin();

document.addEventListener("DOMContentLoaded", async () => {
  prepararHeader(usuario);

  carregarFiltro();

  carregarSlider();
  carregarGrid();
});

const carregarFiltro = () => {
  const _filtro = document.getElementById('field-filtro');
  if (!_filtro) return

  const _botao_filtro = botaoCustom({ msg: 'Novo Contato', type: 'success', href: '/cadastro' });
  let _input_filtro = inputCustom({ id: 'filtro', label: 'Filtro' });

  const _card = cardCustom(_botao_filtro + _input_filtro, { col: false, center: false });
  _card.classList.add('gap-3');

  _filtro.appendChild(_card);

  _input_filtro = _filtro.querySelector('#input-filtro');

  const debounce_filtro = debounce(async (filtro) => {
    carregarGrid(filtro);
  });

  _input_filtro.addEventListener('input', async (event) => {
    debounce_filtro(event.target.value);
  })
}

const carregarSlider = async () => {
  const _slider = document.getElementById('slider-contatos');
  if (!_slider) return

  const contatos = await BuscarListaContato();

  for (let contato of contatos) {
    let _template_slide = splideSlide(contato);
    if (!_template_slide) continue

    _slider.appendChild(_template_slide);
  }

  const _splide = new Splide('#splide-carrossel', { 'type': 'loop', 'autoplay': true, 'interval': 2500, 'gap': '20px', 'arrows': false });
  _splide.mount();
}

const carregarGrid = async (filtro) => {
  const _grid = document.getElementById('grid-contatos');
  if (!_grid) return

  _grid.classList.add('grid', 'grid-cols-3', 'gap-1');
  _grid.innerHTML = '';

  const _gridNovoConteudo = _grid.cloneNode(true);

  _grid.appendChild(cardCustom(spinner(), { center: false }));

  try {
    let contatos = await BuscarListaContato();

    if (!contatos || !contatos.length) {
      _gridNovoConteudo.classList.remove('grid', 'grid-cols-3', 'gap-1');
      _gridNovoConteudo.appendChild(alertCustom({ type: 'info', msg: 'Nenhum contato foi retornado' }));
    }
    else if (filtro) {
      contatos = contatos.filter(contato =>
        contato.nome == filtro ||
        contato.email == filtro ||
        contato.telefone == filtro ||
        contato.nome.toLowerCase().includes(filtro.toLowerCase()) ||
        contato.email.toLowerCase().includes(filtro.toLowerCase()) ||
        contato.telefone.toLowerCase().includes(filtro.toLowerCase())
      );

      if (!contatos.length) {
        const _field_filtro = document.getElementById('field-filtro');

        const _alert = _field_filtro.appendChild(alertCustom({ msg: 'Seu filtro desconsideirou todos os resultados.', type: 'info' }));
        wait(3000).then(() => { _alert.remove() });

        // const _filtro = document.querySelector('#input-filtro')
        // if (!filtro) return

        // _filtro.value = '';
      }
    }

    if (contatos.length)
      for (let contato of contatos) {
        let template_card = cardContato(contato);
        if (!template_card) continue

        _gridNovoConteudo.appendChild(template_card);
      }

  } catch (error) {
    _gridNovoConteudo.classList.remove('grid', 'grid-cols-3', 'gap-1');
    _gridNovoConteudo.appendChild(alertCustom({ type: 'danger', msg: error.message || error.toString() }));
  }

  _grid.replaceWith(_gridNovoConteudo);
}

