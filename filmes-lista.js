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

  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    container.innerHTML = "<p>Erro ao carregar filmes.</p>";
  }
});
