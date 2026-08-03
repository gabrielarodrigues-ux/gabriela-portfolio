import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, Circle, CheckCircle2 } from 'lucide-react';
import photoGabriela from '../../imports/_MG_7184__1_-1.jpg';

const ACCENT = '#6D5DF5';
const BG = '#F8F8F6';
const TEXT = '#171717';
const SECONDARY = '#666666';
const BORDER = '#E5E5E2';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealDiv({ children, style, delay = 0, ...props }: any) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

const cases = [
  {
    id: 'go-girl',
    number: '01',
    category: 'PRODUCT DESIGN · UX/UI · MOBILE',
    title: 'Go Girl',
    description: 'Uma experiência digital criada para ajudar mulheres que viajam sozinhas a se sentirem mais seguras, conectadas e confiantes durante suas jornadas.',
    role: 'Product Designer',
    areas: 'UX Research · UX/UI · Product Strategy · UI Design',
    platform: 'Mobile',
    bg: '#0D0D2B',
    accent: '#E91E8C',
    tag: '#E91E8C',
  },
  {
    id: 'checkout-v3',
    number: '02',
    category: 'PRODUCT DESIGN · UX/UI · PAYMENTS',
    title: 'Checkout V3',
    description: 'Evolução da experiência de checkout para tornar pagamentos mais simples, flexíveis e consistentes.',
    role: 'Product Designer + Product Owner',
    areas: 'UX/UI · Product · Payments · Design System',
    platform: 'Web',
    bg: '#F0F4FF',
    accent: '#3B5BDB',
    tag: '#3B5BDB',
  },
  {
    id: 'portal-assinante',
    number: '03',
    category: 'PRODUCT DESIGN · UX/UI · SAAS',
    title: 'Portal do Assinante',
    description: 'Uma nova experiência para que usuários possam gerenciar assinaturas, pagamentos, cartões e informações da conta de forma simples e intuitiva.',
    role: 'Product Designer + Product Owner',
    areas: 'UX/UI · Product · Design System · Responsive',
    platform: 'Web + Mobile',
    bg: '#F0FFF4',
    accent: '#2D8A4E',
    tag: '#2D8A4E',
  },
  {
    id: 'backoffice',
    number: '04',
    category: 'PRODUCT · UX/UI · SAAS',
    title: 'Evolução do Backoffice',
    description: 'Atuação na evolução de uma plataforma complexa, conectando necessidades de negócio, experiência do usuário e viabilidade técnica.',
    role: 'Product Owner + Product Designer',
    areas: 'Discovery · Product · UX/UI · Design System',
    platform: 'Web',
    bg: '#FFF8F0',
    accent: '#E07B39',
    tag: '#E07B39',
  },
  {
    id: 'design-system',
    number: '05',
    category: 'DESIGN SYSTEM · UX/UI',
    title: 'Design System',
    description: 'Criação e evolução de padrões e componentes para construir experiências consistentes e escaláveis.',
    role: 'Product Designer',
    areas: 'Design System · Component Library · Tokens · Documentation',
    platform: 'Figma + Web',
    bg: '#F5F0FF',
    accent: ACCENT,
    tag: ACCENT,
  },
];

