import { createElementFromString } from '/assets/js/util.js';

const colorTypes = (type) => {
  let color_from, color_to, text_color, icon;
  switch (type) {
    case 'info':
      text_color = 'white';
      color_from = 'cyan-300';
      color_to = 'cyan-400';
      icon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"> </path> </svg>`;
      break;

    case 'warning':
      text_color = 'white';
      color_from = 'yellow-400';
      color_to = 'orange-300';
      icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-6"> <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path> </svg>`;
      break;

    case 'danger':
      text_color = 'white';
      color_from = 'red-500';
      color_to = 'red-400';
      icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-6"> <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path> </svg>`;
      break;

    case 'default':
      text_color = 'black';
      color_from = 'gray-200';
      color_to = 'gray-300';
      icon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"> </path> </svg>`;
      break;

    case 'success':
      text_color = 'white';
      color_from = 'green-400';
      color_to = 'green-300';
      icon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"> </path> </svg>`;
      break;
  }

  return { color_from, color_to, text_color, icon };
}

// COMPONENTES SOLTOS
export const inputCustom = ({ value = '', type = 'text', placeholder, id, hidden, tostring = true, label, required = true }) => {
  const string_html = `
  <div id="input-custom-${id}" class="relative min-w-[200px] h-10 ${hidden ? 'hidden' : ''}">
    <input id="input-${id}" type="${type}" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900" placeholder=" " name="${id}" autocomplete="off" value="${value}" ${required ? 'required=""' : ''} />
    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">${placeholder || label}</label>
  </div>
`;

  return tostring ? string_html : createElementFromString(string_html);
}

export const botaoCustom = ({ tostring = true, small, msg, href, id, type = 'info', hidden, extraClasses = '', buttonType = 'button' } = {}) => {
  const { color_from, color_to, text_color } = colorTypes(type);

  const string_html = `
  <${href ? 'a' : 'button'} id="botao-${id}" ${href ? `href=${href}` : `type=${buttonType}`} class="${hidden ? 'hidden' : ''} ${extraClasses} flex items-center gap-2 select-none rounded-lg bg-gradient-to-tr from-${color_from} to-${color_to} p-${small ? 2 : 3} text-center align-middle font-sans ${small ? 'text-[10px] leading-0' : 'text-xs'} font-bold uppercase text-${text_color} shadow-lg shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
    ${msg}
  </${href ? 'a' : 'button'}>
`;

  return tostring ? string_html : createElementFromString(string_html);
}

export const cardCustom = (html, { center = true, col = true, extraClasses = '' } = {}) => createElementFromString(`
  <div class="relative p-4 ${center ? 'my-10 mx-auto flex w-85' : ''} flex${col ? '-col' : ''} ${col ? '' : 'items-center'} overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg transition-all ${extraClasses}">
    ${html}
  </div>
`);

export const headerCustom = () => createElementFromString(`
  <div class="mb-10 2xl:container 2xl:mx-auto">
    <div class="bg-white rounded shadow-lg py-5 px-7">
      <nav class="flex justify-between items-center">
        <a href="/">
          <div class="flex items-center space-x-3 lg:pr-16 pr-6">
            <img src="/assets/img/favicon.ico" class="size-16" alt="" />
            <h2 class="text-5xl leading-6 text-gray-800">
              FecafBook
            </h2>
          </div>
        </a>
        <div id="saudacoes" class="flex items-center gap-2">
        </div>
      </nav>
    </div>
  </div>
`);

export const alertCustom = ({ msg = 'Oops.. Algo deu errado', tostring = false, center = false, type = 'warning' } = {}) => {
  const { color_from, color_to, icon } = colorTypes(type);

  const string_html = `
  <div class="${center ? 'justify-center flex w-full' : ''}">
    <div class="w-fit flex items-center gap-2 relative bg-gradient-to-tr from-${color_from} to-${color_to} p-4 leading-5 text-white rounded-lg font-bold">
      ${icon}
      ${msg}
    </div>
  </div>
`;

  return tostring ? string_html : createElementFromString(string_html);
};

export const spinner = (absolute) => `
  <div role="status" class="${absolute ? 'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' : 'py-20 flex justify-center'}">
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
`;

// COMPONENTES COMPLEXOS
export const splideSlide = (contato) => contato ? createElementFromString(`
  <li class="splide__slide h-fit">
    <div class="relative grid grid-cols-2 items-center gap-5 p-4 flex w-96 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white transition-all">
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
`) : null;

export const carregamentoSpinner = () => createElementFromString(`
  <div class="absolute w-full h-full top-0 left-0">
    <div class="acrylic">
    </div>
    ${spinner(true)}
  </div>
`);

