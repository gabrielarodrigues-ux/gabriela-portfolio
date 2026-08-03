import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CheckoutComponent from '../../imports/Frame39561';

const ACCENT = '#3B5BDB';
const DARK_BLUE = '#0e4a6e';
const BG = '#F8F8F6';
const TEXT = '#171717';
const SECONDARY = '#666666';
const BORDER = '#E5E5E2';

function Section({ title, number, children }: { title: string; number: string; children: React.ReactNode }) {
  return (
    <div style={{ paddingBottom: 80, borderBottom: `1px solid ${BORDER}`, marginBottom: 80 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em' }}>{number}</span>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-0.02em', color: TEXT }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function DesktopFrame({ children, nativeWidth = 1512, nativeHeight = 1024, displayWidth = 856 }: {
  children: React.ReactNode;
  nativeWidth?: number;
  nativeHeight?: number;
  displayWidth?: number;
}) {
  const scale = displayWidth / nativeWidth;
  const displayHeight = nativeHeight * scale;

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
      {/* Browser chrome */}
      <div style={{
        width: displayWidth,
        background: '#e8e8e8',
        borderRadius: '12px 12px 0 0',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        border: `1px solid #ccc`,
        borderBottom: 'none',
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, background: '#fff', borderRadius: 6, padding: '4px 12px', fontSize: 10, color: '#999', marginLeft: 8, border: '1px solid #ddd' }}>
          checkout.cyclopay.com
        </div>
      </div>
      {/* Screen */}
      <div style={{
        width: displayWidth,
        height: displayHeight,
        overflow: 'hidden',
        position: 'relative',
        border: `1px solid #ccc`,
        borderRadius: '0 0 8px 8px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
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
      {/* Stand */}
      <div style={{ width: 120, height: 16, background: '#d0d0d0', borderRadius: '0 0 4px 4px' }} />
      <div style={{ width: 200, height: 8, background: '#c0c0c0', borderRadius: 4 }} />
    </div>
  );
}

export function CheckoutV3() {
  return (
    <div style={{ backgroundColor: BG, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Hero */}
      <div style={{ background: '#F0F4FF', borderBottom: `1px solid #D0DAFF`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#888', textDecoration: 'none', fontSize: 13, fontWeight: 600, marginBottom: 40 }}>
            <ArrowLeft size={14} /> Voltar ao portfólio
          </Link>
          <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
            PRODUCT DESIGN · UX/UI · PAYMENTS
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em', color: TEXT, marginBottom: 24 }}>
            Checkout V3
          </h1>
          <p style={{ fontSize: 18, color: SECONDARY, lineHeight: 1.7, maxWidth: 520, marginBottom: 48 }}>
            Evolução da experiência de checkout para tornar pagamentos mais simples, flexíveis e consistentes — incluindo suporte a cotação CLF/UF em tempo real.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            {[
              { label: 'MEU PAPEL', value: 'Product Designer + Product Owner' },
              { label: 'ÁREAS', value: 'UX/UI · Product · Payments · Design System' },
              { label: 'PLATAFORMA', value: 'Web · Responsivo' },
              { label: 'EXPERIÊNCIA', value: '3 anos' },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#999', letterSpacing: '0.1em', marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: TEXT, fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 24px' }}>

        <Section number="01 —" title="Contexto">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7 }}>
                O Checkout V3 surgiu da necessidade de unificar e evoluir a experiência de pagamento, suportando múltiplos métodos e contextos de uso sem comprometer a conversão.
              </p>
              <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginTop: 16 }}>
                Neste projeto atuei como <strong style={{ color: TEXT }}>Product Designer e Product Owner</strong>, conectando decisões de design com requisitos de produto e viabilidade técnica.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Alta taxa de abandono', desc: 'Usuários desistindo antes de concluir o pagamento' },
                { label: 'Cotação CLF/UF', desc: 'Suporte a planos em Unidades de Fomento com conversão em tempo real' },
                { label: 'Sem responsividade', desc: 'Experiência mobile quebrada afastando usuários' },
              ].map(item => (
                <div key={item.label} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: SECONDARY }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section number="02 —" title="Discovery">
          <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            A fase de discovery envolveu análise de dados de abandono, entrevistas com usuários e mapeamento dos principais pontos de atrito na jornada de pagamento.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { phase: 'Analytics', items: ['Heatmaps', 'Funil de conversão', 'Session recordings'] },
              { phase: 'Entrevistas', items: ['8 usuários', 'Contexto de compra', 'Dores e expectativas'] },
              { phase: 'Benchmarking', items: ['Cyclopay', 'Stripe', 'Mercado Pago'] },
              { phase: 'Requisitos', items: ['Técnicos', 'De negócio', 'CLF/UF e regulatórios'] },
            ].map(item => (
              <div key={item.phase} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.1em', marginBottom: 12 }}>{item.phase.toUpperCase()}</div>
                {item.items.map(i => (
                  <div key={i} style={{ fontSize: 13, color: SECONDARY, padding: '3px 0' }}>· {i}</div>
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section number="03 —" title="Interface & Protótipos">
          <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            A interface foi projetada para ser clara, rápida e transmitir confiança — incluindo o card de cotação CLF/UF em tempo real que mantém o usuário informado sobre o valor exato da cobrança.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <DesktopFrame nativeWidth={1512} nativeHeight={560} displayWidth={Math.min(856, 856)}>
              <div style={{ width: 1512, height: 560 }}>
                <CheckoutComponent />
              </div>
            </DesktopFrame>
          </div>

          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            <div style={{ background: DARK_BLUE, borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#60A5FA', letterSpacing: '0.1em', marginBottom: 10 }}>COTAÇÃO CLF/UF</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 4 }}>2,5000 UF</div>
              <div style={{ fontSize: 13, color: '#aaa' }}>= $ 101.908 · 1 UF = $ 40.763</div>
              <div style={{ fontSize: 10, color: '#666', marginTop: 8 }}>Atualizado: 11/06/2026 12:27:55</div>
            </div>
            <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', marginBottom: 10 }}>DETALHES DO PLANO</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#0e4a6e', marginBottom: 8 }}>PLAN20260608-00001</div>
              <div style={{ fontSize: 13, color: SECONDARY }}>Opción #1 · 2,5000 UF / Mes</div>
              <div style={{ fontSize: 13, color: SECONDARY, marginTop: 4 }}>Setup: 0,8000 UF</div>
              <div style={{ borderTop: `1px solid ${BORDER}`, marginTop: 12, paddingTop: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: TEXT }}>Total a pagar</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: ACCENT }}>3,3000 UF</span>
                </div>
                <div style={{ fontSize: 12, color: SECONDARY, textAlign: 'right', marginTop: 4 }}>$ 134.518,758</div>
              </div>
            </div>
          </div>
        </Section>

        <Section number="04 —" title="Fluxos">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { flow: 'Fluxo com CLF/UF', steps: ['Ver plano + cotação', 'Preencher dados pessoais', 'Endereço', 'Método de pagamento', 'Checkout confirmado'] },
              { flow: 'Fluxo Cartão', steps: ['Preencher dados', 'Escolher parcelamento', 'Revisar pedido', 'Confirmar pagamento', 'Tela de sucesso'] },
              { flow: 'Fluxo PIX', steps: ['Selecionar PIX', 'Gerar QR Code', 'Aguardar confirmação', 'Tela de sucesso'] },
            ].map(flow => (
              <div key={flow.flow} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: '0.08em', marginBottom: 12 }}>{flow.flow.toUpperCase()}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  {flow.steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ background: '#F0F4FF', borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 600, color: ACCENT }}>{step}</div>
                      {i < flow.steps.length - 1 && <span style={{ color: ACCENT }}>→</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="05 —" title="Design System & Responsividade">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { title: 'Componentes', items: ['InputCard', 'PaymentMethod', 'SummaryCard', 'CLFQuoteCard', 'SuccessState'] },
              { title: 'Tokens', items: ['Cores semânticas', 'Spacing consistente', 'Typography scale', 'Border radius'] },
              { title: 'Mobile', items: ['Teclado numérico', 'Bottom sheet', 'Touch targets ≥ 44px', 'Scroll suave'] },
            ].map(s => (
              <div key={s.title} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: ACCENT, marginBottom: 12 }}>{s.title}</div>
                {s.items.map(item => (
                  <div key={item} style={{ fontSize: 13, color: SECONDARY, padding: '3px 0' }}>· {item}</div>
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section number="06 —" title="Atuação como PO + Designer">
          <div style={{ background: TEXT, borderRadius: 16, padding: 40, color: '#fff' }}>
            <p style={{ fontSize: 16, color: '#aaa', lineHeight: 1.7, marginBottom: 32 }}>
              Neste projeto a atuação dupla foi decisiva: enquanto designer, priorizei a experiência do usuário; como PO, alinhei requisitos técnicos, regulatórios e de negócio — incluindo a integração com a cotação CLF/UF em tempo real.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
              {[
                { role: 'Como Designer', items: ['UX Research', 'User Flows', 'Wireframes', 'UI', 'Protótipos', 'Design System'] },
                { role: 'Como PO', items: ['Backlog', 'User Stories', 'Critérios de aceite', 'Priorização', 'Alinhamento com dev', 'Validação CLF/UF'] },
              ].map(r => (
                <div key={r.role} style={{ background: '#1a1a1a', borderRadius: 12, padding: 24 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', marginBottom: 16 }}>{r.role.toUpperCase()}</div>
                  {r.items.map(item => (
                    <div key={item} style={{ fontSize: 13, color: '#888', padding: '3px 0' }}>· {item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section number="07 —" title="Aprendizados">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { title: 'Conversão depende de confiança', desc: 'Cada elemento de design comunica segurança ao usuário. Exibir a cotação CLF/UF em tempo real com transparência eliminou dúvidas sobre o valor cobrado.' },
              { title: 'PO e Designer no mesmo processo', desc: 'Trabalhar nos dois papéis eliminou o ruído entre product e design — as decisões chegavam ao dev com mais contexto e clareza.' },
              { title: 'Responsividade não é adaptação', desc: 'Mobile first revelou que alguns fluxos de desktop precisavam ser repensados, não apenas adaptados.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ width: 4, height: 24, background: ACCENT, borderRadius: 2, marginBottom: 16 }} />
                <div style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 10 }}>{item.title}</div>
                <p style={{ fontSize: 14, color: SECONDARY, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Link to="/go-girl" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: SECONDARY, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
            <ArrowLeft size={16} /> Go Girl
          </Link>
          <Link to="/portal-assinante" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: TEXT, textDecoration: 'none', fontSize: 14, fontWeight: 700, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 20px' }}>
            Próximo: Portal do Assinante <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
