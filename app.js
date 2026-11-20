/*
  WATCHLY
  Site demonstrativo: páginas, catálogo, favoritos e detalhes.
  As informações de prêmios e curiosidades são cadastradas abaixo.
*/

// =========================================================
// 1. CATÁLOGO DE FILMES
// =========================================================

const filmes = [
  {
    id: 1,
    titulo: "Duna: Parte Dois",
    ano: 2024,
    lancamento: "28/02/2024",
    nota: 8.5,
    duracao: "2h 46min",
    genero: ["Ficção científica", "Aventura"],
    classificacao: "14 anos",
    diretor: "Denis Villeneuve",
    elenco: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Austin Butler",
    pais: "Estados Unidos, Canadá",
    tagline: "O destino de um povo. O começo de uma lenda.",
    sinopse: "Paul Atreides une forças com Chani e os Fremen para buscar vingança contra os conspiradores que destruíram sua família. Ao enfrentar escolhas que podem mudar o destino do universo, ele precisa decidir entre o amor e o futuro de milhões de pessoas.",
    premios: "Vencedor de 2 Oscars na cerimônia de 2025, nas categorias de Melhor Som e Melhores Efeitos Visuais.",
    curiosidade: "Grande parte das paisagens de Arrakis foi construída a partir de locações reais e efeitos visuais cuidadosamente integrados.",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    trailer: "Duna Parte Dois trailer oficial"
  },
  {
    id: 2,
    titulo: "Oppenheimer",
    ano: 2023,
    lancamento: "20/07/2023",
    nota: 8.3,
    duracao: "3h",
    genero: ["Drama", "Histórico"],
    classificacao: "16 anos",
    diretor: "Christopher Nolan",
    elenco: "Cillian Murphy, Emily Blunt, Robert Downey Jr., Matt Damon",
    pais: "Estados Unidos, Reino Unido",
    tagline: "O mundo nunca mais seria o mesmo.",
    sinopse: "A trajetória de J. Robert Oppenheimer, físico que liderou o desenvolvimento da primeira bomba atômica durante a Segunda Guerra Mundial, e os dilemas morais e políticos que marcaram sua vida.",
    premios: "Vencedor de 7 Oscars, incluindo Melhor Filme, Melhor Direção, Melhor Ator e Melhor Ator Coadjuvante, na cerimônia de 2024.",
    curiosidade: "O filme combina fotografia de grande formato e efeitos práticos para construir sua experiência visual.",
    poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    trailer: "Oppenheimer trailer oficial"
  },
  {
    id: 3,
    titulo: "Interestelar",
    ano: 2014,
    lancamento: "06/11/2014",
    nota: 8.7,
    duracao: "2h 49min",
    genero: ["Ficção científica", "Drama"],
    classificacao: "10 anos",
    diretor: "Christopher Nolan",
    elenco: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    pais: "Estados Unidos, Reino Unido",
    tagline: "O amor é a única coisa que transcende o tempo e o espaço.",
    sinopse: "Com a Terra enfrentando uma crise ambiental, um grupo de exploradores parte em uma missão por um buraco de minhoca em busca de um novo lar para a humanidade. No centro da aventura está a relação entre um pai e sua filha.",
    premios: "Vencedor do Oscar de Melhores Efeitos Visuais em 2015, além de outras indicações ao prêmio.",
    curiosidade: "O físico Kip Thorne atuou como consultor científico para ajudar a representar fenômenos relacionados a buracos negros.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    trailer: "Interestelar trailer oficial"
  },
  {
    id: 4,
    titulo: "O Poderoso Chefão",
    ano: 1972,
    lancamento: "24/03/1972",
    nota: 9.2,
    duracao: "2h 55min",
    genero: ["Crime", "Drama"],
    classificacao: "14 anos",
    diretor: "Francis Ford Coppola",
    elenco: "Marlon Brando, Al Pacino, James Caan, Diane Keaton",
    pais: "Estados Unidos",
    tagline: "Uma oferta que você não pode recusar.",
    sinopse: "A saga da família Corleone acompanha a transição de poder entre gerações e os conflitos que surgem quando Michael Corleone é puxado para o mundo criminoso de sua família.",
    premios: "Vencedor de 3 Oscars, incluindo Melhor Filme, Melhor Ator para Marlon Brando e Melhor Roteiro Adaptado.",
    curiosidade: "A fotografia de Gordon Willis ficou conhecida pelo uso marcante de sombras e contrastes.",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    trailer: "O Poderoso Chefão trailer oficial"
  },
  {
    id: 5,
    titulo: "À Procura da Felicidade",
    ano: 2006,
    lancamento: "15/12/2006",
    nota: 8.0,
    duracao: "1h 57min",
    genero: ["Drama"],
    classificacao: "Livre",
    diretor: "Gabriele Muccino",
    elenco: "Will Smith, Jaden Smith, Thandiwe Newton",
    pais: "Estados Unidos",
    tagline: "Nunca deixe alguém dizer que você não pode fazer algo.",
    sinopse: "Chris Gardner enfrenta dificuldades financeiras e instabilidade enquanto luta para construir um futuro melhor para si e para o filho pequeno. Uma história sobre perseverança, responsabilidade e esperança.",
    premios: "Will Smith recebeu indicação ao Oscar de Melhor Ator por sua atuação no filme.",
    curiosidade: "Will Smith contracena com seu filho Jaden Smith, que interpreta seu filho também na história.",
    poster: "https://images.squarespace-cdn.com/content/v1/5891089bbf629a5f22f794c8/1490801668818-XMQ6G9R9HP44Z9WQQQ58/image-asset.jpeg?format=1000w",
    posterFallback: "https://images.squarespace-cdn.com/content/v1/5e1f3f0387ddb30afceeb8c5/1596374421839-X7M20GYM0ON6W3SVKOA5/pursuit%2Bof%2Bhappyness.jpeg",
    backdrop: "https://thecinemaholic.com/wp-content/uploads/2021/03/The.Pursuit.Of_.Happyness.2006.720p.BrRip_.x264.YIFY_.mp4_20210301_072434.218.jpg",
    trailer: "À Procura da Felicidade trailer oficial"
  },
  {
    id: 6,
    titulo: "Clube da Luta",
    ano: 1999,
    lancamento: "29/10/1999",
    nota: 8.4,
    duracao: "2h 19min",
    genero: ["Drama", "Suspense"],
    classificacao: "18 anos",
    diretor: "David Fincher",
    elenco: "Edward Norton, Brad Pitt, Helena Bonham Carter",
    pais: "Estados Unidos",
    tagline: "As coisas que você possui acabam possuindo você.",
    sinopse: "Um trabalhador insatisfeito conhece um homem carismático e passa a participar de encontros clandestinos que desafiam as convenções sociais e sua própria percepção da realidade.",
    premios: "Recebeu indicações a importantes prêmios, incluindo o prêmio de Melhor Edição no Online Film Critics Society Awards.",
    curiosidade: "O filme ganhou grande público ao longo dos anos e se tornou um dos títulos mais debatidos da filmografia de David Fincher.",
    poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    trailer: "Clube da Luta trailer oficial"
  },
  {
    id: 7,
    titulo: "La La Land",
    ano: 2016,
    lancamento: "12/01/2017",
    nota: 7.9,
    duracao: "2h 08min",
    genero: ["Musical", "Drama", "Romance"],
    classificacao: "12 anos",
    diretor: "Damien Chazelle",
    elenco: "Ryan Gosling, Emma Stone, John Legend",
    pais: "Estados Unidos",
    tagline: "Uma história sobre sonhos, amor e escolhas.",
    sinopse: "Em Los Angeles, uma aspirante a atriz e um músico de jazz se apaixonam enquanto tentam construir suas carreiras. À medida que as oportunidades aparecem, seus sonhos colocam o relacionamento à prova.",
    premios: "Vencedor de 6 Oscars, incluindo Melhor Direção, Melhor Atriz e Melhor Fotografia, na cerimônia de 2017.",
    curiosidade: "A abertura foi filmada em uma rodovia de Los Angeles com uma coreografia planejada para parecer uma única tomada.",
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/n0rUD1F4bE9y0w3a4L8X0V7y9Jx.jpg",
    trailer: "La La Land trailer oficial"
  },
  {
    id: 8,
    titulo: "Homem-Aranha: Através do Aranhaverso",
    ano: 2023,
    lancamento: "01/06/2023",
    nota: 8.6,
    duracao: "2h 20min",
    genero: ["Animação", "Aventura"],
    classificacao: "10 anos",
    diretor: "Joaquim Dos Santos, Kemp Powers e Justin K. Thompson",
    elenco: "Shameik Moore, Hailee Steinfeld, Brian Tyree Henry",
    pais: "Estados Unidos",
    tagline: "Mais de um universo. Mais de um herói.",
    sinopse: "Miles Morales atravessa o multiverso e encontra uma sociedade de pessoas-aranha. Ao tentar proteger aqueles que ama, precisa enfrentar diferentes visões sobre o que significa ser um herói.",
    premios: "Vencedor de prêmios de animação, incluindo o Annie Award de Melhor Filme de Animação, além de indicações a outras premiações importantes.",
    curiosidade: "Os diferentes universos têm estilos visuais próprios, ajudando a distinguir os mundos e seus personagens.",
    poster: "https://i0.wp.com/halcyonrealms.com/blogpics/spidyv2posters03.jpg?resize=750%2C938&ssl=1",
    posterFallback: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
    trailer: "Homem-Aranha Através do Aranhaverso trailer oficial"
  },
  {
    id: 9,
    titulo: "Parasita",
    ano: 2019,
    lancamento: "30/05/2019",
    nota: 8.5,
    duracao: "2h 12min",
    genero: ["Suspense", "Drama"],
    classificacao: "16 anos",
    diretor: "Bong Joon-ho",
    elenco: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
    pais: "Coreia do Sul",
    tagline: "Uma família. Duas realidades. Um encontro explosivo.",
    sinopse: "Uma família de poucos recursos passa a trabalhar para uma família rica, mas uma sequência de acontecimentos transforma o plano em uma situação imprevisível que revela as desigualdades entre os dois mundos.",
    premios: "Vencedor de 4 Oscars, incluindo Melhor Filme, Melhor Direção, Melhor Roteiro Original e Melhor Filme Internacional, em 2020.",
    curiosidade: "Foi o primeiro filme em língua não inglesa a vencer o Oscar de Melhor Filme.",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    trailer: "Parasita trailer oficial"
  },
  {
    id: 10,
    titulo: "Um Sonho de Liberdade",
    ano: 1994,
    lancamento: "14/10/1994",
    nota: 8.7,
    duracao: "2h 22min",
    genero: ["Drama"],
    classificacao: "16 anos",
    diretor: "Frank Darabont",
    elenco: "Tim Robbins, Morgan Freeman, Bob Gunton",
    pais: "Estados Unidos",
    tagline: "A esperança pode libertar qualquer pessoa.",
    sinopse: "Condenado à prisão, Andy Dufresne constrói uma amizade com Red e encontra maneiras de preservar sua dignidade e esperança em meio a décadas de encarceramento.",
    premios: "Recebeu 7 indicações ao Oscar, incluindo Melhor Filme, Melhor Ator e Melhor Roteiro Adaptado.",
    curiosidade: "Apesar de uma estreia modesta nos cinemas, conquistou uma reputação duradoura com o público.",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    trailer: "Um Sonho de Liberdade trailer oficial"
  },
  {
    id: 11,
    titulo: "Whiplash",
    ano: 2014,
    lancamento: "08/01/2015",
    nota: 8.5,
    duracao: "1h 47min",
    genero: ["Drama", "Musical"],
    classificacao: "12 anos",
    diretor: "Damien Chazelle",
    elenco: "Miles Teller, J. K. Simmons, Paul Reiser",
    pais: "Estados Unidos",
    tagline: "Até onde você iria para ser extraordinário?",
    sinopse: "Um jovem baterista entra em um conservatório de música de alto nível e enfrenta um professor exigente. A busca pela excelência transforma a relação entre os dois em um intenso confronto psicológico.",
    premios: "Vencedor de 3 Oscars, incluindo Melhor Ator Coadjuvante para J. K. Simmons, Melhor Edição e Melhor Mixagem de Som.",
    curiosidade: "O longa se expandiu a partir de um curta-metragem que ajudou a chamar atenção para o projeto.",
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
    trailer: "Whiplash trailer oficial"
  },
  {
    id: 12,
    titulo: "O Grande Truque",
    ano: 2006,
    lancamento: "20/10/2006",
    nota: 8.2,
    duracao: "2h 10min",
    genero: ["Drama", "Mistério", "Suspense"],
    classificacao: "12 anos",
    diretor: "Christopher Nolan",
    elenco: "Hugh Jackman, Christian Bale, Scarlett Johansson",
    pais: "Estados Unidos, Reino Unido",
    tagline: "Você está olhando atentamente?",
    sinopse: "Dois mágicos rivais entram em uma disputa cada vez mais perigosa para superar um ao outro, sacrificando relacionamentos e a própria segurança em nome de um truque perfeito.",
    premios: "Recebeu indicações ao Oscar de Melhor Fotografia e Melhor Direção de Arte.",
    curiosidade: "A narrativa é estruturada em camadas, brincando com a atenção do espectador e com a ideia de ilusão.",
    poster: "https://www.impawards.com/2006/posters/prestige_xxlg.jpg",
    posterFallback: "https://m.media-amazon.com/images/M/MV5BNDdkZDdlZTUtNDc3Yi00NjEwLTkyZjYtNTk3NzM4NDE3Yjk1XkEyXkFqcGc%40._V1_.jpg",
    backdrop: "https://cms-assets.theasc.com/The-Prestige-Featured.jpg",
    trailer: "O Grande Truque trailer oficial"
  }
];

