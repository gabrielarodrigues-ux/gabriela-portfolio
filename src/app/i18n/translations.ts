export type Lang = 'pt' | 'en';

const translations = {
  pt: {
    // Nav
    navWork: 'Trabalho',
    navProcess: 'Processo',
    navAbout: 'Sobre mim',
    navContact: 'Contato',
    navCta: 'Vamos conversar',
    cvLabel: 'Currículo',
    cvPt: 'Português',
    cvEn: 'English',

    // Hero
    available: 'Disponível para novos desafios',
    heroRole: 'Product Designer · Product Owner',
    heroHeading: 'Transformo problemas complexos em experiências digitais simples.',
    heroDesc: 'Atuo na interseção entre produto, design e tecnologia, participando desde o entendimento do problema até a definição, prototipação e entrega de soluções digitais.',
    heroCtaWork: 'Ver projetos',
    heroCtaAbout: 'Sobre mim',
    heroExp: '3 anos de experiência',
    heroExpSub: 'SaaS · Pagamentos · Checkout · Backoffice',
    heroProduto: 'PRODUTO',
    heroProdutoItems: ['Discovery', 'Backlog', 'Requisitos', 'Priorização'],
    heroDesign: 'DESIGN',
    heroDesignItems: ['UX Research', 'UI Design', 'Protótipos'],
    heroTech: 'TECH',
    heroTechItems: ['Figma', 'React', 'Agile'],

    // Introduction
    introLabel: 'Sobre o trabalho',
    introHeading: 'Design, produto e tecnologia no mesmo processo.',
    introDesc: 'Como Product Designer e Product Owner, participo de diferentes etapas do desenvolvimento de produtos: discovery, levantamento de necessidades, definição de requisitos, priorização, UX/UI, prototipação, Design Systems e acompanhamento da implementação.',
    introCols: [
      { label: 'PRODUTO', desc: 'Discovery, requisitos, backlog, priorização e estratégia.' },
      { label: 'DESIGN', desc: 'UX, UI, prototipação, Design Systems e usabilidade.' },
      { label: 'DELIVERY', desc: 'Parceria com desenvolvimento, QA e stakeholders.' },
    ],

    // Portfolio
    portfolioLabel: 'Portfólio',
    portfolioHeading: 'Projetos selecionados',
    portfolioDesc: 'Projetos que representam diferentes desafios, contextos e formas de atuação em produto e design.',
    myRole: 'MEU PAPEL',
    platform: 'PLATAFORMA',
    viewCase: 'Ver case',
    cases: [
      {
        category: 'PRODUCT DESIGN · UX/UI · MOBILE',
        description: 'Uma experiência digital criada para ajudar mulheres que viajam sozinhas a se sentirem mais seguras, conectadas e confiantes durante suas jornadas.',
        role: 'Product Designer',
        areas: 'UX Research · UX/UI · Product Strategy · UI Design',
      },
      {
        category: 'PRODUCT DESIGN · UX/UI · PAGAMENTOS',
        description: 'Evolução da experiência de checkout para tornar pagamentos mais simples, flexíveis e consistentes.',
        role: 'Product Designer + Product Owner',
        areas: 'UX/UI · Product · Payments · Design System',
      },
      {
        category: 'PRODUCT DESIGN · UX/UI · SAAS',
        description: 'Uma nova experiência para que usuários possam gerenciar assinaturas, pagamentos, cartões e informações da conta de forma simples e intuitiva.',
        role: 'Product Designer + Product Owner',
        areas: 'UX/UI · Product · Design System · Responsive',
      },
      {
        category: 'PRODUCT · UX/UI · SAAS',
        description: 'Atuação na evolução de uma plataforma complexa, conectando necessidades de negócio, experiência do usuário e viabilidade técnica.',
        role: 'Product Owner + Product Designer',
        areas: 'Discovery · Product · UX/UI · Design System',
      },
      {
        category: 'DESIGN SYSTEM · UX/UI',
        description: 'Criação e evolução de padrões e componentes para construir experiências consistentes e escaláveis.',
        role: 'Product Designer',
        areas: 'Design System · Component Library · Tokens · Documentation',
      },
    ],

    // Process
    processLabel: 'Metodologia',
    processHeading: 'Do problema à entrega.',
    processDesc: 'Meu processo conecta estratégia, experiência e execução.',
    processSteps: [
      { num: '01', title: 'ENTENDER', items: ['Discovery', 'Contexto', 'Usuários', 'Problema'] },
      { num: '02', title: 'DEFINIR', items: ['Requisitos', 'Escopo', 'Prioridades', 'Objetivos'] },
      { num: '03', title: 'EXPLORAR', items: ['User Flows', 'Arquitetura', 'Wireframes'] },
      { num: '04', title: 'PROJETAR', items: ['UX/UI', 'Protótipos', 'Design System'] },
      { num: '05', title: 'CONSTRUIR', items: ['Desenvolvimento', 'QA', 'Stakeholders'] },
      { num: '06', title: 'EVOLUIR', items: ['Feedback', 'Validação', 'Métricas', 'Iteração'] },
    ],

    // Hybrid role
    hybridLabel: 'Diferencial',
    hybridHeading: 'Meu diferencial está em conectar produto e design.',
    hybridDesc: 'Minha atuação como Product Designer e Product Owner permite que eu participe tanto da definição da experiência quanto das decisões que tornam uma solução viável para o produto e para o negócio.',
    hybridCols: [
      { label: 'PRODUTO', desc: 'Discovery, backlog, requisitos, priorização, user stories, critérios de aceite e planejamento.', color: '#6D5DF5' },
      { label: 'DESIGN', desc: 'UX Research, fluxos, wireframes, protótipos, UI e Design Systems.', color: '#A78BFA' },
      { label: 'COLABORAÇÃO', desc: 'Trabalho próximo de desenvolvimento, QA, stakeholders e outras áreas.', color: '#34D399' },
    ],

    // About
    aboutLabel: 'Sobre mim',
    aboutHeading: 'Prazer, Gabriela.',
    aboutParagraphs: [
      'Sou Product Designer e Product Owner, atuando na interseção entre experiência do usuário, produto e tecnologia.',
      'Minha experiência envolve produtos digitais, plataformas SaaS, pagamentos, checkout, backoffice e experiências de gerenciamento de assinaturas.',
      'Participo de todo o ciclo do produto, desde discovery e definição de requisitos até prototipação, desenvolvimento, validação e evolução.',
      'Tenho interesse em problemas complexos, produtos digitais e experiências que consigam ser simples para quem usa e eficientes para quem constrói.',
    ],
    toolsLabel: 'FERRAMENTAS',
    skillsLabel: 'COMPETÊNCIAS',
    certLabel: 'Certificação Google',
    certTitle: 'Google UX Design',
    courseOf: 'de',
    courseDone: 'Concluído',
    courseProgress: 'Em andamento',

    // Contact
    contactLabel: 'Contato',
    contactHeading: 'Vamos construir algo juntos?',
    contactDesc: 'Se você está procurando alguém que consiga conectar design, produto e tecnologia, vamos conversar.',
    contactCta: 'Entrar em contato',

    // Footer
    footerRole: 'Product Designer · Product Owner',
    footerNavLabels: ['Projetos', 'Sobre mim', 'Processo', 'Contato'],
    footerNavHrefs: ['/#trabalho', '/#sobre', '/#processo', '/#contato'],
  },

  en: {
    // Nav
    navWork: 'Work',
    navProcess: 'Process',
    navAbout: 'About me',
    navContact: 'Contact',
    navCta: "Let's talk",
    cvLabel: 'Resume',
    cvPt: 'Portuguese',
    cvEn: 'English',

    // Hero
    available: 'Available for new challenges',
    heroRole: 'Product Designer · Product Owner',
    heroHeading: 'I turn complex problems into simple digital experiences.',
    heroDesc: 'I work at the intersection of product, design and technology — from understanding the problem to defining, prototyping and delivering digital solutions.',
    heroCtaWork: 'View projects',
    heroCtaAbout: 'About me',
    heroExp: '3 years of experience',
    heroExpSub: 'SaaS · Payments · Checkout · Backoffice',
    heroProduto: 'PRODUCT',
    heroProdutoItems: ['Discovery', 'Backlog', 'Requirements', 'Prioritization'],
    heroDesign: 'DESIGN',
    heroDesignItems: ['UX Research', 'UI Design', 'Prototypes'],
    heroTech: 'TECH',
    heroTechItems: ['Figma', 'React', 'Agile'],

    // Introduction
    introLabel: 'About the work',
    introHeading: 'Design, product and technology in the same process.',
    introDesc: 'As a Product Designer and Product Owner, I participate in different stages of product development: discovery, requirements gathering, definition, prioritization, UX/UI, prototyping, Design Systems and implementation follow-up.',
    introCols: [
      { label: 'PRODUCT', desc: 'Discovery, requirements, backlog, prioritization and strategy.' },
      { label: 'DESIGN', desc: 'UX, UI, prototyping, Design Systems and usability.' },
      { label: 'DELIVERY', desc: 'Partnership with development, QA and stakeholders.' },
    ],

    // Portfolio
    portfolioLabel: 'Portfolio',
    portfolioHeading: 'Selected projects',
    portfolioDesc: 'Projects representing different challenges, contexts and ways of working in product and design.',
    myRole: 'MY ROLE',
    platform: 'PLATFORM',
    viewCase: 'View case',
    cases: [
      {
        category: 'PRODUCT DESIGN · UX/UI · MOBILE',
        description: 'A digital experience created to help women who travel alone feel safer, more connected and confident during their journeys.',
        role: 'Product Designer',
        areas: 'UX Research · UX/UI · Product Strategy · UI Design',
      },
      {
        category: 'PRODUCT DESIGN · UX/UI · PAYMENTS',
        description: 'Evolution of the checkout experience to make payments simpler, more flexible and consistent.',
        role: 'Product Designer + Product Owner',
        areas: 'UX/UI · Product · Payments · Design System',
      },
      {
        category: 'PRODUCT DESIGN · UX/UI · SAAS',
        description: 'A new experience for users to manage subscriptions, payments, cards and account information simply and intuitively.',
        role: 'Product Designer + Product Owner',
        areas: 'UX/UI · Product · Design System · Responsive',
      },
      {
        category: 'PRODUCT · UX/UI · SAAS',
        description: 'Involvement in evolving a complex platform, connecting business needs, user experience and technical feasibility.',
        role: 'Product Owner + Product Designer',
        areas: 'Discovery · Product · UX/UI · Design System',
      },
      {
        category: 'DESIGN SYSTEM · UX/UI',
        description: 'Creation and evolution of patterns and components to build consistent, scalable experiences.',
        role: 'Product Designer',
        areas: 'Design System · Component Library · Tokens · Documentation',
      },
    ],

    // Process
    processLabel: 'Methodology',
    processHeading: 'From problem to delivery.',
    processDesc: 'My process connects strategy, experience and execution.',
    processSteps: [
      { num: '01', title: 'UNDERSTAND', items: ['Discovery', 'Context', 'Users', 'Problem'] },
      { num: '02', title: 'DEFINE', items: ['Requirements', 'Scope', 'Priorities', 'Goals'] },
      { num: '03', title: 'EXPLORE', items: ['User Flows', 'Architecture', 'Wireframes'] },
      { num: '04', title: 'DESIGN', items: ['UX/UI', 'Prototypes', 'Design System'] },
      { num: '05', title: 'BUILD', items: ['Development', 'QA', 'Stakeholders'] },
      { num: '06', title: 'EVOLVE', items: ['Feedback', 'Validation', 'Metrics', 'Iteration'] },
    ],

    // Hybrid role
    hybridLabel: 'Differentiator',
    hybridHeading: 'My edge is connecting product and design.',
    hybridDesc: 'My work as both Product Designer and Product Owner lets me participate in shaping the experience and in the decisions that make a solution viable for the product and business.',
    hybridCols: [
      { label: 'PRODUCT', desc: 'Discovery, backlog, requirements, prioritization, user stories, acceptance criteria and planning.', color: '#6D5DF5' },
      { label: 'DESIGN', desc: 'UX Research, flows, wireframes, prototypes, UI and Design Systems.', color: '#A78BFA' },
      { label: 'COLLABORATION', desc: 'Close collaboration with development, QA, stakeholders and other teams.', color: '#34D399' },
    ],

    // About
    aboutLabel: 'About me',
    aboutHeading: "Nice to meet you, I'm Gabriela.",
    aboutParagraphs: [
      "I'm a Product Designer and Product Owner, working at the intersection of user experience, product and technology.",
      'My experience covers digital products, SaaS platforms, payments, checkout, backoffice and subscription management experiences.',
      'I participate in the full product lifecycle — from discovery and requirements definition to prototyping, development, validation and iteration.',
      "I'm interested in complex problems, digital products and experiences that can be simple for users and efficient for builders.",
    ],
    toolsLabel: 'TOOLS',
    skillsLabel: 'SKILLS',
    certLabel: 'Google Certificate',
    certTitle: 'Google UX Design',
    courseOf: 'of',
    courseDone: 'Completed',
    courseProgress: 'In progress',

    // Contact
    contactLabel: 'Contact',
    contactHeading: "Let's build something together?",
    contactDesc: "If you're looking for someone who can connect design, product and technology, let's talk.",
    contactCta: 'Get in touch',

    // Footer
    footerRole: 'Product Designer · Product Owner',
    footerNavLabels: ['Projects', 'About me', 'Process', 'Contact'],
    footerNavHrefs: ['/#trabalho', '/#sobre', '/#processo', '/#contato'],
  },
} as const;

export type Tr = typeof translations['pt'];
export default translations;
