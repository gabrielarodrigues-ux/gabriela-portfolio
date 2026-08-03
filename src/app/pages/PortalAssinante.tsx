import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PortalDesktopComponent from '../../imports/Frame40184';

const ACCENT = '#0C1E69';
const ACCENT_LIGHT = '#1636bf';
const GREEN = '#03884A';
const BG = '#F8F8F6';
const TEXT = '#171717';
const SECONDARY = '#666666';
const BORDER = '#E5E5E2';

function Section({ title, number, children }: { title: string; number: string; children: React.ReactNode }) {
  return (
    <div style={{ paddingBottom: 80, borderBottom: `1px solid ${BORDER}`, marginBottom: 80 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT_LIGHT, letterSpacing: '0.1em' }}>{number}</span>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-0.02em', color: TEXT }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function DesktopFrame({ children, nativeWidth = 863, nativeHeight = 750, displayWidth = 800 }: {
  children: React.ReactNode;
  nativeWidth?: number;
  nativeHeight?: number;
  displayWidth?: number;
}) {
  const scale = displayWidth / nativeWidth;
  const displayHeight = nativeHeight * scale;
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ background: '#e0e0e0', borderRadius: '12px 12px 0 0', padding: '10px 16px', width: displayWidth, display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #ccc', borderBottom: 'none' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, background: '#fff', borderRadius: 6, padding: '4px 12px', fontSize: 10, color: '#999', marginLeft: 8, border: '1px solid #ddd' }}>
          portal.hubpay.com
        </div>
      </div>
      <div style={{ width: displayWidth, height: displayHeight, overflow: 'hidden', position: 'relative', border: '1px solid #ccc', borderRadius: '0 0 8px 8px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
        <div style={{ width: nativeWidth, height: nativeHeight, transform: `scale(${scale})`, transformOrigin: '0 0', position: 'absolute' }}>
          {children}
        </div>
      </div>
      <div style={{ width: 120, height: 16, background: '#d0d0d0' }} />
      <div style={{ width: 200, height: 8, background: '#c0c0c0', borderRadius: 4 }} />
    </div>
  );
}

export function PortalAssinante() {
  return (
    <div style={{ backgroundColor: BG, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Hero */}
      <div style={{ background: ACCENT, borderBottom: `1px solid #0a1850`, padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', bottom: -60, left: 200, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#8899CC', textDecoration: 'none', fontSize: 13, fontWeight: 600, marginBottom: 40 }}>
            <ArrowLeft size={14} /> Voltar ao portfólio
          </Link>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#60A5FA', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
            PRODUCT DESIGN · UX/UI · SAAS
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em', color: '#fff', marginBottom: 24 }}>
            Portal do Assinante
          </h1>
          <p style={{ fontSize: 18, color: '#8899CC', lineHeight: 1.7, maxWidth: 540, marginBottom: 48 }}>
            Uma nova experiência para que usuários possam gerenciar assinaturas, pagamentos, cartões e informações da conta de forma simples e intuitiva.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            {[
              { label: 'MEU PAPEL', value: 'Product Designer + Product Owner' },
              { label: 'PLATAFORMA', value: 'Web + Mobile' },
              { label: 'EXPERIÊNCIA', value: '3 anos' },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#556699', letterSpacing: '0.1em', marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: '#cdd', fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 24px' }}>

        <Section number="01 —" title="O Problema">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7 }}>
                Usuários não tinham visibilidade clara sobre suas assinaturas ativas, datas de cobrança e formas de pagamento. O resultado era sobrecarga no suporte e cancelamentos evitáveis.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Alta demanda de suporte por dúvidas simples',
                'Cancelamentos por falta de visibilidade',
                'Processo de alteração de cartão complexo',
                'Sem histórico claro de pagamentos',
              ].map(p => (
                <div key={p} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 16px', fontSize: 13, color: SECONDARY, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#ef4444', flexShrink: 0 }}>✗</span> {p}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section number="02 —" title="Interface Desktop">
          <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            O design prioriza clareza e hierarquia de informação — com o header em azul navy trazendo identidade visual forte, e os cards de informação organizados em grid para acesso rápido.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <DesktopFrame nativeWidth={863} nativeHeight={750} displayWidth={800}>
              <div style={{ width: 863, height: 750 }}>
                <PortalDesktopComponent />
              </div>
            </DesktopFrame>
          </div>

          {/* Cards info */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 32 }}>
            {[
              { label: 'Assinatura ativa', value: 'HubPay Pro', sub: 'Plano Pro · Ativa', color: GREEN, icon: '⭐' },
              { label: 'Próximo pagamento', value: '15/08/2026', sub: 'em 31 dias', color: '#A7852B', icon: '📅' },
              { label: 'Valor da próxima cobrança', value: 'R$ 149,90', sub: 'Mensal', color: GREEN, icon: '↑' },
              { label: 'Método de pagamento', value: 'Visa •••• 4242', sub: 'Válido até 12/27', color: ACCENT_LIGHT, icon: '💳' },
            ].map(card => (
              <div key={card.label} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT_LIGHT, marginBottom: 8 }}>{card.label}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: card.color, marginBottom: 4 }}>{card.value}</div>
                <div style={{ fontSize: 13, color: SECONDARY }}>{card.sub}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="03 —" title="Arquitetura da Informação">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { area: 'Minha Conta', items: ['Dados pessoais', 'Senha', 'Preferências'] },
              { area: 'Assinaturas', items: ['Planos ativos', 'Histórico', 'Cancelar/Pausar'] },
              { area: 'Pagamentos', items: ['Histórico de cobranças', 'NF/Recibo', 'Próximo vencimento'] },
              { area: 'Cartões', items: ['Cartões salvos', 'Adicionar cartão', 'Definir padrão'] },
            ].map(area => (
              <div key={area.area} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: '16px 24px', display: 'flex', gap: 24, alignItems: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: ACCENT_LIGHT, minWidth: 120 }}>{area.area}</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {area.items.map(item => (
                    <span key={item} style={{ background: '#EEF2FF', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: ACCENT_LIGHT }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="04 —" title="Últimos Pagamentos">
          <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
            O histórico de pagamentos foi desenhado para ser legível e acionável — com status visuais claros e acesso rápido a documentos fiscais.
          </p>
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', borderBottom: `1px solid ${BORDER}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: TEXT }}>Últimos Pagamentos</div>
                <div style={{ fontSize: 12, color: SECONDARY }}>Seus pagamentos recentes</div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: ACCENT_LIGHT }}>Ver todas →</div>
            </div>
            {[
              { name: 'HubPay Pro', card: 'Visa •••• 4242', value: 'R$ 149,90', date: '15/07/2026', status: 'Aprovado', statusColor: GREEN },
              { name: 'HubPay Pro', card: 'Visa •••• 4242', value: 'R$ 149,90', date: '15/06/2026', status: 'Aprovado', statusColor: GREEN },
              { name: 'HubPay Pro', card: 'Visa •••• 4242', value: 'R$ 149,90', date: '15/05/2026', status: 'Aprovado', statusColor: GREEN },
              { name: 'HubPay Pro', card: 'Visa •••• 4242', value: 'R$ 149,90', date: '15/04/2026', status: 'Recusado', statusColor: '#ef4444' },
              { name: 'HubPay Basic', card: 'Visa •••• 4242', value: 'R$ 89,90', date: '15/03/2026', status: 'Aprovado', statusColor: GREEN },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px', borderBottom: i < 4 ? `1px solid ${BORDER}` : 'none' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>$</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>{row.name}</div>
                    <div style={{ fontSize: 12, color: SECONDARY }}>{row.card}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: TEXT }}>{row.value}</div>
                  <div style={{ fontSize: 11, color: SECONDARY }}>{row.date}</div>
                  <span style={{ background: `${row.statusColor}18`, color: row.statusColor, fontSize: 11, fontWeight: 700, borderRadius: 20, padding: '3px 10px' }}>{row.status}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="05 —" title="Design System">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
            {[
              { name: 'Status Badge', preview: <div style={{ display: 'flex', gap: 8 }}><span style={{ background: '#e6f9f0', color: GREEN, borderRadius: 20, padding: '4px 10px', fontSize: 11, fontWeight: 700 }}>Ativa</span><span style={{ background: '#fff7ed', color: '#ea580c', borderRadius: 20, padding: '4px 10px', fontSize: 11, fontWeight: 700 }}>Pausado</span></div> },
              { name: 'Card Dashboard', preview: <div style={{ background: '#f9fafb', borderRadius: 10, padding: 12, border: `1px solid ${BORDER}` }}><div style={{ fontSize: 11, fontWeight: 700, color: ACCENT_LIGHT }}>HubPay Pro</div><div style={{ fontSize: 10, color: SECONDARY }}>R$ 149,90/mês</div></div> },
              { name: 'Botão Ação', preview: <div style={{ background: ACCENT, borderRadius: 8, padding: '8px 14px', fontSize: 11, color: '#fff', fontWeight: 700, display: 'inline-block' }}>Gerenciar →</div> },
              { name: 'Alert', preview: <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', borderRadius: 10, padding: '10px 14px' }}><div style={{ fontSize: 10, fontWeight: 700, color: '#A7852B' }}>⚠ Ação Necessária</div><div style={{ fontSize: 10, color: SECONDARY, marginTop: 4 }}>Você tem assinatura com pagamento pendente.</div></div> },
            ].map(comp => (
              <div key={comp.name} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: SECONDARY, marginBottom: 12 }}>{comp.name}</div>
                {comp.preview}
              </div>
            ))}
          </div>
        </Section>

        <Section number="06 —" title="Aprendizados">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { title: 'Self-service reduz suporte', desc: 'Dar ao usuário controle total sobre sua conta reduziu tickets repetitivos e criou uma relação mais autônoma com o produto.' },
              { title: 'Clareza antes de funcionalidades', desc: 'Às vezes o problema não é falta de feature, mas falta de clareza. Mostrar a informação certa no momento certo foi suficiente.' },
              { title: 'PO e design juntos evitam retrabalho', desc: 'Definir critérios de aceite junto ao design garantiu que o que foi prototipado era também o que seria entregue.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ width: 4, height: 24, background: ACCENT_LIGHT, borderRadius: 2, marginBottom: 16 }} />
                <div style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 10 }}>{item.title}</div>
                <p style={{ fontSize: 14, color: SECONDARY, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Link to="/checkout-v3" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: SECONDARY, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
            <ArrowLeft size={16} /> Checkout V3
          </Link>
          <Link to="/backoffice" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: TEXT, textDecoration: 'none', fontSize: 14, fontWeight: 700, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 20px' }}>
            Próximo: Backoffice <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