// =========================================================
// 2. VARIÁVEIS GERAIS E FAVORITOS
// =========================================================

let favoritos = lerFavoritos();
let paginaAtual = "inicio";
let paginaAnterior = "inicio";
let filmeAtual = null;
let toastTimer;

// Trecho organizado com auxílio de IA:
// O try/catch evita que um dado inválido ou um problema no armazenamento
// local impeça o restante do site de funcionar.
function lerFavoritos() {
  try {
    const dados = JSON.parse(localStorage.getItem("watchly-favoritos") || "[]");
    return Array.isArray(dados) ? dados.filter(Number.isInteger) : [];
  } catch {
    return [];
  }
}

function salvarFavoritos() {
  try {
    localStorage.setItem("watchly-favoritos", JSON.stringify(favoritos));
  } catch {
    notificar("Não foi possível salvar os favoritos neste navegador.");
  }
}

// =========================================================
// 3. NAVEGAÇÃO ENTRE AS PÁGINAS
// =========================================================

function irPara(nome) {
  paginaAtual = nome;

  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const pagina = document.getElementById("page-" + nome);
  if (pagina) pagina.classList.add("active");

  document.querySelectorAll(".nav button").forEach(botao => {
    botao.classList.toggle("active", botao.dataset.page === nome);
  });

  if (nome !== "detalhes") {
    document.getElementById("buscaGlobal").value = "";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (nome === "favoritos") renderizarFavoritos();
  if (nome === "catalogo") renderizarCatalogo();
}

// =========================================================
// 4. CARTÕES, CARROSSEL E PÁGINA INICIAL
// =========================================================

function card(filme) {
  const salvo = favoritos.includes(filme.id);

  return `
    <article class="movie-card">
      <div class="poster" onclick="abrirFilme(${filme.id})" role="button" tabindex="0"
           onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();abrirFilme(${filme.id})}"
           aria-label="Ver detalhes de ${filme.titulo}">
        <img src="${filme.poster}" alt="Pôster de ${filme.titulo}" loading="lazy"
             onerror="if(!this.dataset.fallback && '${filme.posterFallback || ''}'){this.dataset.fallback='1';this.src='${filme.posterFallback || ''}';}else{this.style.opacity='.15';this.alt='Pôster indisponível';}">
        <button class="heart ${salvo ? "saved" : ""}" onclick="event.stopPropagation();alternarFavorito(${filme.id})"
                aria-label="${salvo ? "Remover dos" : "Adicionar aos"} favoritos"
                title="${salvo ? "Remover dos favoritos" : "Adicionar aos favoritos"}">
          ${salvo ? "♥" : "♡"}
        </button>
        <div class="poster-overlay"><span class="play-circle">＋</span></div>
      </div>
      <div class="movie-info">
        <h3 class="movie-name" onclick="abrirFilme(${filme.id})">${filme.titulo}</h3>
        <div class="movie-sub">
          <span>${filme.ano}</span>
          <span class="rating">★ ${filme.nota.toFixed(1)}</span>
        </div>
      </div>
    </article>`;
}

function preencherTrilha(id, lista) {
  document.getElementById(id).innerHTML = lista.map(card).join("");
}

function mover(id, direcao) {
  const trilha = document.getElementById(id);
  if (!trilha) return;

  trilha.scrollBy({
    left: direcao * trilha.clientWidth * .85,
    behavior: "smooth"
  });
}

function renderizarInicio() {
  preencherTrilha("trending", [1, 2, 3, 8, 9, 11, 5, 6].map(id => filmes.find(f => f.id === id)));
  preencherTrilha("classics", [4, 10, 6, 12, 3, 7].map(id => filmes.find(f => f.id === id)));
  preencherTrilha("emotional", [5, 7, 10, 3, 11, 2].map(id => filmes.find(f => f.id === id)));

  document.getElementById("heroFav").textContent =
    favoritos.includes(1) ? "♥ Na minha lista" : "♡ Minha lista";
}

// =========================================================
// 5. CONTROLE DOS FAVORITOS
// =========================================================

function alternarFavorito(id) {
  const filme = filmes.find(f => f.id === id);
  if (!filme) return;

  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(f => f !== id);
    notificar("“" + filme.titulo + "” removido dos favoritos.");
  } else {
    favoritos.push(id);
    notificar("“" + filme.titulo + "” adicionado aos favoritos ♥");
  }

  salvarFavoritos();
  atualizarContagem();
  renderizarInicio();
  renderizarFavoritos();
  renderizarCatalogo();

  if (filmeAtual && filmeAtual.id === id) {
    atualizarBotaoDetalhes();
  }

  if (paginaAtual === "detalhes") {
    const busca = document.getElementById("buscaGlobal").value.trim();
    if (busca) pesquisarGlobal(busca);
  }
}

