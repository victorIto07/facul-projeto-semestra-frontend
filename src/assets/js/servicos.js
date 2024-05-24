const ENDPOINTS = {
  'Login': 'https://back-login.vercel.app/usuarios',
  'Get': 'https://projeto-integrado-avaliacao.azurewebsites.net/projeto2/fecaf/listar/contatos',
  'Filtro': 'https://projeto-integrado-avaliacao.azurewebsites.net/projeto2/fecaf/buscar/contato/{{id}}',
  'Post': 'https://projeto-integrado-avaliacao.azurewebsites.net/projeto2/fecaf/novo/contato',
  'Delete': 'https://projeto-integrado-avaliacao.azurewebsites.net/projeto2/fecaf/excluir/contato/{{id}}',
  'Put': 'https://projeto-integrado-avaliacao.azurewebsites.net/projeto2/fecaf/atualizar/contato/{{id}}',
};

const VALID_METHOS = ['GET', 'POST', 'PUT', 'DELETE'];

export const callEndpoint = (
  endpoint_name,
  method,
  dados_url,
  body
) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!VALID_METHOS.includes(method)) reject('invalid method');

      let url = ENDPOINTS[endpoint_name];
      if (!url) reject('invalid endpoint');

      if (dados_url && Object.keys(dados_url).length) {
        Object.keys(dados_url).forEach(key => {
          url = url.replaceAll(`{{${key}}}`, dados_url[key]);
        })
      }

      const params_res = {
        method,
        uri: url,
      };

      if (method != 'GET') {
        params_res['body'] = JSON.stringify(body);
        params_res['headers'] = {
          "Content-Type": "application/json",
          "Mode": "cors",
        };
        params_res['redirect'] = 'follow';
      }

      const res = await fetch(url, params_res);

      const json = await res.json();

      if (!json.status_code || json.status_code == 200)
        resolve(json);
      else
        reject(json);

    } catch (error) {
      console.log(`error on request: ${method}-${url}`);
      reject(error);
    }
  });
};

export const Login = async (email, senha) => {
  const cache_login = localStorage.getItem('usuario_logado');
  if (cache_login) {
    console.log('utilizando usuário logado no cache');
    return JSON.parse(cache_login);
  }

  const dados_login = await callEndpoint('Login', 'GET');
  if (!dados_login || !dados_login.length) throw new Error('erro ao buscar dados para efetuar o login');

  const login_valido = dados_login.find(f => f.email == email && f.senha == senha);
  if (!login_valido) throw new Error('email ou senha inválidos');

  console.log('cacheando usuario');
  localStorage.setItem('usuario_logado', JSON.stringify(login_valido))

  return login_valido;
}

export const BuscarListaContato = async () => {
  const dados_contatos = await callEndpoint('Get', 'GET');
  const { contatos } = dados_contatos;

  return contatos;
}

export const BuscarContato = async (id) => {
  if (!id) throw new Error('informe o id do usuário');

  const dados_contato = await callEndpoint('Filtro', 'GET', { id });
  if (!dados_contato) throw new Error('erro ao buscar usuário');

  return dados_contato.contato[0];
}

export const CadastrarContato = async ({ nome, email, telefone, image, senha }) => {
  if (!(nome && email && telefone && image)) throw new Error('dados do usuário inválidos');


  const dados_contato = await callEndpoint('Post', 'POST', null, { nome, email, telefone, image, senha });
  console.log(dados_contato);

  return dados_contato;
}

export const AtualizarContato = async (id, { nome, email, telefone, image, senha }) => {
  if (!(nome && email && telefone && image && id))
    throw new Error('dados do usuário inválidos');


  const dados_contato = await callEndpoint('Put', 'PUT', { id }, { nome, email, telefone, image, senha });
  console.log(dados_contato);

  return dados_contato;
}

// (async () => {
//   // console.log(await BuscarListaContato());
//   // console.log(await BuscarContato(2));
//   const usuario_test = {
//     nome: 'teste victor 1',
//     email: 'testevictor1@test.com',
//     telefone: '6942069420',
//     image: 'testeimagem',
//   }
//   // await CadastrarContato(usuario_test);
//   await AtualizarContato(10, usuario_test);
// })();
