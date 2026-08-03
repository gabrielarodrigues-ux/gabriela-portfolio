import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import MacBookComponent from '../../imports/MacBookPro14681';
import TemplateModalComponent from '../../imports/Frame39566';

const ACCENT = '#E07B39';
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
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ background: '#e0e0e0', borderRadius: '12px 12px 0 0', padding: '10px 16px', width: displayWidth, display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #ccc', borderBottom: 'none' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, background: '#fff', borderRadius: 6, padding: '4px 12px', fontSize: 10, color: '#999', marginLeft: 8, border: '1px solid #ddd' }}>
          admin.cyclopay.com
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

function SmallFrame({ children, nativeWidth = 434, nativeHeight = 900, displayWidth = 320 }: {
  children: React.ReactNode;
  nativeWidth?: number;
  nativeHeight?: number;
  displayWidth?: number;
}) {
  const scale = displayWidth / nativeWidth;
  const displayHeight = nativeHeight * scale;
  return (
    <div style={{ width: displayWidth, height: displayHeight, overflow: 'hidden', position: 'relative', borderRadius: 12, border: `1px solid ${BORDER}`, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', flexShrink: 0 }}>
      <div style={{ width: nativeWidth, height: nativeHeight, transform: `scale(${scale})`, transformOrigin: '0 0', position: 'absolute' }}>
        {children}
      </div>
    </div>
  );
}

export function Backoffice() {
  return (
    <div style={{ backgroundColor: BG, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Hero */}
      <div style={{ background: '#FFF8F0', borderBottom: `1px solid #FED7AA`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#888', textDecoration: 'none', fontSize: 13, fontWeight: 600, marginBottom: 40 }}>
            <ArrowLeft size={14} /> Voltar ao portfólio
          </Link>
          <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
            PRODUCT · UX/UI · SAAS
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em', color: TEXT, marginBottom: 24 }}>
            Evolução do Backoffice
          </h1>
          <p style={{ fontSize: 18, color: SECONDARY, lineHeight: 1.7, maxWidth: 540, marginBottom: 48 }}>
            Atuação na evolução de uma plataforma complexa, conectando necessidades de negócio, experiência do usuário e viabilidade técnica.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
            {[
              { label: 'MEU PAPEL', value: 'Product Owner + Product Designer' },
              { label: 'PLATAFORMA', value: 'Web · SaaS' },
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

        <Section number="01 —" title="Contexto & Complexidade">
          <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            O backoffice é a espinha dorsal operacional de um produto SaaS. Atuei na evolução de uma plataforma legada com alta complexidade: múltiplas áreas usuárias, fluxos críticos de negócio e dívida técnica acumulada.
          </p>
          <div style={{ background: TEXT, borderRadius: 16, padding: 32, color: '#fff' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', marginBottom: 16 }}>DESAFIO PRINCIPAL</div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#ddd' }}>
              Como evoluir uma plataforma crítica sem interromper operações, melhorando a experiência de quem usa diariamente e garantindo que novas funcionalidades sejam viáveis para o produto e para o time de engenharia?
            </p>
          </div>
        </Section>

        <Section number="02 —" title="Interface — Configuração de Checkout">
          <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Uma das evoluções centrais foi a tela de configuração de checkout — permitindo que o admin customize a experiência de pagamento com preview em tempo real, tanto desktop quanto mobile.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <DesktopFrame nativeWidth={1512} nativeHeight={700} displayWidth={856}>
              <div style={{ width: 1512, height: 700 }}>
                <MacBookComponent />
              </div>
            </DesktopFrame>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 32 }}>
            {[
              { label: 'Preview em tempo real', desc: 'O admin vê como o checkout ficará para o usuário final antes de publicar.' },
              { label: 'Toggle Desktop/Mobile', desc: 'Alternância entre visualização desktop e mobile sem sair da tela de config.' },
              { label: 'Configurar Checkout', desc: 'CTA contextual que leva às configurações avançadas de template.' },
            ].map(item => (
              <div key={item.label} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: SECONDARY }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="03 —" title="Configuração de Templates">
          <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            O modal de configuração de template permite personalizar completamente a experiência visual do checkout — com temas pré-definidos, paleta de cores, tipografia e posicionamento de componentes.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <SmallFrame nativeWidth={434} nativeHeight={900} displayWidth={320}>
              <div style={{ width: 434, height: 900 }}>
                <TemplateModalComponent />
              </div>
            </SmallFrame>

            <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>Temas Pré-definidos</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[
                    { name: 'Vermelho Energia', colors: ['#ef4444', '#f97316', '#eab308'] },
                    { name: 'Azul Moderno', colors: ['#3b82f6', '#6366f1', '#8b5cf6'] },
                    { name: 'Roxo Criativo', colors: ['#a855f7', '#ec4899', '#f97316'] },
                    { name: 'Verde Natural', colors: ['#22c55e', '#84cc16', '#eab308'] },
                    { name: 'Escuro Elegante', colors: ['#374151', '#4b5563', '#eab308'] },
                  ].map(theme => (
                    <div key={theme.name} style={{ background: '#fafafa', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ display: 'flex', gap: 2 }}>
                        {theme.colors.map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: 2, background: c }} />)}
                      </div>
                      <span style={{ fontSize: 11, color: SECONDARY }}>{theme.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>Configurações</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { label: 'Fonte Principal', value: 'ARIAL / Personalizado' },
                    { label: 'Sombra dos Cards', value: 'Nenhuma / Média / Alta' },
                    { label: 'Estilo de Botões', value: 'Quadrado / Arredondado / Pílula' },
                    { label: 'Posição do Logo', value: 'Canto inferior esquerdo' },
                    { label: 'Posição do Formulário', value: 'Lado direito' },
                  ].map(s => (
                    <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${BORDER}` }}>
                      <span style={{ fontSize: 12, color: TEXT, fontWeight: 500 }}>{s.label}</span>
                      <span style={{ fontSize: 12, color: SECONDARY }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section number="04 —" title="Discovery & Requisitos">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
            {[
              { phase: 'Entrevistas com usuários internos', items: ['Operação', 'Financeiro', 'Suporte', 'Vendas'] },
              { phase: 'Análise de uso', items: ['Funções mais usadas', 'Pontos de atrito', 'Erros recorrentes'] },
              { phase: 'Alinhamento técnico', items: ['Viabilidade técnica', 'Dívida técnica', 'Dependências'] },
              { phase: 'Priorização', items: ['Impact vs Effort', 'Quick wins', 'Roadmap trimestral'] },
            ].map(item => (
              <div key={item.phase} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: ACCENT, letterSpacing: '0.08em', marginBottom: 12 }}>{item.phase}</div>
                {item.items.map(i => (
                  <div key={i} style={{ fontSize: 13, color: SECONDARY, padding: '2px 0' }}>· {i}</div>
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section number="05 —" title="User Stories & Backlog">
          <p style={{ color: SECONDARY, fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
            Como PO, fui responsável pela escrita e refinamento das user stories, conectando o que foi descoberto na pesquisa com o que era viável de entregar.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { as: 'administrador', need: 'configurar o tema visual do checkout sem depender do time técnico', so: 'possa adaptar a experiência à identidade da marca rapidamente' },
              { as: 'administrador', need: 'ver um preview em tempo real do checkout', so: 'possa validar as mudanças antes de publicar para os usuários finais' },
              { as: 'operador', need: 'filtrar pedidos por status e data', so: 'possa priorizar o que precisa de ação imediata' },
            ].map((story, i) => (
              <div key={i} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <span style={{ fontSize: 13, color: TEXT }}>Como <strong>{story.as}</strong>, quero <strong>{story.need}</strong>, para que <strong>{story.so}</strong>.</span>
              </div>
            ))}
          </div>
        </Section>

        <Section number="06 —" title="Processo completo: PO + Designer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { step: 'Discovery', desc: 'Entrevistas com usuários internos e análise de dados de uso' },
              { step: 'Definição de Requisitos', desc: 'Documentação de necessidades, restrições e critérios de aceite' },
              { step: 'Backlog & Priorização', desc: 'Impact vs Effort, alinhamento com stakeholders e planejamento de sprint' },
              { step: 'UX/UI', desc: 'Wireframes, protótipos e Design System para o contexto de backoffice' },
              { step: 'Colaboração com Dev', desc: 'Refinamento técnico, clareza de entrega e handoff detalhado' },
              { step: 'QA & Validação', desc: 'Validação de critérios de aceite, testes com usuários internos' },
              { step: 'Release & Monitoramento', desc: 'Comunicação de mudanças, treinamento e acompanhamento pós-lançamento' },
            ].map((s, i) => (
              <div key={s.step} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: ACCENT, color: '#fff', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 10 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ flex: 1, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: '14px 20px' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, marginBottom: 4 }}>{s.step}</div>
                  <div style={{ fontSize: 13, color: SECONDARY }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section number="07 —" title="Aprendizados">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { title: 'Backoffice exige contexto profundo', desc: 'Sem entender os fluxos operacionais reais, é impossível priorizar o que realmente impacta quem usa a plataforma diariamente.' },
              { title: 'Design para especialistas é diferente', desc: 'Usuários internos são avançados e toleram densidade — o desafio é organizar, não simplificar demais.' },
              { title: 'PO garante viabilidade do design', desc: 'Alinhar requisitos técnicos desde o wireframe evita retrabalho e garante que o que foi projetado seja o que chega ao usuário.' },
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
          <Link to="/portal-assinante" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: SECONDARY, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
            <ArrowLeft size={16} /> Portal do Assinante
          </Link>
          <Link to="/design-system" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: TEXT, textDecoration: 'none', fontSize: 14, fontWeight: 700, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 20px' }}>
            Próximo: Design System <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