function atualizarContagem() {
  document.getElementById("favCount").textContent =
    favoritos.length ? `(${favoritos.length})` : "";
}

function renderizarFavoritos() {
  const lista = filmes.filter(f => favoritos.includes(f.id));
  document.getElementById("favoritosGrid").innerHTML = lista.map(card).join("");
  document.getElementById("favoritosVazio").classList.toggle("hidden", lista.length > 0);
}

// =========================================================
// 6. CATÁLOGO E FILTROS
// =========================================================

function renderizarCatalogo() {
  const termo = document.getElementById("buscaCatalogo").value.toLocaleLowerCase("pt-BR").trim();
  const genero = document.getElementById("filtroGenero").value;
  const ordem = document.getElementById("ordenarCatalogo").value;

  let lista = filmes.filter(f => {
    const texto = [f.titulo, f.diretor, f.genero.join(" "), f.ano]
      .join(" ")
      .toLocaleLowerCase("pt-BR");

    return texto.includes(termo) && (!genero || f.genero.includes(genero));
  });

  if (ordem === "nota") lista.sort((a, b) => b.nota - a.nota);
  if (ordem === "ano") lista.sort((a, b) => b.ano - a.ano);
  if (ordem === "titulo") lista.sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"));

  document.getElementById("catalogoGrid").innerHTML = lista.map(card).join("");
  document.getElementById("catalogoVazio").classList.toggle("hidden", lista.length > 0);
}

