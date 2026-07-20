// Conteúdo central do site PRONE — Associação Mutualista de Proteção Veicular.
// ⚠️ Contatos abaixo são PLACEHOLDER — troque pelos dados reais antes de publicar.

export const site = {
  name: "PRONE",
  legalName: "PRONE Associação Mutualista",
  tagline: "Proteção para caminhões e carretas que cabe no seu bolso",
  description:
    "Associação mutualista de proteção veicular para caminhões e carretas: rateio justo, assistência 24h e rastreamento para o transportador em todo o Brasil.",
  url: "https://prone.com.br",

  whatsapp: "5583999932737",
  whatsappLabel: "(83) 99993-2737",
  cnpj: "65.570.239/0001-42",
  instagram: "https://instagram.com/proneassociacao",
};

export const whatsappLink = (msg = "Olá! Quero fazer uma cotação de proteção veicular com a PRONE.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

// Sistema externo de solicitação de orçamento (as cotações caem aqui p/ os vendedores)
export const cotacaoUrl = "https://cotacao.me/zlyvEaGd";
// Área do associado (login Hinova SGA)
export const areaAssociadoUrl = "https://area-sistemas.hinova.com.br/sga/area/v5/login/";

export const nav = [
  { label: "A PRONE", href: "/sobre" },
  { label: "Coberturas", href: "/coberturas" },
  { label: "Planos", href: "/planos" },
  { label: "Dúvidas", href: "/duvidas" },
  { label: "Contato", href: "/contato" },
];

export const stats = [
  { value: 12000, suffix: "+", label: "Caminhões protegidos" },
  { value: 98, suffix: "%", label: "Índice de recuperação" },
  { value: 24, suffix: "h", label: "Assistência todos os dias" },
  { value: 100, suffix: "%", label: "Cobertura nacional" },
];

export const diferenciais = [
  {
    icon: "handshake",
    title: "Mutualismo justo",
    text: "Você entra num fundo coletivo e divide os custos por rateio. Sem lucro de seguradora, sem letra miúda.",
  },
  {
    icon: "bolt",
    title: "Adesão sem burocracia",
    text: "Aceitamos todos os perfis e idades de veículo. Cotação na hora e ativação rápida, sem análise complicada.",
  },
  {
    icon: "radar",
    title: "Rastreamento 24h",
    text: "Monitoramento em tempo real e bloqueio remoto pelo app, com central de recuperação sempre acionável.",
  },
  {
    icon: "wrench",
    title: "Rede credenciada",
    text: "Guincho, borracharia, chaveiro e oficinas parceiras espalhadas por todo o país para te socorrer.",
  },
  {
    icon: "wallet",
    title: "Mensalidade acessível",
    text: "Proteção completa por uma fração do preço de um seguro tradicional, sem franquias abusivas.",
  },
  {
    icon: "shield",
    title: "Transparência total",
    text: "Você acompanha o rateio, os eventos e a saúde da associação. Prestação de contas de verdade.",
  },
] as const;

export const coberturas = [
  { icon: "lock", title: "Roubo e furto", text: "Levaram seu veículo? Você recebe a indenização pela tabela de mercado." },
  { icon: "impact", title: "Colisão e acidente", text: "Batida, capotamento, abalroamento. Cobrimos perda total e parcial." },
  { icon: "flame", title: "Incêndio", text: "Fogo, curto-circuito ou explosão: o prejuízo não fica no seu colo." },
  { icon: "storm", title: "Fenômenos naturais", text: "Enchente, granizo, alagamento, queda de árvore. A natureza não te pega de surpresa." },
  { icon: "users", title: "Danos a terceiros", text: "Causou um acidente? Cobrimos os danos a outras pessoas e veículos." },
  { icon: "lifebuoy", title: "Assistência 24h", text: "Guincho pesado, chaveiro, pane seca e troca de pneu a qualquer hora." },
  { icon: "glass", title: "Vidros e faróis", text: "Trincou o para-brisa ou quebrou o farol? Reparo e troca inclusos." },
  { icon: "truck", title: "Casco e implementos", text: "Cobertura para o casco do veículo e seus implementos em caso de acidente ou sinistro." },
];

export const segmentos = [
  {
    key: "caminhao",
    label: "Caminhões",
    title: "Seu caminhão rodando com segurança",
    text: "Feito para o transportador. Proteção de casco, rede de guincho pesado e cobertura nacional para você não parar.",
    items: ["Casco e implementos", "Guincho pesado", "Rastreamento incluso", "Cobertura de terceiros"],
  },
  {
    key: "carreta",
    label: "Carretas",
    title: "Sua carreta sempre protegida",
    text: "Proteção para cavalo mecânico, carreta e implementos, com assistência 24h na estrada.",
    items: ["Cavalo e carreta", "Danos a terceiros", "Guincho pesado 24h", "Rastreamento incluso"],
  },
  {
    key: "frota",
    label: "Frotas",
    title: "Gestão e proteção da sua frota",
    text: "Painel de gestão, rastreamento de todos os caminhões e condições especiais por volume para transportadoras.",
    items: ["Painel de gestão", "Telemetria e relatórios", "Cerca virtual", "Condição por volume"],
  },
] as const;

export const passos = [
  { n: "01", title: "Faça a cotação", text: "Fale com a gente pelo WhatsApp e receba o valor da sua mensalidade na hora." },
  { n: "02", title: "Vistoria simples", text: "Uma vistoria rápida, presencial ou por app, para registrar o estado do veículo." },
  { n: "03", title: "Adesão", text: "Assine o termo de adesão à associação e escolha as coberturas do seu plano." },
  { n: "04", title: "Proteção ativa", text: "Pronto! Seu veículo já está protegido e você acompanha tudo pelo aplicativo." },
];

export const appFeatures = [
  "Aciona guincho e assistência com 1 toque",
  "Rastreamento e localização em tempo real",
  "Bloqueio remoto e cerca virtual",
  "2ª via de boleto e histórico de pagamentos",
  "Abertura e acompanhamento de eventos",
];

export const depoimentos = [
  {
    name: "Carlos Menezes",
    role: "Caminhoneiro autônomo — BR-116",
    text: "Meu caminhão é meu sustento. Tentaram levar a carga e a central agiu na hora. Recuperamos o caminhão no mesmo dia.",
  },
  {
    name: "Juliana Rocha",
    role: "Transportadora — Goiânia/GO",
    text: "Saí do seguro tradicional e economizo bem por mês. A assistência 24h já me tirou de apuro com pane na estrada duas vezes.",
  },
  {
    name: "Transportes Vale Sul",
    role: "Frota de 14 caminhões",
    text: "O painel de gestão e o rastreamento mudaram nossa operação. Suporte que entende de quem vive na estrada.",
  },
];

export const faq = [
  {
    q: "A PRONE é um seguro?",
    a: "Não. A PRONE é uma associação mutualista sem fins lucrativos. Os associados formam um fundo comum e dividem os custos dos eventos por rateio, o que torna a proteção mais acessível que um seguro tradicional.",
  },
  {
    q: "Preciso de vistoria para aderir?",
    a: "Sim, uma vistoria simples que pode ser feita presencialmente ou pelo próprio aplicativo. Ela registra o estado do veículo no momento da adesão.",
  },
  {
    q: "Vocês aceitam veículos mais antigos ou com restrição?",
    a: "Sim. Trabalhamos com todos os perfis de associado e não há limite rígido de idade do veículo. Fale com um consultor para conhecer as condições do seu caso.",
  },
  {
    q: "Como funciona o rateio?",
    a: "Todo mês os custos dos eventos cobertos são divididos entre os associados de forma proporcional e transparente. Você acompanha tudo pelo app e pela prestação de contas da associação.",
  },
  {
    q: "Existe carência?",
    a: "Sim, há um período de carência inicial padrão do mercado mutualista para determinadas coberturas. O consultor informa os prazos exatos na sua cotação.",
  },
  {
    q: "Atende em todo o Brasil?",
    a: "Sim. A rede de assistência e a cobertura são nacionais, incluindo guincho, chaveiro e oficinas credenciadas em todas as regiões.",
  },
];
