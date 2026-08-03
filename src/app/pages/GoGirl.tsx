import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import LoginComponent from '../../imports/Login';
import HomeComponent from '../../imports/Home';

const NAVY = '#0D0D2B';
const MAGENTA = '#E91E8C';
const LILAC = '#9333EA';
const PINK = '#F472B6';
const BG = '#F8F8F6';
const TEXT = '#171717';
const SECONDARY = '#666666';
const BORDER = '#E5E5E2';

function Section({ title, number, children }: { title: string; number: string; children: React.ReactNode }) {
  return (
    <div style={{ paddingBottom: 80, borderBottom: `1px solid ${BORDER}`, marginBottom: 80 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: MAGENTA, letterSpacing: '0.1em' }}>{number}</span>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-0.02em', color: TEXT }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function PhoneFrame({ children, width = 220, height = 478, nativeWidth = 440, nativeHeight = 956 }: {
  children: React.ReactNode;
  width?: number;
  height?: number;
  nativeWidth?: number;
  nativeHeight?: number;
}) {
  const scale = width / nativeWidth;
  return (
    <div style={{
      width,
      height,
      overflow: 'hidden',
      borderRadius: 24,
      border: `6px solid ${NAVY}`,
      boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
      position: 'relative',
      flexShrink: 0,
    }}>
      <div style={{
        width: nativeWidth,
        height: nativeHeight,
        transform: `scale(${scale})`,
        transformOrigin: '0 0',
        position: 'absolute',
      }}>
        {children}
      </div>
    </div>
  );
}

