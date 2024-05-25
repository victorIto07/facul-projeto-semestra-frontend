export const loginCache = () => {
  const cache_login = localStorage.getItem('usuario_logado');
  if (!cache_login) return

  return JSON.parse(cache_login);
}

export const validarLogin = () => {
  const login_cache = loginCache();
  if (!login_cache && !location.pathname.includes('/login') && !location.pathname.includes('/logon')) {
    navigate('/login');
    return;
  }

  document.addEventListener("DOMContentLoaded", async (event) => {
    const saudacoes = document.getElementById('saudacoes');
    if (!saudacoes) return

    const nome = login_cache.nome.split(' ')[0];
    saudacoes.innerHTML = `Bem vindo(a), <strong>${nome[0].toUpperCase() + nome.slice(1).toLowerCase()}</strong> !`;
  });

  return login_cache;
}

export const createElementFromString = (string_html) => {
  if (!string_html) return

  const el = document.createElement('div');
  el.innerHTML = string_html;
  return el.firstElementChild;
};

export const debounce = (func, timeout = 300) => {
  if (!func) throw new Error('functio not provided');

  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
};

export const wait = (ms = 300) => new Promise((resolve) => {
  setTimeout(() => { resolve() }, ms);
});

export const formData = ({ form, form_id }) => {
  if (!form && form_id)
    form = document.getElementById(form_id)
  else if (!form && !form_id) throw new Error('form not specified');

  const form_data = new FormData(form);

  const dados_form = {};
  for (const [key, value] of form_data) {
    dados_form[key] = value;
  }

  return dados_form;
}

export const navigate = (url) => {
  window.location.replace(url);
  // const _a = document.createElement('a');
  // _a.href = url;
  //
  // _a.click();
}
