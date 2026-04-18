/* ── Dados das habilidades ──────────────────────────── */
const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'Responsive Design',
  'Git & GitHub', 'Figma', 'React (estudando)', 'Node.js (básico)',
  'Acessibilidade', 'Performance Web'
];

/* ── Dados dos projetos ─────────────────────────────── */
const projects = [
  {
    icon: '📋',
    titulo: 'Sistema de Cadastro',
    descricao: 'Aplicação web para gerenciamento de usuários com CRUD completo, validação de formulários em tempo real e armazenamento no LocalStorage. Interface limpa com feedback visual para cada ação.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    link: '#'
  },
  {
    icon: '🧮',
    titulo: 'Calculadora Científica',
    descricao: 'Calculadora com operações básicas e funções científicas (seno, cosseno, raiz quadrada). Suporte a teclado, histórico de operações e tema dark/light alternável.',
    tecnologias: ['HTML5', 'CSS Grid', 'JavaScript', 'Math API'],
    link: '#'
  },
  {
    icon: '🚀',
    titulo: 'Landing Page SaaS',
    descricao: 'Página de conversão para produto fictício de produtividade. Inclui animações de entrada via IntersectionObserver, seção de preços, depoimentos e formulário de captura de leads.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox'],
    link: '#'
  },
  {
    icon: '🌦️',
    titulo: 'App de Previsão do Tempo',
    descricao: 'Consumo de API pública de meteorologia para exibir temperatura, umidade e condição climática por cidade. Layout responsivo com ícones dinâmicos e histórico de buscas recentes.',
    tecnologias: ['JavaScript', 'Fetch API', 'CSS3', 'OpenWeather'],
    link: '#'
  },
  {
    icon: '📝',
    titulo: 'Gerenciador de Tarefas',
    descricao: 'To-do list com drag-and-drop para reordenar tarefas, filtros por status (pendente/concluída/em progresso) e persistência de dados no LocalStorage. Design minimalista e acessível.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Drag & Drop API'],
    link: '#'
  },
  {
    icon: '🎨',
    titulo: 'Gerador de Paletas',
    descricao: 'Ferramenta para criação e exportação de paletas de cores. Gera variações automáticas a partir de uma cor-base, exibe códigos HEX/RGB/HSL e permite salvar favoritos.',
    tecnologias: ['JavaScript', 'CSS Variables', 'Clipboard API', 'HTML5'],
    link: '#'
  }
];

/* ── Renderiza habilidades ──────────────────────────── */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = skills.map(s =>
    `<span class="skill-tag">${s}</span>`
  ).join('');
}

/* ── Renderiza cards de projetos ────────────────────── */
function renderProjects() {
  const grid = document.getElementById('projetos-grid');
  grid.innerHTML = projects.map(p => `
    <article class="project-card">
      <div class="card-icon">${p.icon}</div>
      <h3 class="card-title">${p.titulo}</h3>
      <p class="card-desc">${p.descricao}</p>
      <div class="card-techs">
        ${p.tecnologias.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>
      <a href="${p.link}" class="card-link" target="_blank" rel="noopener">
        Ver projeto <span>→</span>
      </a>
    </article>
  `).join('');
}

/* ── Menu hamburguer ────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navDrawer  = document.getElementById('nav-drawer');

hamburger.addEventListener('click', () => {
  const isOpen = navDrawer.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

function closeMenu() {
  navDrawer.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', false);
}

/* Fecha menu ao clicar fora */
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navDrawer.contains(e.target)) {
    closeMenu();
  }
});

/* ── Formulário de contato ──────────────────────────── */
const contactForm  = document.getElementById('contact-form');
const btnSubmit    = document.getElementById('btn-submit');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  btnSubmit.disabled    = true;
  btnSubmit.textContent = 'Enviando...';

  setTimeout(() => {
    contactForm.reset();
    btnSubmit.disabled    = false;
    btnSubmit.textContent = 'Enviar Mensagem →';
    formFeedback.classList.add('show');

    setTimeout(() => formFeedback.classList.remove('show'), 5000);
  }, 1500);
});

/* ── Ano dinâmico no footer ─────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── Init ───────────────────────────────────────────── */
renderSkills();
renderProjects();
