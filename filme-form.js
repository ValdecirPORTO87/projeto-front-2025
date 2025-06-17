const urlApi = 'https://api-filmes.ctdscleoracy.click/';

async function uploadImagem(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('authkey', '1');

  const urlUpload = urlApi + 'uploadImagem';
  const response = await fetch(urlUpload, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.erro || 'Erro no upload da imagem');
  }

  const result = await response.json();
  return result.caminho;
}