function CaseVisual({ c }: { c: typeof cases[0] }) {
  if (c.id === 'go-girl') {
    return (
      <div style={{ background: c.bg, borderRadius: 16, padding: 32, minHeight: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(233,30,140,0.15)' }} />
        <div style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(147,51,234,0.15)' }} />
        {[
          { bg: '#1a1a3e', labels: ['Guia Seguro', 'Check-in'] },
          { bg: '#14143a', labels: ['Comunidade', 'Alertas'] },
        ].map((phone, i) => (
          <div key={i} style={{ width: 90, height: 160, background: phone.bg, borderRadius: 14, border: '2px solid rgba(233,30,140,0.4)', display: 'flex', flexDirection: 'column', padding: 10, gap: 6 }}>
            <div style={{ height: 8, background: c.accent, borderRadius: 4, width: '60%' }} />
            <div style={{ height: 5, background: 'rgba(255,255,255,0.2)', borderRadius: 3 }} />
            <div style={{ height: 5, background: 'rgba(255,255,255,0.15)', borderRadius: 3, width: '80%' }} />
            {phone.labels.map(l => (
              <div key={l} style={{ background: 'rgba(233,30,140,0.25)', borderRadius: 6, padding: '4px 6px', marginTop: 4 }}>
                <div style={{ color: '#fff', fontSize: 7, fontWeight: 600 }}>{l}</div>
              </div>
            ))}
            <div style={{ marginTop: 'auto', height: 20, background: c.accent, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ color: '#fff', fontSize: 6, fontWeight: 700 }}>Go Girl</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (c.id === 'checkout-v3') {
    return (
      <div style={{ background: c.bg, borderRadius: 16, padding: 24, minHeight: 220, overflow: 'hidden' }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: c.accent, marginBottom: 12 }}>Checkout</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            {['Cartão', 'PIX', 'Boleto'].map(m => (
              <div key={m} style={{ flex: 1, background: m === 'Cartão' ? c.accent : '#F0F4FF', borderRadius: 6, padding: '6px 4px', textAlign: 'center', fontSize: 8, fontWeight: 600, color: m === 'Cartão' ? '#fff' : c.accent }}>{m}</div>
            ))}
          </div>
          <div style={{ background: '#f5f7ff', borderRadius: 8, padding: 10, marginBottom: 8 }}>
            <div style={{ fontSize: 8, color: '#999', marginBottom: 4 }}>Número do cartão</div>
            <div style={{ fontSize: 10, color: '#333', fontWeight: 600 }}>•••• •••• •••• 4242</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, background: '#f5f7ff', borderRadius: 8, padding: 8 }}>
              <div style={{ fontSize: 7, color: '#999' }}>Validade</div>
              <div style={{ fontSize: 9, color: '#333', fontWeight: 600 }}>12/27</div>
            </div>
            <div style={{ flex: 1, background: '#f5f7ff', borderRadius: 8, padding: 8 }}>
              <div style={{ fontSize: 7, color: '#999' }}>CVV</div>
              <div style={{ fontSize: 9, color: '#333', fontWeight: 600 }}>•••</div>
            </div>
          </div>
          <div style={{ marginTop: 10, background: c.accent, borderRadius: 8, padding: '8px', textAlign: 'center', color: '#fff', fontSize: 9, fontWeight: 700 }}>Pagar R$ 297,00</div>
        </div>
      </div>
    );
  }
  if (c.id === 'portal-assinante') {
    return (
      <div style={{ background: c.bg, borderRadius: 16, padding: 24, minHeight: 220 }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <div style={{ width: 28, height: 28, background: c.accent, borderRadius: 6 }} />
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#333' }}>Minha Conta</div>
              <div style={{ fontSize: 8, color: '#999' }}>Portal do Assinante</div>
            </div>
          </div>
          {['Assinaturas', 'Pagamentos', 'Cartões'].map((item, i) => (
            <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ fontSize: 9, color: '#333', fontWeight: 500 }}>{item}</div>
              <div style={{ fontSize: 9, color: i === 0 ? c.accent : '#999', fontWeight: i === 0 ? 700 : 400 }}>{i === 0 ? 'Ativo' : '→'}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (c.id === 'backoffice') {
    return (
      <div style={{ background: c.bg, borderRadius: 16, padding: 20, minHeight: 220 }}>
        <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
          <div style={{ background: '#171717', padding: '10px 12px', display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#28c840' }} />
            <div style={{ fontSize: 8, color: '#999', marginLeft: 8 }}>Backoffice — Gestão</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: 60, background: '#fafafa', borderRight: '1px solid #f0f0f0', padding: '8px 6px' }}>
              {['Dashboard', 'Usuários', 'Pedidos', 'Config'].map(item => (
                <div key={item} style={{ fontSize: 7, color: '#999', padding: '5px 4px', borderRadius: 4, marginBottom: 2 }}>{item}</div>
              ))}
            </div>
            <div style={{ flex: 1, padding: '8px 10px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 8 }}>
                {[{ label: 'Receita', val: 'R$ 48K', color: c.accent }, { label: 'Pedidos', val: '1.284', color: '#3B5BDB' }].map(s => (
                  <div key={s.label} style={{ background: '#fafafa', borderRadius: 6, padding: '6px 8px' }}>
                    <div style={{ fontSize: 7, color: '#999' }}>{s.label}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: s.color }}>{s.val}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: '#fafafa', borderRadius: 6, padding: '6px 8px' }}>
                <div style={{ fontSize: 7, color: '#999', marginBottom: 4 }}>Últimos pedidos</div>
                {['#1021 · R$ 149', '#1020 · R$ 297'].map(r => (
                  <div key={r} style={{ fontSize: 7, color: '#333', padding: '2px 0', borderBottom: '1px solid #f5f5f5' }}>{r}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ background: c.bg, borderRadius: 16, padding: 24, minHeight: 220, display: 'flex', flexWrap: 'wrap', gap: 8, alignContent: 'flex-start' }}>
      {['Buttons', 'Inputs', 'Cards', 'Tabs', 'Dialogs', 'Toast', 'Colors', 'Typography'].map(comp => (
        <div key={comp} style={{ background: '#fff', borderRadius: 8, padding: '6px 12px', fontSize: 9, fontWeight: 600, color: ACCENT, border: `1px solid ${BORDER}` }}>{comp}</div>
      ))}
      <div style={{ width: '100%', marginTop: 8, display: 'flex', gap: 6 }}>
        {['#6D5DF5', '#171717', '#666', '#F8F8F6', '#E5E5E2'].map(col => (
          <div key={col} style={{ width: 24, height: 24, borderRadius: 6, background: col, border: '1px solid rgba(0,0,0,0.1)' }} />
        ))}
      </div>
    </div>
  );
}

export function Home() {
  const processSteps = [
    { num: '01', title: 'ENTENDER', items: ['Discovery', 'Contexto', 'Usuários', 'Problema'] },
    { num: '02', title: 'DEFINIR', items: ['Requisitos', 'Escopo', 'Prioridades', 'Objetivos'] },
    { num: '03', title: 'EXPLORAR', items: ['User Flows', 'Arquitetura', 'Wireframes'] },
    { num: '04', title: 'PROJETAR', items: ['UX/UI', 'Protótipos', 'Design System'] },
    { num: '05', title: 'CONSTRUIR', items: ['Desenvolvimento', 'QA', 'Stakeholders'] },
    { num: '06', title: 'EVOLUIR', items: ['Feedback', 'Validação', 'Métricas', 'Iteração'] },
  ];

  const skills = [
    'Design Reviews', 'UI/UX Research', 'Design Thinking', 'Usability',
    'Web Design', 'User Experience Design', 'Interviewing Skills', 'Presentations',
    'Information Architecture', 'Web Presence', 'Persona (User Experience)',
    'Web Content Accessibility Guidelines', 'User Research', 'Storyboarding',
    'Responsive Web Design', 'User Interface and User Experience (UI/UX) Design',
    'User Experience', 'Wireframing', 'Usability Testing',
  ];

  const googleCourses = [
    { num: 1, title: 'Foundations of User Experience (UX) Design', done: true },
    { num: 2, title: 'Start the UX Design Process: Empathize, Define, and Ideate', done: true },
    { num: 3, title: 'Build Wireframes and Low-Fidelity Prototypes', done: true },
    { num: 4, title: 'Conduct UX Research and Test Early Concepts', done: true },
    { num: 5, title: 'Create High-Fidelity Designs and Prototypes in Figma', done: false },
  ];

  const tools = ['Figma', 'Miro', 'Power BI', 'Azure DevOps', 'Jira', 'Postman', 'Git', 'React Native', 'Next.js', 'MySQL'];

  return (
    <div style={{ backgroundColor: BG }}>
      {/* HERO */}
      <section style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 40, padding: '6px 14px', marginBottom: 32 }}>
            <Circle size={8} fill="#22c55e" color="#22c55e" />
            <span style={{ fontSize: 12, color: SECONDARY, fontWeight: 500 }}>Disponível para novos desafios</span>
          </div>

          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: SECONDARY, marginBottom: 20, textTransform: 'uppercase' }}>
            Product Designer · Product Owner
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 6vw, 76px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', color: TEXT, marginBottom: 28, maxWidth: 720 }}>
            Transformo problemas complexos em experiências digitais simples.
          </h1>

          <p style={{ fontSize: 18, color: SECONDARY, lineHeight: 1.7, maxWidth: 560, marginBottom: 40 }}>
            Atuo na interseção entre produto, design e tecnologia, participando desde o entendimento do problema até a definição, prototipação e entrega de soluções digitais.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href="#trabalho"
              onClick={e => { e.preventDefault(); document.getElementById('trabalho')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: TEXT, color: '#fff', borderRadius: 8, padding: '14px 24px', fontSize: 15, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.background = TEXT)}
            >
              Ver projetos <ArrowRight size={16} />
            </a>
            <a
              href="#sobre"
              onClick={e => { e.preventDefault(); document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: TEXT, border: `1.5px solid ${BORDER}`, borderRadius: 8, padding: '14px 24px', fontSize: 15, fontWeight: 600, textDecoration: 'none', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = TEXT)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}
            >
              Sobre mim
            </a>
          </div>
        </div>

        {/* Hero visual */}
        <div style={{ flex: '0 0 340px', display: 'flex', flexDirection: 'column', gap: 12 }} className="hide-on-mobile">
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, padding: 20 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', marginBottom: 12 }}>PRODUTO</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Discovery', 'Backlog', 'Requisitos', 'Priorização'].map(tag => (
                <span key={tag} style={{ background: '#F5F0FF', color: ACCENT, fontSize: 11, fontWeight: 600, borderRadius: 20, padding: '3px 10px' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ flex: 1, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, padding: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#2D8A4E', letterSpacing: '0.1em', marginBottom: 12 }}>DESIGN</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['UX Research', 'UI Design', 'Protótipos'].map(t => (
                  <span key={t} style={{ fontSize: 11, color: SECONDARY }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, background: TEXT, borderRadius: 16, padding: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#999', letterSpacing: '0.1em', marginBottom: 12 }}>TECH</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['Figma', 'React', 'Agile'].map(t => (
                  <span key={t} style={{ fontSize: 11, color: '#ccc' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ background: ACCENT, borderRadius: 16, padding: 20, color: '#fff' }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>3 anos de experiência</div>
            <div style={{ fontSize: 12, opacity: 0.85 }}>SaaS · Pagamentos · Checkout · Backoffice</div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section style={{ padding: '100px 24px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <RevealDiv style={{ maxWidth: 720, marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', marginBottom: 16, textTransform: 'uppercase' }}>Sobre o trabalho</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', color: TEXT, marginBottom: 24 }}>
              Design, produto e tecnologia no mesmo processo.
            </h2>
            <p style={{ fontSize: 17, color: SECONDARY, lineHeight: 1.7 }}>
              Como Product Designer e Product Owner, participo de diferentes etapas do desenvolvimento de produtos: discovery, levantamento de necessidades, definição de requisitos, priorização, UX/UI, prototipação, Design Systems e acompanhamento da implementação.
            </p>
          </RevealDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { label: 'PRODUTO', desc: 'Discovery, requisitos, backlog, priorização e estratégia.', color: ACCENT },
              { label: 'DESIGN', desc: 'UX, UI, prototipação, Design Systems e usabilidade.', color: '#2D8A4E' },
              { label: 'DELIVERY', desc: 'Parceria com desenvolvimento, QA e stakeholders.', color: '#E07B39' },
            ].map((item, i) => (
              <RevealDiv key={item.label} delay={i * 100} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, padding: 32 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: item.color, letterSpacing: '0.12em', marginBottom: 12 }}>{item.label}</div>
                <p style={{ color: SECONDARY, fontSize: 15, lineHeight: 1.6 }}>{item.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="trabalho" style={{ padding: '100px 24px', backgroundColor: '#fff', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <RevealDiv style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', marginBottom: 16, textTransform: 'uppercase' }}>Portfólio</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', color: TEXT, marginBottom: 16 }}>
              Projetos selecionados
            </h2>
            <p style={{ fontSize: 17, color: SECONDARY, lineHeight: 1.7, maxWidth: 520 }}>
              Projetos que representam diferentes desafios, contextos e formas de atuação em produto e design.
            </p>
          </RevealDiv>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {cases.map((c, i) => (
              <RevealDiv key={c.id} delay={i * 80}>
                <Link
                  to={`/${c.id}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div
                    style={{ border: `1px solid ${BORDER}`, borderRadius: 20, padding: 32, transition: 'all 0.3s ease', cursor: 'pointer', background: BG }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = c.accent;
                      (e.currentTarget as HTMLDivElement).style.background = '#fff';
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = BORDER;
                      (e.currentTarget as HTMLDivElement).style.background = BG;
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'start' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'start' }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#ccc', paddingTop: 4, minWidth: 28 }}>{c.number}</div>
                        <div>
                          <div style={{ fontSize: 10, fontWeight: 700, color: c.tag, letterSpacing: '0.1em', marginBottom: 8 }}>{c.category}</div>
                          <h3 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-0.02em', color: TEXT, marginBottom: 12 }}>{c.title}</h3>
                          <p style={{ fontSize: 15, color: SECONDARY, lineHeight: 1.6, maxWidth: 500, marginBottom: 20 }}>{c.description}</p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                            <div>
                              <div style={{ fontSize: 10, fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', marginBottom: 2 }}>MEU PAPEL</div>
                              <div style={{ fontSize: 13, color: TEXT, fontWeight: 600 }}>{c.role}</div>
                            </div>
                            <div>
                              <div style={{ fontSize: 10, fontWeight: 700, color: '#aaa', letterSpacing: '0.08em', marginBottom: 2 }}>PLATAFORMA</div>
                              <div style={{ fontSize: 13, color: TEXT, fontWeight: 600 }}>{c.platform}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-end' }}>
                        <div style={{ width: 280 }} className="hide-on-mobile">
                          <CaseVisual c={c} />
                        </div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: c.tag, fontSize: 13, fontWeight: 700 }}>
                          Ver case <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="processo" style={{ padding: '100px 24px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <RevealDiv style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', marginBottom: 16, textTransform: 'uppercase' }}>Metodologia</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', color: TEXT, marginBottom: 16 }}>
              Do problema à entrega.
            </h2>
            <p style={{ fontSize: 17, color: SECONDARY }}>Meu processo conecta estratégia, experiência e execução.</p>
          </RevealDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
            {processSteps.map((step, i) => (
              <RevealDiv key={step.num} delay={i * 80} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#f0f0ef', letterSpacing: '-0.02em', marginBottom: 8, lineHeight: 1 }}>{step.num}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em', marginBottom: 12 }}>{step.title}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {step.items.map(item => (
                    <span key={item} style={{ fontSize: 12, color: SECONDARY }}>{item}</span>
                  ))}
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* HYBRID ROLE */}
      <section style={{ padding: '100px 24px', backgroundColor: TEXT, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <RevealDiv style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', marginBottom: 16, textTransform: 'uppercase' }}>Diferencial</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#fff', marginBottom: 20, maxWidth: 640 }}>
              Meu diferencial está em conectar produto e design.
            </h2>
            <p style={{ fontSize: 17, color: '#888', lineHeight: 1.7, maxWidth: 600 }}>
              Minha atuação como Product Designer e Product Owner permite que eu participe tanto da definição da experiência quanto das decisões que tornam uma solução viável para o produto e para o negócio.
            </p>
          </RevealDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { label: 'PRODUTO', desc: 'Discovery, backlog, requisitos, priorização, user stories, critérios de aceite e planejamento.', color: ACCENT },
              { label: 'DESIGN', desc: 'UX Research, fluxos, wireframes, protótipos, UI e Design Systems.', color: '#A78BFA' },
              { label: 'COLABORAÇÃO', desc: 'Trabalho próximo de desenvolvimento, QA, stakeholders e outras áreas.', color: '#34D399' },
            ].map((col, i) => (
              <RevealDiv key={col.label} delay={i * 100} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 16, padding: 32 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: col.color, letterSpacing: '0.12em', marginBottom: 16 }}>{col.label}</div>
                <p style={{ color: '#888', fontSize: 15, lineHeight: 1.6 }}>{col.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" style={{ padding: '100px 24px', borderTop: `1px solid ${BORDER}`, backgroundColor: BG }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <RevealDiv>
              <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', marginBottom: 16, textTransform: 'uppercase' }}>Sobre mim</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', color: TEXT, marginBottom: 28 }}>
                Prazer, Gabriela.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Sou Product Designer e Product Owner, atuando na interseção entre experiência do usuário, produto e tecnologia.',
                  'Minha experiência envolve produtos digitais, plataformas SaaS, pagamentos, checkout, backoffice e experiências de gerenciamento de assinaturas.',
                  'Participo de todo o ciclo do produto, desde discovery e definição de requisitos até prototipação, desenvolvimento, validação e evolução.',
                  'Tenho interesse em problemas complexos, produtos digitais e experiências que consigam ser simples para quem usa e eficientes para quem constrói.',
                ].map((text, i) => (
                  <p key={i} style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7 }}>{text}</p>
                ))}
              </div>

              <div style={{ marginTop: 40 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#aaa', letterSpacing: '0.1em', marginBottom: 16 }}>FERRAMENTAS</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {tools.map(tool => (
                    <span key={tool} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 20, padding: '5px 12px', fontSize: 12, fontWeight: 600, color: SECONDARY }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </RevealDiv>

            <RevealDiv delay={200}>
              {/* Photo */}
              <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
                <img
                  src={photoGabriela}
                  alt="Gabriela Rodrigues"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />
              </div>

              {/* Skills */}
              <div style={{ marginTop: 28 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#aaa', letterSpacing: '0.1em', marginBottom: 16 }}>COMPETÊNCIAS</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {skills.map(skill => (
                    <span key={skill} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 20, padding: '5px 12px', fontSize: 11, fontWeight: 500, color: TEXT }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Google UX Design Certificate */}
              <div style={{ marginTop: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: '#4285F4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Certificação Google</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: TEXT }}>Google UX Design</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {googleCourses.map(course => (
                    <div key={course.num} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '10px 14px' }}>
                      <CheckCircle2
                        size={16}
                        color={course.done ? '#16a34a' : '#CBD5E1'}
                        style={{ flexShrink: 0, marginTop: 1 }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: TEXT, lineHeight: 1.4 }}>{course.title}</div>
                        <div style={{ fontSize: 10.5, color: SECONDARY, marginTop: 2 }}>
                          Curso {course.num} de 8 · {course.done ? 'Concluído' : 'Em andamento'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" style={{ padding: '120px 24px', backgroundColor: BG, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <RevealDiv>
            <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', marginBottom: 24, textTransform: 'uppercase' }}>Contato</div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: TEXT, marginBottom: 24 }}>
              Vamos construir algo juntos?
            </h2>
            <p style={{ fontSize: 18, color: SECONDARY, lineHeight: 1.7, marginBottom: 48, maxWidth: 520, margin: '0 auto 48px' }}>
              Se você está procurando alguém que consiga conectar design, produto e tecnologia, vamos conversar.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
              <a
                href="mailto:gabriela.s.rodrigues07@gmail.com"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: TEXT, color: '#fff', borderRadius: 10, padding: '16px 32px', fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = ACCENT)}
                onMouseLeave={e => (e.currentTarget.style.background = TEXT)}
              >
                Entrar em contato <ArrowRight size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriela-rodrigues-802a2a198/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: TEXT, border: `1.5px solid ${BORDER}`, borderRadius: 10, padding: '16px 32px', fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = TEXT)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
            <div style={{ color: SECONDARY, fontSize: 14 }}>gabriela.s.rodrigues07@gmail.com</div>
          </RevealDiv>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hide-on-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