// =========================================================

// 7. DETALHES DOS FILMES
// =========================================================

// Trecho organizado com auxílio de IA:
// Esta função atualiza vários elementos da página usando os dados do filme
// selecionado. Também usa uma variável CSS para trocar a imagem de fundo.
function abrirFilme(id) {
  const filme = filmes.find(f => f.id === id);
  if (!filme) return;

  paginaAnterior = paginaAtual === "detalhes" ? paginaAnterior : paginaAtual;
  filmeAtual = filme;
  paginaAtual = "detalhes";

  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page-detalhes").classList.add("active");
  document.querySelectorAll(".nav button").forEach(b => b.classList.remove("active"));

  document.getElementById("detailHero").style.setProperty("--backdrop", `url("${filme.backdrop}")`);
  document.getElementById("detailHero").style.backgroundImage = "none";
  document.getElementById("detailHero").style.setProperty("background-color", "#090909");
  document.getElementById("detailHero").querySelector("::before");

  // A imagem de fundo é definida por uma variável CSS para cada filme.
  document.getElementById("detailHero").style.setProperty("background", "transparent");
  document.getElementById("detailHero").style.setProperty("--filme-fundo", `url("${filme.backdrop}")`);

  const posterDetalhe = document.getElementById("detailPoster");
  posterDetalhe.onerror = function () {
    if (!this.dataset.fallback && filme.posterFallback) {
      this.dataset.fallback = "1";
      this.src = filme.posterFallback;
    }
  };

  posterDetalhe.dataset.fallback = "";
  posterDetalhe.referrerPolicy = "no-referrer";
  posterDetalhe.loading = "eager";
  posterDetalhe.src = filme.poster;
  posterDetalhe.alt = "Pôster de " + filme.titulo;

  document.getElementById("detailTitle").textContent = filme.titulo;
  document.getElementById("detailTagline").textContent = filme.tagline;
  document.getElementById("detailDescription").textContent = filme.sinopse;

  document.getElementById("detailMeta").innerHTML = `
    <span>${filme.ano}</span><span class="dot">•</span>
    <span>${filme.genero.join(" / ")}</span><span class="dot">•</span>
    <span>${filme.classificacao}</span>`;

  document.getElementById("detailFacts").innerHTML = `
    <div class="fact"><small>NOTA WATCHLY</small><strong class="big-rating">★ ${filme.nota.toFixed(1)} / 10</strong></div>
    <div class="fact"><small>LANÇAMENTO</small><strong>${filme.lancamento}</strong></div>
    <div class="fact"><small>DURAÇÃO</small><strong>${filme.duracao}</strong></div>`;

  document.getElementById("detailCredits").innerHTML =
    `<b>Direção:</b> ${filme.diretor}<br><br><b>Elenco:</b> ${filme.elenco}<br><br><b>País:</b> ${filme.pais}`;

  document.getElementById("detailAwards").textContent = filme.premios;
  document.getElementById("detailGenres").textContent =
    `Gêneros: ${filme.genero.join(", ")}. Classificação indicativa: ${filme.classificacao}.`;
  document.getElementById("detailTrivia").textContent = filme.curiosidade;

  renderizarAvaliacaoDetalhe(filme);

  document.getElementById("detailTrailer").onclick = () => abrirTrailer(filme);
  document.getElementById("detailFavorite").onclick = () => alternarFavorito(filme.id);

  const relacionados = filmes.filter(f =>
    f.id !== filme.id && f.genero.some(g => filme.genero.includes(g))
  );

  preencherTrilha("related", relacionados.length ? relacionados : filmes.filter(f => f.id !== filme.id));

  window.scrollTo({ top: 0, behavior: "smooth" });
  atualizarBotaoDetalhes();
}

function atualizarBotaoDetalhes() {
  if (!filmeAtual) return;

  const salvo = favoritos.includes(filmeAtual.id);
  const botao = document.getElementById("detailFavorite");
  botao.textContent = salvo ? "♥ Na minha lista" : "♡ Adicionar aos favoritos";
}

function voltarPagina() {
  irPara(paginaAnterior === "detalhes" ? "inicio" : paginaAnterior);
}

