document.addEventListener("DOMContentLoaded", async function() {
  const container = document.getElementById("lista-filmes");

  try {
    const response = await fetch("https://api-filmes.ctdscleoracy.click/consultar");
    const result = await response.json();

    if (!result.dados || !Array.isArray(result.dados)) {
      console.error("Resposta inesperada da API:", result);
      container.innerHTML = "<p>Erro ao carregar filmes.</p>";
      return;
    }

    

    result.dados.forEach(filme => {
      const card = document.createElement("div");
      card.className = "col-md-4";

      card.innerHTML = `
      <div class="card mb-3" style="max-width: 800px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://api-filmes.ctdscleoracy.click/${filme.capa_do_filme}" class="img-fluid rounded-start" alt="${filme.nome_do_filme}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${filme.nome_do_filme}</h5>
              <p class="card-text"><strong>Categoria:</strong> ${filme.categoria}</p>
              <p class="card-text"><strong>Duração:</strong> ${filme.duracao} min</p>
              <a href="${filme.link_do_trailer}" target="_blank" class="btn btn-danger mt-auto">Ver trailer</a>
            </div>
          </div>
        </div>
      </div>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    container.innerHTML = "<p>Erro ao carregar filmes.</p>";
  }
});
