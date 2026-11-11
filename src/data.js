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
  {
    img: '/imagens/practitioner.png',
    alt: 'Certificação Cloud Practitioner',
    href: 'https://www.credly.com/badges/140d9c60-1bb7-4be7-b782-4faed87103cd',
  },
  {
    img: '/imagens/associate.png',
    alt: 'Certificação Solutions Architect Associate',
    href: 'https://www.credly.com/badges/26abccc5-f7c8-401d-8473-af64924c2e6f',
  },
  {
    img: '/imagens/professional.png',
    alt: 'Certificação Solutions Architect Professional',
    href: 'https://www.credly.com/badges/5ab9304d-0f96-4430-9714-b68e5cd58f91',
  },
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