// Trecho organizado com auxílio de IA:
// encodeURIComponent transforma o texto da busca em um formato seguro para URL.
function abrirTrailer(filme) {
  const termo = typeof filme === "string" ? filme : filme.trailer;

  window.open(
    "https://www.youtube.com/results?search_query=" + encodeURIComponent(termo),
    "_blank",
    "noopener,noreferrer"
  );
}

function pesquisarGlobal(consulta) {
  const termo = consulta.toLocaleLowerCase("pt-BR").trim();
  if (!termo) return;

  document.getElementById("buscaCatalogo").value = consulta;
  document.getElementById("filtroGenero").value = "";
  document.getElementById("ordenarCatalogo").value = "popular";

  irPara("catalogo");
  renderizarCatalogo();
}

// =========================================================
// 8. AVISOS NA TELA
// =========================================================

function notificar(mensagem) {
  const toast = document.getElementById("toast");
  toast.textContent = mensagem;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

// =========================================================
// 9. EVENTOS DE BUSCA E NAVEGAÇÃO DO NAVEGADOR
// =========================================================

document.getElementById("buscaGlobal").addEventListener("keydown", event => {
  if (event.key === "Enter") pesquisarGlobal(event.target.value);
});

document.getElementById("buscaGlobal").addEventListener("input", event => {
  const termo = event.target.value.trim();

  if (paginaAtual === "catalogo") {
    document.getElementById("buscaCatalogo").value = termo;
    renderizarCatalogo();
  }
});

document.getElementById("buscaCatalogo").addEventListener("input", renderizarCatalogo);
document.getElementById("filtroGenero").addEventListener("change", renderizarCatalogo);
document.getElementById("ordenarCatalogo").addEventListener("change", renderizarCatalogo);

// Permite voltar à página anterior usando o botão voltar do navegador.
window.addEventListener("popstate", () => {
  if (paginaAtual === "detalhes") voltarPagina();
  else irPara("inicio");
});

// Trecho organizado com auxílio de IA:
// O estilo é criado por JavaScript para aplicar a imagem de fundo na área de detalhes.
const estiloDetalhes = document.createElement("style");
estiloDetalhes.textContent = `
  #detailHero::before {
    background-image: var(--filme-fundo);
  }
`;
document.head.appendChild(estiloDetalhes);

// =========================================================
// 10. FORMULÁRIO DE ENTRADA E VÍDEO DE DEMONSTRAÇÃO
// =========================================================

// Entrada demonstrativa: não há autenticação real nem banco de dados.
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("loginName").value.trim();
  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginPassword").value;

  if (!nome || !email || !senha) return;

  document.getElementById("landingPage").classList.add("hidden");
  document.getElementById("appShell").classList.remove("hidden");
  document.querySelector(".footer-logo").innerHTML = '<svg class="brand-mark" viewBox="0 0 40 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g fill="none" stroke="#d9b779" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5 7 4.8a2 2 0 0 1 2.5-1.1l23 8.1"/><path d="m12 6 4 7M21 9l4 7M30 12l3 4"/><rect x="4" y="14" width="32" height="19" rx="2.5"/><path d="M4 20h32"/></g></svg>Watch<span class="gold">ly</span>';

  const rotaInicial = document.body.dataset.defaultRoute || "inicio";

  if (rotaInicial === "detalhes") {
    const filmeDestaque = filmes.find(f => f.titulo === "O Grande Truque");
    if (filmeDestaque) abrirFilme(filmeDestaque.id);
    else irPara("catalogo");
  } else {
    irPara(rotaInicial);
  }

  notificar("Bem-vindo(a) ao Watchly, " + nome + "!");
});

// Trecho organizado com auxílio de IA:
// URL.createObjectURL cria um endereço temporário para o vídeo escolhido no computador.
// URL.revokeObjectURL libera o endereço temporário anterior quando outro vídeo é selecionado.
document.getElementById("videoFile").addEventListener("change", function (event) {
  const arquivo = event.target.files && event.target.files[0];
  if (!arquivo) return;

  const video = document.getElementById("demoVideo");

  if (video.dataset.objectUrl) {
    URL.revokeObjectURL(video.dataset.objectUrl);
  }

  const url = URL.createObjectURL(arquivo);
  video.dataset.objectUrl = url;
  video.src = url;
  video.load();
});

// Primeira atualização das áreas do site.
renderizarInicio();
renderizarCatalogo();
renderizarFavoritos();
atualizarContagem();


// =========================================================

// 11. RECURSOS PESSOAIS — MINHA LISTA, AVALIAÇÕES E ESTATÍSTICAS
// =========================================================
// Recursos pessoais organizados com auxílio de IA.
// As informações ficam salvas no navegador, sem utilizar banco de dados.

const CHAVE_BIBLIOTECA = "watchly-biblioteca-v1";
var biblioteca = carregarBiblioteca();
let filmeSorteado = null;

// Trecho desenvolvido com auxílio de IA:
// Lê os dados salvos, transforma o texto JSON em objeto e confere se o formato é válido.
function carregarBiblioteca() {
  try {
    const valor = JSON.parse(localStorage.getItem(CHAVE_BIBLIOTECA) || "{}");
    return valor && typeof valor === "object" && !Array.isArray(valor) ? valor : {};
  } catch (erro) {
    return {};
  }
}

function salvarBiblioteca() {
  try {
    localStorage.setItem(CHAVE_BIBLIOTECA, JSON.stringify(biblioteca));
    return true;
  } catch (erro) {
    notificar("Não foi possível salvar os dados neste navegador.");
    return false;
  }
}

function dadosFilme(id) {
  return (biblioteca || {})[String(id)] || null;
}

function definirStatus(id, status) {
  const filme = filmes.find(f => f.id === Number(id));
  if (!filme) return;

  if (!["quero", "assistindo", "assistido"].includes(status)) {
    const registro = biblioteca[String(id)];

    if (registro) {
      delete registro.status;
      if (!Object.keys(registro).length) delete biblioteca[String(id)];
    }
  } else {
    biblioteca[String(id)] = { ...(biblioteca[String(id)] || {}), status };
  }

  salvarBiblioteca();
  atualizarRecursosPessoais();

  if (filmeAtual && filmeAtual.id === Number(id)) {
    renderizarAvaliacaoDetalhe(filmeAtual);
  }
}