export function GoGirl() {
  return (
    <div style={{ backgroundColor: BG, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Hero */}
      <div style={{ background: NAVY, color: '#fff', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: `${MAGENTA}18` }} />
        <div style={{ position: 'absolute', bottom: -80, left: 100, width: 300, height: 300, borderRadius: '50%', background: `${LILAC}18` }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#888', textDecoration: 'none', fontSize: 13, fontWeight: 600, marginBottom: 40, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#888')}
          >
            <ArrowLeft size={14} /> Voltar ao portfólio
          </Link>

          <div style={{ fontSize: 10, fontWeight: 700, color: MAGENTA, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
            PRODUCT DESIGN · UX/UI · MOBILE
          </div>

          <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: 32 }}>
            Go Girl
          </h1>

          <p style={{ fontSize: 18, color: '#aaa', lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
            Uma experiência digital criada para ajudar mulheres que viajam sozinhas a se sentirem mais seguras, conectadas e confiantes durante suas jornadas.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            {[
              { label: 'MEU PAPEL', value: 'Product Designer' },
              { label: 'ÁREAS', value: 'UX Research · UX/UI · Product Strategy · UI Design' },
              { label: 'PLATAFORMA', value: 'Mobile' },
              { label: 'EXPERIÊNCIA', value: '3 anos' },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#555', letterSpacing: '0.1em', marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: '#ccc', fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>

        {/* 01 - Problema */}
        <Section number="01 —" title="O Problema">
          <div style={{ background: NAVY, borderRadius: 16, padding: 40, color: '#fff' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: MAGENTA, letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>HMW</div>
            <p style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', lineHeight: 1.6, fontWeight: 600, maxWidth: 600 }}>
              "Como podemos ajudar mulheres que viajam sozinhas a se sentirem mais seguras, conectadas e confiantes durante suas viagens?"
            </p>
          </div>
        </Section>

        {/* 02 - Pesquisa */}
        <Section number="02 —" title="Pesquisa & Insights">
          <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            A pesquisa foi conduzida para entender os principais desafios enfrentados por mulheres que viajam sozinhas. Quatro temas emergiram como centrais.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
            {[
              { theme: 'Segurança', desc: 'Preocupação constante com locais seguros, rotas e emergências.', color: MAGENTA },
              { theme: 'Conexão', desc: 'Dificuldade de manter contato com pessoas de confiança durante viagens.', color: LILAC },
              { theme: 'Autonomia', desc: 'Desejo de explorar com independência sem abrir mão da segurança.', color: PINK },
              { theme: 'Informação', desc: 'Necessidade de informações confiáveis sobre destinos e situações locais.', color: '#60A5FA' },
            ].map(item => (
              <div key={item.theme} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, marginBottom: 12 }} />
                <div style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 8 }}>{item.theme}</div>
                <p style={{ fontSize: 13, color: SECONDARY, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 03 - Persona */}
        <Section number="03 —" title="Persona">
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 20, padding: 40, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: `linear-gradient(135deg, ${MAGENTA}, ${LILAC})`, marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>
                👩‍💼
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: TEXT }}>Ana Carolina</div>
              <div style={{ fontSize: 13, color: SECONDARY }}>28 anos · Product Designer</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                { label: 'Objetivos', items: ['Explorar destinos sozinha', 'Sentir-se segura em viagens', 'Conectar-se com outras viajantes'] },
                { label: 'Dores', items: ['Medo de situações de risco', 'Difícil avisar contatos em tempo real', 'Falta de rede de apoio local'] },
                { label: 'Necessidades', items: ['Informações sobre segurança local', 'Contatos de emergência acessíveis', 'Comunidade de viajantes'] },
                { label: 'Comportamentos', items: ['Pesquisa destinos exaustivamente', 'Compartilha localização', 'Prefere hospedagens bem avaliadas'] },
              ].map(col => (
                <div key={col.label}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: MAGENTA, letterSpacing: '0.1em', marginBottom: 8, textTransform: 'uppercase' }}>{col.label}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {col.items.map(item => (
                      <li key={item} style={{ fontSize: 13, color: SECONDARY, lineHeight: 1.6, paddingLeft: 14, position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: MAGENTA }}>·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 04 - Solução */}
        <Section number="04 —" title="A Solução">
          <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Go Girl é um app mobile que centraliza segurança, conexão e informação em uma experiência intuitiva e confiável para mulheres viajantes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { feature: 'Guia Seguro', desc: 'Informações sobre segurança por destino, avaliadas pela comunidade.', icon: '🛡️' },
              { feature: 'Pontos de Apoio', desc: 'Locais verificados onde a viajante pode buscar ajuda.', icon: '📍' },
              { feature: 'Rede de Contatos', desc: 'Compartilhamento de localização com pessoas de confiança.', icon: '👥' },
              { feature: 'Check-in', desc: 'Sistema de check-in automático para alertar contatos em caso de silêncio.', icon: '✅' },
              { feature: 'Comunidade', desc: 'Espaço para conectar viajantes com experiências e dicas reais.', icon: '💜' },
              { feature: 'Alertas', desc: 'Notificações sobre situações de risco na região visitada.', icon: '🔔' },
            ].map(item => (
              <div key={item.feature} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 6 }}>{item.feature}</div>
                <p style={{ fontSize: 13, color: SECONDARY, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 05 - Fluxo */}
        <Section number="05 —" title="Fluxo Principal">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            {['Onboarding', '→', 'Home', '→', 'Explorar Destino', '→', 'Ativar Check-in', '→', 'Alertar Contatos', '→', 'Comunidade'].map((step, i) => (
              step === '→'
                ? <span key={i} style={{ color: MAGENTA, fontWeight: 700, fontSize: 18 }}>→</span>
                : <div key={i} style={{ background: i % 4 === 0 ? NAVY : '#fff', border: `1px solid ${i % 4 === 0 ? 'transparent' : BORDER}`, borderRadius: 10, padding: '10px 16px', fontSize: 13, fontWeight: 600, color: i % 4 === 0 ? '#fff' : TEXT }}>{step}</div>
            ))}
          </div>
        </Section>

        {/* 06 - Protótipo & Interface (real screens) */}
        <Section number="06 —" title="Protótipo & Interface">
          <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            O design prioriza clareza, velocidade e confiança — pensando no contexto de uso em situações de viagem onde cada segundo importa.
          </p>

          <div style={{ background: NAVY, borderRadius: 24, padding: '48px 32px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: `${MAGENTA}10` }} />
            <div style={{ position: 'absolute', bottom: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: `${LILAC}10` }} />

            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: MAGENTA, letterSpacing: '0.12em', marginBottom: 16, textTransform: 'uppercase' }}>Login</div>
              <PhoneFrame width={200} height={435} nativeWidth={440} nativeHeight={956}>
                <div style={{ width: 440, height: 956 }}>
                  <LoginComponent />
                </div>
              </PhoneFrame>
            </div>

            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#A78BFA', letterSpacing: '0.12em', marginBottom: 16, textTransform: 'uppercase' }}>Home</div>
              <PhoneFrame width={200} height={435} nativeWidth={440} nativeHeight={956}>
                <div style={{ width: 440, height: 956 }}>
                  <HomeComponent />
                </div>
              </PhoneFrame>
            </div>
          </div>
        </Section>

        {/* 07 - Identidade Visual */}
        <Section number="07 —" title="Identidade Visual">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SECONDARY, letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>Paleta de Cores</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { name: 'Navy', hex: NAVY },
                  { name: 'Magenta', hex: MAGENTA },
                  { name: 'Lilac', hex: LILAC },
                  { name: 'Pink', hex: PINK },
                ].map(c => (
                  <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: c.hex, border: '1px solid rgba(0,0,0,0.1)' }} />
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: TEXT }}>{c.name}</div>
                      <div style={{ fontSize: 11, color: SECONDARY }}>{c.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SECONDARY, letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>Tipografia</div>
              <div style={{ background: NAVY, borderRadius: 12, padding: 24 }}>
                <div style={{ color: MAGENTA, fontSize: 10, letterSpacing: '0.12em', marginBottom: 8, fontWeight: 700 }}>LONDON BRIDGE + KINETIKA</div>
                <div style={{ color: '#fff', fontSize: 28, fontWeight: 900, lineHeight: 1.1, marginBottom: 8 }}>Go Girl</div>
                <div style={{ color: '#aaa', fontSize: 13 }}>TRAVEL CLUB</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SECONDARY, letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>Logo</div>
              <div style={{ background: `linear-gradient(135deg, ${MAGENTA}, #b7046a)`, borderRadius: 12, padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: '#fff', lineHeight: 1 }}>GO GIRL</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', marginTop: 6 }}>TRAVEL CLUB</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 08 - Design System */}
        <Section number="08 —" title="Design System">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
            {[
              { name: 'Buttons', preview: <div style={{ display: 'flex', gap: 6 }}><div style={{ background: `linear-gradient(to right, ${MAGENTA}, #55305c)`, borderRadius: 20, padding: '7px 14px', fontSize: 10, color: '#fff', fontWeight: 700 }}>Acessar →</div></div> },
              { name: 'Cards', preview: <div style={{ background: NAVY, borderRadius: 8, padding: 12, border: `1px solid ${MAGENTA}33` }}><div style={{ fontSize: 9, color: MAGENTA, fontWeight: 700 }}>DESTINO EM ALTA</div><div style={{ fontSize: 8, color: '#aaa', marginTop: 2 }}>Paris · França</div></div> },
              { name: 'Inputs', preview: <div style={{ background: 'rgba(203,213,225,0.1)', borderRadius: 10, border: '1px solid #cbd5e1', padding: '8px 10px' }}><div style={{ fontSize: 8, color: 'rgba(85,48,92,0.41)' }}>Digite seu email</div></div> },
              { name: 'Navigation', preview: <div style={{ display: 'flex', gap: 4 }}>{['🏠', '🗺️', '✅', '💜'].map(icon => <div key={icon} style={{ flex: 1, textAlign: 'center', fontSize: 14 }}>{icon}</div>)}</div> },
              { name: 'Alerts', preview: <div style={{ background: `${MAGENTA}22`, border: `1px solid ${MAGENTA}`, borderRadius: 8, padding: '6px 10px', fontSize: 9, color: MAGENTA, fontWeight: 700 }}>⚠️ Área com alerta</div> },
              { name: 'Typography', preview: <div><div style={{ fontSize: 14, fontWeight: 900, color: '#55305c' }}>GO GIRL</div><div style={{ fontSize: 10, color: SECONDARY, marginTop: 2 }}>TRAVEL CLUB</div></div> },
            ].map(comp => (
              <div key={comp.name} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: SECONDARY, marginBottom: 12 }}>{comp.name}</div>
                {comp.preview}
              </div>
            ))}
          </div>
        </Section>

        {/* 09 - Resultados */}
        <Section number="09 —" title="Resultados">
          <div style={{ background: NAVY, borderRadius: 16, padding: 40, color: '#fff' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: MAGENTA, letterSpacing: '0.1em', marginBottom: 20, textTransform: 'uppercase' }}>Findings de Pesquisa & Protótipo</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
              {[
                { metric: '84%', desc: 'das participantes se sentiram mais seguras usando o protótipo' },
                { metric: '9/10', desc: 'usuárias recomendariam o app para outras viajantes' },
                { metric: '3x', desc: 'mais rápido para acionar contatos vs. métodos tradicionais' },
              ].map(m => (
                <div key={m.metric} style={{ textAlign: 'center', padding: 16, background: '#ffffff0d', borderRadius: 12 }}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: MAGENTA, letterSpacing: '-0.02em' }}>{m.metric}</div>
                  <div style={{ fontSize: 12, color: '#aaa', marginTop: 8, lineHeight: 1.5 }}>{m.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ color: '#666', fontSize: 12, marginTop: 20, fontStyle: 'italic' }}>* Dados obtidos em sessões de teste com protótipo. Não representam resultados de produto em produção.</p>
          </div>
        </Section>

        {/* 10 - Aprendizados */}
        <Section number="10 —" title="Aprendizados">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { title: 'Pesquisa antes da solução', desc: 'Entender profundamente o contexto de viagem sozinha revelou necessidades não óbvias, como o medo do silêncio informacional.' },
              { title: 'Clareza reduz ansiedade', desc: 'Interfaces simples e diretas são essenciais quando o usuário está em situação de estresse ou urgência.' },
              { title: 'Design precisa considerar contexto', desc: 'Bateria baixa, conexão instável e mãos ocupadas são realidades do uso mobile em viagem que moldaram cada decisão de design.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ width: 4, height: 24, background: MAGENTA, borderRadius: 2, marginBottom: 16 }} />
                <div style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 10 }}>{item.title}</div>
                <p style={{ fontSize: 14, color: SECONDARY, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: SECONDARY, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
            <ArrowLeft size={16} /> Todos os projetos
          </Link>
          <Link to="/checkout-v3" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: TEXT, textDecoration: 'none', fontSize: 14, fontWeight: 700, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 20px' }}>
            Próximo: Checkout V3 <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
