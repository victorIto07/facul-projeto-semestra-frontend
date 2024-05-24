const createElementFromString = (string_html) => {
  const el = document.createElement('div');
  el.innerHTML = string_html;
  return el.firstChild;
}

export const splide_slide = (img_name) => {
  if (!img_name) return

  const id = Math.floor(Math.random() * 10000);

  const string_html = `
  <li class="splide__slide h-fit">
    <div id="banner-${id}" class="size-3/4 mx-auto"
      style="aspect-ratio: 4.88; border-radius: 2rem; background-repeat: no-repeat; background-size: cover; background-position: center;background-image:url('/src/assets/img/${img_name}')"">
    </div>
  </li>`;

  return createElementFromString(string_html.trim());
}

export const card_contato = (contato) => {
  if (!contato) return

  console.log(contato);

  const string_html = `
  <div class="card-product relative p-4 my-10 mx-auto flex w-85 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md mt-5 transition-all">
    <div class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
      <img
        class="object-cover w-full":ter
        src="${contato.image}"
        style="
        background-image:url('/src/assets/img/profile.jpg');
        background-position:center;
        background-repeat:no-repeat"
        alt=""
      />
    </div>
    <h4 class="text-xl tracking-tight mt-2">
      ${contato.nome}
    </h4>
    <h4 class="text-xl text-gray-400 underline tracking-tight" >
      ${contato.telefone}
    </h5>
    <hr class="my-3">
    <div class="flex gap-3">
      <button
        class="select-none rounded-lg bg-gradient-to-tr from-red-600 to-red-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        Excluir
      </button>
      <a
        class="select-none rounded-lg bg-gradient-to-tr from-cyan-200 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        href="/src/cadastro.index.html?id=${contato.id}">
        Editar
      </a>
    </div>
  </div>
`;

  return createElementFromString(string_html.trim());
}
