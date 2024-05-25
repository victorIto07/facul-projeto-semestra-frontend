import { createElementFromString } from '/assets/js/util.js';

export const splide_slide = (contato) => {
  if (!contato) return

  const string_html = `
  <li class="splide__slide h-fit">
    <div class="relative grid grid-cols-2 items-center gap-5 p-4 my-10 mx-auto flex w-96 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg mt-5 transition-all">
      <div>
        <img class="object-cover rounded-full aspect-square mx-auto" src="${contato.image}" style="
          background-image:url('/assets/img/profile.png');
          background-position:center;
          background-repeat:no-repeat;
          height:100%;
          max-height:8rem;
          aspect-ratio:1;
          background-size:cover;"
          alt=" "
        />
      </div>
      <div>
        <h4 class="text-xl tracking-tight truncate">
          <strong>##: </strong>${contato.id}
        </h4>
        <h4 class="text-xl tracking-tight truncate">
          <strong>Nome: </strong>${contato.nome}
        </h4>
        <h4 class="text-xl tracking-tight truncate">
          <strong>N°: </strong>${contato.telefone}
        </h4>
        <h4 class="text-xl tracking-tight truncate">
          <strong>Email: </strong>${contato.email}
        </h4>
      </div>
    </div>
  </li>
`;

  return createElementFromString(string_html.trim());
}

export const card_contato = (contato) => {
  if (!contato) return

  const string_html = `
  <div class="card-product relative p-4 my-10 mx-auto flex w-85 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg mt-5 transition-all">
    <div class="relative flex h-60 overflow-hidden rounded-lg" id="foto">
      <img
        class="object-cover rounded-full aspect-square mx-auto"
        src="${contato.image}"
        style="
          background-image:url('/assets/img/profile.png');
          background-position:center;
          background-repeat:no-repeat;
          background-size:cover;"
        alt=" "
      />
      <a
        class="select-none rounded-lg absolute top-0 right-0 bg-gradient-to-tr from-cyan-300 to-cyan-500 p-2 text-xs font-bold uppercase shadow-md shadow-gray-900/10 ${contato ? '' : 'hidden'}"
      href="/cadastro/index.html?id=${contato.id}">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#fff" stroke-width="1.9200000000000004" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#fff" stroke-width="1.9200000000000004" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </a>
    </div>
    <strong class="text-xl tracking-tight mt-2 truncate">
      ${contato.nome}
    </strong>
    <h4 class="text-xl text-gray-400 tracking-tight truncate">
      ${contato.telefone}
    </h4>
    <h4 class="text-xl text-gray-400 tracking-tight underline truncate">
      ${contato.email}
    </h4>
  </div>
  <!-- <hr class="my-3"> -->
  <!-- <div class="flex gap-3"> -->
  <!--   <a -->
  <!--     class="select-none rounded-lg bg-gradient-to-tr from-cyan-300 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" -->
  <!--     href="/cadastro/index.html?id=${contato.id}"> -->
  <!--     Editar -->
  <!--   </a> -->
  <!--   <button -->
  <!--     class="select-none rounded-lg bg-gradient-to-tr from-red-500 to-red-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" -->
  <!--     type="button"> -->
  <!--     Excluir -->
  <!--   </button> -->
  <!-- </div> -->
`;

  return createElementFromString(string_html.trim());
}

export const card_contato_cadastro = (contato) => {
  const string_html = `
  <div class="p-4">
    <h1 class="text-xl mb-5">
      ${contato ? 'Editar contato' : 'Criar novo contato'}
    </h1>
    <div class="relative m-3 flex h-60 overflow-hidden rounded-lg ${contato ? '' : 'hidden'}" id="foto">
      <img
        class="object-cover rounded-full aspect-square mx-auto"
        src="${contato ? contato.image : ''}"
        style="
          background-image:url('/assets/img/profile.png');
          background-position:center;
          background-repeat:no-repeat;
          background-size:cover;"
        alt=" "
      />
      <button
        id="botao-editar-foto"
        class="select-none rounded-lg absolute top-0 right-0 bg-gradient-to-tr from-cyan-300 to-cyan-500 p-2 text-xs font-bold uppercase shadow-md shadow-gray-900/10 ${contato ? '' : 'hidden'}"
        type="button">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#fff" stroke-width="1.9200000000000004" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#fff" stroke-width="1.9200000000000004" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
    </div>
    <form id="formulario-cadastro" action="">
      <div class="grid grid-cols-1 gap-5">
        ${contato && contato.id ? `
          <div class="w-full hidden">
            <div class="relative w-full min-w-[200px] h-10">
              <input class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" placeholder=" " name="id" value="${contato.id}" />
              <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"># ID</label>
            </div>
          </div>
        ` : ''}
        <div id="field-foto" class="w-full ${contato ? 'hidden' : ''}">
          <div class="relative w-full min-w-[200px] h-10">
            <input id="input-foto" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" placeholder=" " name="image" value="${contato ? contato.image : ''}" />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Link da Imagem</label>
          </div>
        </div>
        <div class="w-full">
          <div class="relative w-full min-w-[200px] h-10">
            <input class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" placeholder=" " name="nome" value="${contato ? contato.nome : ''}" />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Nome</label>
          </div>
        </div>
        <div class="w-full">
          <div class="relative w-full min-w-[200px] h-10">
            <input class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" placeholder=" " name="email" value="${contato ? contato.email : ''}" />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">E-mail</label>
          </div>
        </div>
        <div class="w-full">
          <div class="relative w-full min-w-[200px] h-10">
            <input class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" placeholder=" " name="telefone" value="${contato ? contato.telefone : ''}" />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">N° Contato</label>
          </div>
        </div>
        <div class="flex gap-4">
          <button
            class="select-none rounded-lg bg-gradient-to-tr from-green-400 to-green-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit">
            Salvar
          </button>
          <a
            class="select-none rounded-lg bg-gradient-to-tr from-gray-200 to-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            href="/">
            Cancelar
          </a>
          <button
            id="botao-excluir"
            class="select-none rounded-lg bg-gradient-to-tr from-red-500 to-red-400 p-2 text-center ml-auto align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#fff" stroke-width="1.7759999999999998" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#fff" stroke-width="1.7759999999999998" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#fff" stroke-width="1.7759999999999998" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#fff" stroke-width="1.7759999999999998" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#fff" stroke-width="1.7759999999999998" stroke-linecap="round" stroke-linejoin="round"></path> </g>
            </svg>
          </button>
      </div>
    <form>
  </div>
`;

  return string_html.trim();
}

export const spinner = (absolute) => {
  const string_html = `
  <div role="status" class="${absolute ? 'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' : 'py-20 flex justify-center'}">
      <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
  </div>
`;

  return string_html;
}

export const loadingSpinner = () => {
  const string_html = `
  <div class="absolute w-full h-full top-0 left-0">
    <div class="acrylic">
    </div>
    ${spinner(true)}
  </div>
`;

  return createElementFromString(string_html);
}