function adicionarLista(id, status = "quero") {
  definirStatus(id, status);

  const filme = filmes.find(f => f.id === Number(id));
  if (filme) notificar(`“${filme.titulo}” atualizado na Minha Lista.`);
}

// Trecho desenvolvido com auxílio de IA:
// Esta função troca caracteres especiais por códigos HTML para evitar que textos
// digitados pelo usuário sejam interpretados como parte da marcação da página.
function escaparHTML(valor) {
  return String(valor ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

// Atenção: esta segunda declaração de card substitui a primeira no JavaScript.
// Ela acrescenta a situação e a avaliação pessoal aos cartões dos filmes.
// Mantida assim para não alterar a estrutura original do projeto.
function card(filme) {
  if (!filme) return "";

  const salvo = favoritos.includes(filme.id);
  const registro = dadosFilme(filme.id);

  return `
    <article class="movie-card">
      <div class="poster" onclick="abrirFilme(${filme.id})" role="button" tabindex="0"
           onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();abrirFilme(${filme.id})}"
           aria-label="Ver detalhes de ${escaparHTML(filme.titulo)}">
        <img src="${filme.poster}" alt="Pôster de ${escaparHTML(filme.titulo)}" loading="lazy"
             onerror="if(!this.dataset.fallback && '${filme.posterFallback || ''}'){this.dataset.fallback='1';this.src='${filme.posterFallback || ''}';}else{this.style.opacity='.15';this.alt='Pôster indisponível';}">
        <button class="heart ${salvo ? "saved" : ""}" onclick="event.stopPropagation();alternarFavorito(${filme.id})"
                aria-label="${salvo ? "Remover dos" : "Adicionar aos"} favoritos"
                title="${salvo ? "Remover dos favoritos" : "Adicionar aos favoritos"}">${salvo ? "♥" : "♡"}</button>
        <div class="poster-overlay"><span class="play-circle">＋</span></div>
      </div>
      <div class="movie-info">
        <h3 class="movie-name" onclick="abrirFilme(${filme.id})">${escaparHTML(filme.titulo)}</h3>
        <div class="movie-sub">
          <span>${filme.ano}</span>
          <span>${escaparHTML(filme.genero.join(" · "))}</span>
          <span class="rating">★ ${Number(filme.nota).toFixed(1)}</span>
        </div>
        ${registro && Number.isFinite(Number(registro.rating))
          ? `<div class="personal-rating">Minha nota: ${Number(registro.rating).toFixed(1).replace(".", ",")}/10</div>`
          : ""}
        <div class="movie-list-actions">
          <select aria-label="Situação de ${escaparHTML(filme.titulo)}" onchange="definirStatus(${filme.id},this.value)">
            <option value="" ${!registro?.status ? "selected" : ""}>+ Minha lista</option>
            <option value="quero" ${registro?.status === "quero" ? "selected" : ""}>Quero assistir</option>
            <option value="assistindo" ${registro?.status === "assistindo" ? "selected" : ""}>Assistindo</option>
            <option value="assistido" ${registro?.status === "assistido" ? "selected" : ""}>Já assisti</option>
          </select>
        </div>
      </div>
    </article>`;
}

// Atenção: esta segunda declaração de irPara substitui a primeira.
// Ela também atualiza as áreas pessoais quando o usuário abre Minha Lista ou Estatísticas.
function irPara(nome) {
  paginaAtual = nome;

  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const pagina = document.getElementById("page-" + nome);
  if (pagina) pagina.classList.add("active");

  document.querySelectorAll(".nav button").forEach(botao => {
    botao.classList.toggle("active", botao.dataset.page === nome);
  });

  const busca = document.getElementById("buscaGlobal");
  if (busca && nome !== "detalhes") busca.value = "";

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (nome === "favoritos") renderizarFavoritos();
  if (nome === "catalogo") renderizarCatalogo();
  if (nome === "minha-lista" || nome === "estatisticas") atualizarRecursosPessoais();
}

// =========================================================

// 12. AVALIAÇÃO E RESENHA DO FILME
// =========================================================

function renderizarAvaliacaoDetalhe(filme) {
  const registro = dadosFilme(filme.id) || {};
  const rating = document.getElementById("reviewRating");
  const review = document.getElementById("reviewText");
  const status = document.getElementById("detailStatus");
  const saved = document.getElementById("savedReview");

  if (!rating || !review || !status || !saved) return;

  rating.value = registro.rating ?? "";
  review.value = registro.review ?? "";
  status.value = registro.status ?? "";

  saved.textContent = registro.rating !== undefined
    ? `Sua avaliação: ${Number(registro.rating).toFixed(1).replace(".", ",")}/10${registro.review ? " — " + registro.review : ""}`
    : "Você ainda não avaliou este filme.";
}

// =========================================================
// 13. MINHA LISTA E FILTROS PESSOAIS
// =========================================================

function renderizarMinhaLista() {
  const genero = document.getElementById("listaGenero")?.value || "";
  const ano = document.getElementById("listaAno")?.value || "";
  const nota = Number(document.getElementById("listaNota")?.value || 0);
  const situacao = document.getElementById("listaSituacao")?.value || "";
  const statusList = ["quero", "assistindo", "assistido"];

  const filtrados = filmes.filter(f => {
    const r = dadosFilme(f.id);

    return r && statusList.includes(r.status) &&
      (!genero || f.genero.includes(genero)) &&
      (!ano || String(f.ano) === ano) &&
      (!nota || f.nota >= nota) &&
      (!situacao || r.status === situacao);
  });

  statusList.forEach(st => {
    const subset = filtrados.filter(f => dadosFilme(f.id)?.status === st);
    const target = document.getElementById("lista-" + st);

    if (target) {
      target.innerHTML = subset.length
        ? subset.map(card).join("")
        : '<p class="muted">Nenhum filme nesta categoria.</p>';
    }

    const count = document.getElementById("count-" + st);
    if (count) count.textContent = subset.length;
  });

  const vazio = document.getElementById("listaVazia");
  if (vazio) {
    vazio.classList.toggle("hidden", Object.keys(biblioteca).some(k => biblioteca[k]?.status));
  }

  const years = [...new Set(filmes.map(f => f.ano))].sort((a, b) => b - a);
  const genres = [...new Set(filmes.flatMap(f => f.genero))].sort((a, b) => a.localeCompare(b, "pt-BR"));

  preencherOpcoes("listaAno", years, "Todos os anos");
  preencherOpcoes("listaGenero", genres, "Todos os gêneros");
}

function preencherOpcoes(id, valores, padrao) {
  const el = document.getElementById(id);
  if (!el) return;

  const atual = el.value;
  const first = el.options[0]?.textContent || padrao;

  el.innerHTML = `<option value="">${escaparHTML(first)}</option>` +
    valores.map(v => `<option value="${escaparHTML(v)}">${escaparHTML(v)}</option>`).join("");

  if ([...el.options].some(o => o.value === atual)) el.value = atual;
}

// =========================================================
// 14. CÁLCULO E EXIBIÇÃO DAS ESTATÍSTICAS
// =========================================================

// Trecho desenvolvido com auxílio de IA:
// A função reúne os registros salvos, calcula médias e totais e monta os gráficos
// a partir dos dados do próprio usuário.
function minutosFilme(f) {
  const m = String(f.duracao).match(/(\d+)\s*h(?:\s*(\d+)\s*min)?/i);
  return m ? Number(m[1]) * 60 + Number(m[2] || 0) : 0;
}

function renderizarEstatisticas() {
  const entries = Object.entries(biblioteca)
    .map(([id, r]) => ({ filme: filmes.find(f => f.id === Number(id)), ...r }))
    .filter(x => x.filme);

  const assistidos = entries.filter(x => x.status === "assistido");
  const avaliados = entries.filter(x => Number.isFinite(Number(x.rating)));
  const media = avaliados.length
    ? avaliados.reduce((s, x) => s + Number(x.rating), 0) / avaliados.length
    : null;

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  set("stat-assistidos", assistidos.length);
  set("stat-quero", entries.filter(x => x.status === "quero").length);
  set("stat-assistindo", entries.filter(x => x.status === "assistindo").length);
  set("stat-media", media === null ? "—" : media.toFixed(1).replace(".", ","));

  const tempoTotal = assistidos.reduce((s, x) => s + minutosFilme(x.filme), 0);
  set("stat-tempo", `${Math.floor(tempoTotal / 60)}h ${tempoTotal % 60}min`);
  set("stat-avaliacoes", avaliados.length);

  const counts = {};
  assistidos.forEach(x => {
    x.filme.genero.forEach(g => counts[g] = (counts[g] || 0) + 1);
  });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const chart = document.getElementById("generosChart");

  if (chart) {
    chart.innerHTML = sorted.length
      ? sorted.map(([g, n]) => `
          <div class="bar-row">
            <span>${escaparHTML(g)}</span>
            <div class="bar-track">
              <div class="bar-fill" style="width:${100 * n / Math.max(...sorted.map(x => x[1]))}%"></div>
            </div>
            <b>${n}</b>
          </div>`).join("")
      : '<p class="muted">Marque filmes como assistidos para gerar o gráfico.</p>';
  }

  const high = document.getElementById("statsDestaques");

  if (high) {
    const ordenados = [...avaliados].sort((a, b) =>
      Number(b.rating) - Number(a.rating) ||
      new Date(b.ratedAt || 0) - new Date(a.ratedAt || 0)
    );

    high.innerHTML = ordenados.length
      ? `<div><strong>Mais bem avaliado:</strong> ${escaparHTML(ordenados[0].filme.titulo)} (${Number(ordenados[0].rating).toFixed(1).replace(".", ",")})</div>
         <div><strong>Menor avaliação:</strong> ${escaparHTML(ordenados[ordenados.length - 1].filme.titulo)} (${Number(ordenados[ordenados.length - 1].rating).toFixed(1).replace(".", ",")})</div>`
      : '<p class="muted">Avalie filmes para descobrir seus destaques.</p>';
  }

  const ranking = document.getElementById("rankingGrid");

  if (ranking) {
    ranking.innerHTML = [...avaliados]
      .sort((a, b) =>
        Number(b.rating) - Number(a.rating) ||
        new Date(b.ratedAt || 0) - new Date(a.ratedAt || 0)
      )
      .slice(0, 10)
      .map((x, i) => `
        <article class="ranking-item">
          <span class="ranking-position">#${i + 1}</span>
          <div class="poster" onclick="abrirFilme(${x.filme.id})">
            <img loading="lazy" src="${x.filme.poster}" alt="Pôster de ${escaparHTML(x.filme.titulo)}">
          </div>
          <h3>${escaparHTML(x.filme.titulo)}</h3>
          <p>★ ${Number(x.rating).toFixed(1).replace(".", ",")}</p>
        </article>`)
      .join("") || '<p class="muted">Suas avaliações aparecerão aqui.</p>';
  }
}

// =========================================================

// 15. SORTEIO DE FILME E AGENDA
// =========================================================

// Trecho desenvolvido com auxílio de IA:
// O sorteio escolhe um filme aleatório entre os que estão marcados como "Quero assistir".
function sortearFilme() {
  const candidatos = filmes.filter(f => dadosFilme(f.id)?.status === "quero");
  const area = document.getElementById("randomMovie");
  if (!area) return;

  if (!candidatos.length) {
    filmeSorteado = null;
    area.innerHTML = '<p>Adicione filmes à categoria “Quero assistir” para sortear um título.</p>';
    return;
  }

  const opcoes = candidatos.filter(f => f.id !== filmeSorteado?.id);
  const pool = opcoes.length ? opcoes : candidatos;
  filmeSorteado = pool[Math.floor(Math.random() * pool.length)];

  area.innerHTML = `
    <img src="${filmeSorteado.poster}" alt="Pôster de ${escaparHTML(filmeSorteado.titulo)}">
    <div>
      <h3>${escaparHTML(filmeSorteado.titulo)} (${filmeSorteado.ano})</h3>
      <p>${escaparHTML(filmeSorteado.sinopse)}</p>
      <p>★ Nota oficial: ${Number(filmeSorteado.nota).toFixed(1)} · ${escaparHTML(filmeSorteado.genero.join(", "))}</p>
      <button class="btn btn-outline" onclick="abrirFilme(${filmeSorteado.id})">Ver detalhes ↗</button>
    </div>`;
}

function renderizarAgenda() {
  const select = document.getElementById("scheduleMovie");
  const list = document.getElementById("scheduleList");
  if (!select || !list) return;

  const atual = select.value;
  const elegiveis = filmes.filter(f => dadosFilme(f.id)?.status);

  select.innerHTML = '<option value="">Selecione um filme da sua lista</option>' +
    elegiveis.map(f => `<option value="${f.id}">${escaparHTML(f.titulo)}</option>`).join("");

  if (elegiveis.some(f => String(f.id) === atual)) select.value = atual;

  const agendados = Object.entries(biblioteca)
    .filter(([id, r]) => r.scheduled)
    .map(([id, r]) => ({ filme: filmes.find(f => f.id === Number(id)), ...r }))
    .filter(x => x.filme)
    .sort((a, b) => (a.scheduled.date + a.scheduled.time).localeCompare(b.scheduled.date + b.scheduled.time));

  list.innerHTML = agendados.length
    ? agendados.map(x => `
        <div class="schedule-item">
          <div>
            <strong>${escaparHTML(x.filme.titulo)}</strong><br>
            <span>${new Date(x.scheduled.date + "T00:00:00").toLocaleDateString("pt-BR")}${x.scheduled.time ? " · " + x.scheduled.time : ""}</span>
          </div>
          <button onclick="removerAgendamento(${x.filme.id})">Remover</button>
        </div>`).join("")
    : '<p class="muted">Nenhuma sessão programada.</p>';
}

function removerAgendamento(id) {
  if (biblioteca[String(id)]) {
    delete biblioteca[String(id)].scheduled;
    salvarBiblioteca();
    renderizarAgenda();
  }
}

function atualizarRecursosPessoais() {
  renderizarMinhaLista();
  renderizarEstatisticas();
  renderizarAgenda();

  const area = document.getElementById("randomMovie");
  if (area && !filmeSorteado) sortearFilme();
}

// =========================================================
// 16. EVENTOS DOS FORMULÁRIOS PESSOAIS
// =========================================================

// Salva a nota e a resenha do filme selecionado.
document.getElementById("reviewForm")?.addEventListener("submit", event => {
  event.preventDefault();
  if (!filmeAtual) return;

  const rating = Number(document.getElementById("reviewRating").value.replace(",", "."));

  if (!Number.isFinite(rating) || rating < 0 || rating > 10) {
    notificar("Informe uma nota entre 0 e 10.");
    return;
  }

  const registro = biblioteca[String(filmeAtual.id)] || {};

  biblioteca[String(filmeAtual.id)] = {
    ...registro,
    rating,
    review: document.getElementById("reviewText").value.trim(),
    ratedAt: new Date().toISOString()
  };

  if (!biblioteca[String(filmeAtual.id)].status) {
    biblioteca[String(filmeAtual.id)].status = "assistido";
  }

  salvarBiblioteca();
  renderizarAvaliacaoDetalhe(filmeAtual);
  atualizarRecursosPessoais();
  notificar("Sua avaliação foi salva.");
});

// Exclui a avaliação e a resenha salvas para o filme atual.
document.getElementById("deleteReview")?.addEventListener("click", () => {
  if (!filmeAtual) return;

  const r = biblioteca[String(filmeAtual.id)];
  if (!r) return;

  delete r.rating;
  delete r.review;
  delete r.ratedAt;

  if (!r.status) delete biblioteca[String(filmeAtual.id)];

  salvarBiblioteca();
  renderizarAvaliacaoDetalhe(filmeAtual);
  atualizarRecursosPessoais();
  notificar("Avaliação excluída.");
});

document.getElementById("detailStatus")?.addEventListener("change", event => {
  if (filmeAtual) definirStatus(filmeAtual.id, event.target.value);
});

document.getElementById("removeFromList")?.addEventListener("click", () => {
  if (filmeAtual) {
    const r = biblioteca[String(filmeAtual.id)];

    if (r) {
      delete r.status;
      if (!Object.keys(r).length) delete biblioteca[String(filmeAtual.id)];
    }

    salvarBiblioteca();
    renderizarAvaliacaoDetalhe(filmeAtual);
    atualizarRecursosPessoais();
    notificar("Filme removido da sua lista.");
  }
});

["listaGenero", "listaAno", "listaNota", "listaSituacao"].forEach(id => {
  document.getElementById(id)?.addEventListener("change", renderizarMinhaLista);
});

document.getElementById("scheduleForm")?.addEventListener("submit", event => {
  event.preventDefault();

  const id = Number(document.getElementById("scheduleMovie").value);
  const date = document.getElementById("scheduleDate").value;
  const time = document.getElementById("scheduleTime").value;

  if (!id || !date) return;

  biblioteca[String(id)] = {
    ...(biblioteca[String(id)] || {}),
    scheduled: { date, time }
  };

  salvarBiblioteca();
  renderizarAgenda();
  event.target.reset();
  notificar("Sessão programada.");
});

// Atualiza as áreas pessoais assim que o arquivo é carregado.
atualizarRecursosPessoais();

// =========================================================
// 17. SINCRONIZAÇÃO ENTRE ABAS
// =========================================================

// Trecho desenvolvido com auxílio de IA:
// O evento storage avisa quando outra aba do mesmo site altera os dados salvos.
// Assim, esta aba lê novamente a biblioteca e atualiza as informações na tela.
window.addEventListener("storage", event => {
  if (event.key === CHAVE_BIBLIOTECA) {
    biblioteca = carregarBiblioteca();
    atualizarRecursosPessoais();

    if (filmeAtual) renderizarAvaliacaoDetalhe(filmeAtual);
  }
});