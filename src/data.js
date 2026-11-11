export const perfil = {
  nome: 'André Novaes',
  idade: 22,
  cargo: 'DevOps Engineer Jr · CloudDog',
  foto: '/imagens/killer-queen.jpg',
  sobre:
    'DevOps Engineer conduzindo migrações e modernização de infraestrutura em ambientes AWS, GCP e Azure, do planejamento técnico à entrega, em consultoria multi-cloud para múltiplos clientes. Estudante de Sistemas de Informação na UMC.',
}

export const experiencia = [
  {
    cargo: 'DevOps Engineer Jr',
    empresa: 'CloudDog',
    descricao:
      'Migrações AWS → GCP (EKS → GKE, RDS → Cloud SQL), Kubernetes, GitOps com ArgoCD, CI/CD, Terraform e segurança AWS. Redução de 86% no tempo de relatórios de um cliente e conectividade privada multi-cloud AWS ↔ Azure.',
  },
]

export const formacao = {
  curso: 'Sistemas de Informação',
  instituicao: 'UMC — Universidade de Mogi das Cruzes',
  status: 'Cursando o último semestre',
}

export const certificacoesTexto = [
  'AWS 3x Certified',
  'Cloud Practitioner',
  'Solutions Architect Associate',
  'Solutions Architect Professional',
]

export const certificacoes = [
  { img: '/imagens/practitioner.png', alt: 'Certificação Practitioner' },
  { img: '/imagens/associate.webp', alt: 'Certificação Associate' },
]

export const stacks = [
  { nome: 'AWS', categoria: 'Cloud' },
  { nome: 'GCP', categoria: 'Cloud' },
  { nome: 'Azure', categoria: 'Cloud' },
  { nome: 'Kubernetes', categoria: 'Orquestração & IaC' },
  { nome: 'Terraform', categoria: 'Orquestração & IaC' },
  { nome: 'Docker', categoria: 'Orquestração & IaC' },
  { nome: 'ArgoCD', categoria: 'Orquestração & IaC' },
  { nome: 'GitHub Actions', categoria: 'CI/CD & Qualidade' },
  { nome: 'Azure DevOps', categoria: 'CI/CD & Qualidade' },
  { nome: 'SonarQube', categoria: 'CI/CD & Qualidade' },
  { nome: 'Python', categoria: 'Linguagens & SO' },
  { nome: 'Linux', categoria: 'Linguagens & SO' },
]

export const projetos = [
  {
    titulo: 'Site de Receitas',
    descricao: 'Site em HTML, CSS e JavaScript com receitas, criado a partir de um layout no Figma.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
  },
  {
    titulo: 'CRUD de CPF',
    descricao: 'Cadastro com criação, leitura, atualização e exclusão de registros com validação de CPF.',
    tags: ['CRUD', 'Validação'],
  },
  {
    titulo: 'Login Seguro',
    descricao: 'Tela de autenticação aplicando boas práticas de segurança.',
    tags: ['Segurança', 'Autenticação'],
  },
  {
    titulo: 'Estados e Cidades (IBGE)',
    descricao: 'Selects dependentes de estados e cidades consumindo a API do IBGE.',
    tags: ['JavaScript', 'API', 'JSON'],
  },
  {
    titulo: 'Feriados (BrasilAPI)',
    descricao: 'Consulta de feriados nacionais consumindo a BrasilAPI.',
    tags: ['JavaScript', 'API', 'JSON'],
  },
  {
    titulo: 'Web com Thymeleaf',
    descricao: 'Aplicação web server-side em Java com templates Thymeleaf.',
    tags: ['Java', 'Spring', 'Thymeleaf'],
  },
]

export const contatos = [
  {
    nome: 'andrenovaes-dev',
    href: 'https://www.linkedin.com/in/andrenovaes-dev/',
    icone: '/imagens/3536505.png',
    alt: 'LinkedIn',
  },
  {
    nome: 'KunglaoGaucho',
    href: 'https://github.com/KunglaoGaucho',
    icone: '/imagens/25657.png',
    alt: 'GitHub',
  },
  {
    nome: 'andrenovaes2210@gmail.com',
    href: 'mailto:andrenovaes2210@gmail.com',
    icone: '/imagens/2504727.png',
    alt: 'Email',
  },
]