export const cardContato = (contato) => contato ? cardCustom(`
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
    ${botaoCustom({ type: 'info', href: `/cadastro/index.html?id=${contato.id}`, small: true, extraClasses: 'absolute top-0 right-0', msg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#fff" stroke-width="1.9200000000000004" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#fff" stroke-width="1.9200000000000004" stroke-linecap="round" stroke-linejoin="round"></path> </g> </svg>` })}
  </div>
  <strong class="text-xl tracking-tight mt-2 truncate">
    ${contato.nome}
  </strong>
  <h4 class="text-xl text-gray-400 tracking-tight truncate">
    <strong class="font-bold text-black mr-1">N°:</strong>${contato.telefone}
  </h4>
  <h4 class="text-xl text-gray-400 tracking-tight truncate">
    <strong class="font-bold text-black mr-1">E-mail:</strong>${contato.email}
  </h4>
`) : null;

// TELAS
export const cardContatoCadastro = ({ id, nome = '', email = '', telefone = '', image = '' }) => cardCustom(`
  <h1 class="text-xl mb-5 font-bold">
    ${id ? 'Editar Contato' : 'Criar Novo Contato'}
  </h1>
  <div class="relative m-3 flex h-60 overflow-hidden rounded-lg ${id ? '' : 'hidden'}" id="foto">
    <img
      class="object-cover rounded-full aspect-square mx-auto"
      src="${image}"
      style="
        background-image:url('/assets/img/profile.png');
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;"
      alt=" "
    />
    ${botaoCustom({ type: 'info', id: 'editar-foto', small: true, extraClasses: 'absolute top-0 right-0', msg: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#fff" stroke-width="1.9200000000000004" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#fff" stroke-width="1.9200000000000004" stroke-linecap="round" stroke-linejoin="round"></path> </g> </svg>` })}
  </div>
  <form id="formulario-cadastro" action="">
    <div class="space-y-5">
      ${id ? inputCustom({ value: id, id: 'id', hidden: true, label: '#ID' }) : ''}
      ${inputCustom({ value: image, id: 'image', label: 'Link da Imagem', hidden: !!id })}
      ${inputCustom({ value: nome, id: 'nome', label: 'Nome' })}
      ${inputCustom({ value: email, id: 'email', label: 'E-mail' })}
      ${inputCustom({ value: telefone, id: 'telefone', label: 'n° Contato' })}
      <div id="erro-requisicao" class="text-red-500 font-bold !mt-0"></div>
      <div class="flex gap-4">
        ${botaoCustom({ buttonType: 'submit', msg: 'salvar', type: 'success' })}
        ${botaoCustom({ href: '/', msg: 'cancelar', type: 'default' })}
        ${botaoCustom({ type: 'danger', id: 'excluir', hidden: !id, extraClasses: 'ml-auto', msg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#fff" stroke-width="1.7759999999999998" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#fff" stroke-width="1.7759999999999998" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#fff" stroke-width="1.7759999999999998" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#fff" stroke-width="1.7759999999999998" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#fff" stroke-width="1.7759999999999998" stroke-linecap="round" stroke-linejoin="round"></path> </g> </svg>' })}
      </div>
    </div>
  <form>
`);

export const loginCard = (tipo = 'login') => createElementFromString(`
  <div id="card-${tipo}" class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div class="mb-6 text-2xl font-semibold text-gray-900">
      <img class="size-16 mr-2" src="/assets/img/favicon.ico" alt="logo">
    </div>
    <div id="card" class="relative w-full bg-white rounded-lg shadow-lg  md:mt-0 sm:max-w-md xl:p-0 overflow-hidden">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          ${tipo == 'login' ? 'Conecte-se à sua conta' : 'Crie sua conta'}
        </h1>
        <form id="formulario-${tipo}" class="space-y-4 md:space-y-6" action="">
          ${inputCustom({ id: 'email', label: 'E-mail', type: 'email', tostring: true })}
          ${inputCustom({ id: 'senha', label: 'Senha', type: 'password' })}
          ${tipo == 'logon' ? inputCustom({ id: 'nome', label: 'Nome' }) : ''}
          <div id="erro-requisicao" class="text-red-500 font-bold !mt-0"></div>
          <button type="submit"
          class="w-full text-black bg-gradient-to-tr from-blue-200 to-green-200 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center font-bold">
            ${tipo == 'login' ? 'Conectar' : 'Criar'}
          </button>
          <p class="text-sm font-light text-gray-500">
            ${tipo == 'login' ? 'Ainda não tem sua conta?' : 'Já possui uma conta?'}
            <a href="/${tipo == 'login' ? 'logon' : 'login'}" class="font-medium text-primary-600 hover:underline ">
              ${tipo == 'login' ? 'Cadastrar-se' : 'Entrar'}
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
`);
