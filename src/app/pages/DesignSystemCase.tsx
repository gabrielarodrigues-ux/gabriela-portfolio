import { useState } from 'react';
import { Link } from 'react-router';
import {
  ArrowLeft, ChevronDown, Check, X, AlertCircle,
  LayoutDashboard, BookOpen, FileText, Ticket, ShoppingBag,
  CreditCard, DollarSign, Activity, Webhook, Bell, FileDown,
  Settings, ChevronRight, PanelLeftClose, Download, RefreshCw, Menu,
} from 'lucide-react';
import imgDesignSystem from '../../imports/image.png';

const NAVY  = '#031627';
const NAVY2 = '#0C1E69';
const ACCENT = '#6D5DF5';
const BG    = '#F8F8F6';
const TEXT  = '#171717';
const MUTED = '#6B7280';
const BORDER = '#E5E5E2';

/* ─── shared wrapper ─── */
function PreviewBox({ children, bg = '#fff', p = 32 }: { children: React.ReactNode; bg?: string; p?: number }) {
  return (
    <div style={{ background: bg, border: `1px solid ${BORDER}`, borderRadius: 14, padding: p, overflow: 'hidden' }}>
      {children}
    </div>
  );
}

/* ─── section heading ─── */
function Section({ n, title, desc, children }: { n: string; title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div style={{ paddingBottom: 80, borderBottom: `1px solid ${BORDER}`, marginBottom: 80 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 6 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.12em' }}>{n}</span>
        <h2 style={{ fontSize: 'clamp(20px,3vw,30px)', fontWeight: 800, letterSpacing: '-0.02em', color: TEXT }}>{title}</h2>
      </div>
      {desc && <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 28, maxWidth: 600 }}>{desc}</p>}
      {!desc && <div style={{ height: 28 }} />}
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   TABLE — image-1
═══════════════════════════════════════════════════════ */
function TablePreview() {
  const rows = [
    { name: 'Exportação de dados de Notas Fiscais', status: 'Erro',       icon: 'err' },
    { name: 'Exportação de dados de Notas Fiscais', status: 'Expirado',   icon: 'exp' },
    { name: 'Exportação de dados de Planos',        status: 'Disponível', icon: 'ok' },
    { name: 'Exportação de dados de Planos',        status: 'Disponível', icon: 'ok' },
  ];

  const badgeStyle: Record<string, React.CSSProperties> = {
    err: { background: '#FDECEA', color: '#D93025', border: '1px solid #F5C6C2' },
    exp: { background: '#F3F4F6', color: '#6B7280', border: '1px solid #D1D5DB' },
    ok:  { background: '#DCFCE7', color: '#15803D', border: '1px solid #BBF7D0' },
  };

  const badgeIcon = { err: <AlertCircle size={11} />, exp: <X size={11} />, ok: <Check size={11} /> };

  const cols = ['Nome do relatório', 'Status', 'Data de expiração', 'Data de Disponibilização', 'Data de Criação', 'Data de Atualização', ''];
  const grid = '2fr 1.1fr 1.4fr 1.6fr 1.3fr 1.5fr 40px';

  return (
    <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
      {/* toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: TEXT }}>Relatórios</span>
          <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: MUTED, fontWeight: 700 }}>i</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: '6px 10px', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><RefreshCw size={14} color={MUTED} /></button>
          <button style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: '6px 10px', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Menu size={14} color={MUTED} /></button>
        </div>
      </div>

      {/* header row */}
      <div style={{ display: 'grid', gridTemplateColumns: grid, padding: '10px 16px', gap: 8, borderBottom: `1px solid ${BORDER}`, background: '#fff' }}>
        {cols.map((c, i) => <div key={i} style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>{c}</div>)}
      </div>

      {/* data rows */}
      {rows.map((row, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: grid, padding: '11px 16px', gap: 8, alignItems: 'center', background: i % 2 === 1 ? '#EEF2FF' : '#fff', borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 12.5, color: TEXT, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.name}</div>
          <div>
            <span style={{ ...badgeStyle[row.icon], borderRadius: 20, padding: '3px 10px', fontSize: 12, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              {badgeIcon[row.icon as keyof typeof badgeIcon]}
              {row.status}
            </span>
          </div>
          {[0, 1, 2, 3].map(c => <div key={c} style={{ fontSize: 12, color: '#4B5563' }}>11/10/2024 04:00:53</div>)}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Download size={15} color="#6B7280" style={{ cursor: 'pointer' }} />
          </div>
        </div>
      ))}

      {/* empty striped rows */}
      {[0,1,2,3,4,5,6].map(i => (
        <div key={i} style={{ height: 38, background: i % 2 === 1 ? '#EEF2FF' : '#fff', borderBottom: `1px solid ${BORDER}` }} />
      ))}

      {/* pagination */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#fff' }}>
        <span style={{ fontSize: 13, color: MUTED }}>1–50 de 310</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 13, color: MUTED, display: 'flex', alignItems: 'center', gap: 4 }}>Rows: 50 <ChevronDown size={13} /></span>
          <span style={{ fontSize: 13, color: MUTED }}>2 de 10</span>
          {['Anterior', 'Próximo'].map(l => (
            <button key={l} style={{ border: `1px solid ${BORDER}`, borderRadius: 8, padding: '7px 16px', fontSize: 13, fontWeight: 500, color: TEXT, background: '#fff', cursor: 'pointer' }}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   BUTTONS — image-2
═══════════════════════════════════════════════════════ */
function ButtonsPreview() {
  return (
    <PreviewBox bg="#f9fafb">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <button style={{
          border: `1.5px solid ${NAVY2}`,
          borderRadius: 10,
          padding: '10px 28px',
          fontSize: 14,
          fontWeight: 500,
          color: NAVY2,
          background: '#fff',
          cursor: 'pointer',
          letterSpacing: 0.1,
        }}>
          Voltar
        </button>
        <button style={{
          border: 'none',
          borderRadius: 10,
          padding: '10px 32px',
          fontSize: 14,
          fontWeight: 600,
          color: '#fff',
          background: NAVY2,
          cursor: 'pointer',
          letterSpacing: 0.1,
        }}>
          Confirmar
        </button>
      </div>
    </PreviewBox>
  );
}

/* ═══════════════════════════════════════════════════════
   INPUTS — image-3
═══════════════════════════════════════════════════════ */
function InputsPreview() {
  const field: React.CSSProperties = {
    border: `1px solid #CBD5E1`,
    borderRadius: 10,
    padding: '11px 14px',
    fontSize: 14,
    color: '#9CA3AF',
    background: '#fff',
    width: '100%',
    outline: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  };
  const lbl: React.CSSProperties = { fontSize: 14, fontWeight: 800, color: NAVY2, marginBottom: 8, display: 'block', letterSpacing: '-0.01em' };

  return (
    <PreviewBox bg="#fff" p={36}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* CEP / Estado / Cidade */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1.8fr', gap: 20 }}>
          <div>
            <label style={lbl}>CEP</label>
            <input style={field} placeholder="11000-020" readOnly />
          </div>
          <div>
            <label style={lbl}>Estado</label>
            <div style={{ position: 'relative' }}>
              <select style={{ ...field, appearance: 'none', paddingRight: 34, cursor: 'pointer' }}>
                <option>SP</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none' }} />
            </div>
          </div>
          <div>
            <label style={lbl}>Cidade</label>
            <input style={field} placeholder="São Paulo" readOnly />
          </div>
        </div>

        {/* Logradouro / Número */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: 20 }}>
          <div>
            <label style={lbl}>Logradouro</label>
            <input style={field} placeholder="Ex: Rua..." readOnly />
          </div>
          <div>
            <label style={lbl}>Número</label>
            <input style={field} placeholder="31" readOnly />
          </div>
        </div>

        {/* Complemento / Bairro */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div>
            <label style={lbl}>Complemento</label>
            <input style={{ ...field, color: TEXT }} defaultValue="Rua 18" readOnly />
          </div>
          <div>
            <label style={lbl}>Bairro</label>
            <input style={{ ...field, color: TEXT }} defaultValue="Vila São José" readOnly />
          </div>
        </div>
      </div>
    </PreviewBox>
  );
}

/* ═══════════════════════════════════════════════════════
   CARDS — image-4
═══════════════════════════════════════════════════════ */
function CardsPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Empty-state card — exact match image-4 */}
      <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 28px 32px' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 28 }}>Régua de cobrança</div>
        <div style={{ textAlign: 'center', color: '#6B7280', fontSize: 13.5, lineHeight: 1.75, padding: '4px 16px 8px' }}>
          Esta seção apresenta os passos realizados pela Régua de Cobrança para facilitar a recuperação de uma venda.
          <br />
          <span style={{ fontWeight: 700, color: TEXT }}>Atualmente, esta venda não passou pelo processo de Régua de Cobrança.</span>
        </div>
      </div>

      {/* Metric cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12 }}>
        {[
          { label: 'Total de planos', value: '1.403', color: NAVY2 },
          { label: 'Ativos',          value: '284',   color: '#15803D' },
          { label: 'Expirados',       value: '67',    color: '#6B7280' },
          { label: 'Com erro',        value: '12',    color: '#DC2626' },
        ].map(s => (
          <div key={s.label} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '18px 20px' }}>
            <div style={{ fontSize: 11.5, color: MUTED, marginBottom: 8 }}>{s.label}</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   TABS DARK — image-5  (vertical panel style)
═══════════════════════════════════════════════════════ */
function DarkTabsPreview() {
  const [active, setActive] = useState('Detalhes');
  const tabs = ['Detalhes', 'Transações', 'Régua de cobrança', 'Ações externas', 'Registro de atividades'];

  return (
    <div style={{ display: 'flex', gap: 0, borderRadius: 12, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
      {/* dark panel */}
      <div style={{ background: NAVY, width: 220, padding: '12px 10px', flexShrink: 0 }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              border: 'none',
              background: active === tab ? '#fff' : 'transparent',
              color: active === tab ? NAVY : 'rgba(255,255,255,0.55)',
              padding: '11px 16px',
              borderRadius: 8,
              fontSize: 13.5,
              fontWeight: active === tab ? 600 : 400,
              cursor: 'pointer',
              marginBottom: 2,
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* content area */}
      <div style={{ flex: 1, background: '#f9fafb', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 13, color: MUTED }}>Conteúdo: <strong style={{ color: TEXT }}>{active}</strong></span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   TABS LIGHT UNDERLINE — image-6
═══════════════════════════════════════════════════════ */
function LightTabsPreview() {
  const [active, setActive] = useState('Notificações');
  const tabs = ['Notificações', 'Logs de envios'];

  return (
    <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden' }}>
      <div style={{ display: 'flex', borderBottom: `1px solid #E5E7EB` }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              border: 'none',
              background: 'transparent',
              color: active === tab ? NAVY2 : '#9CA3AF',
              fontWeight: active === tab ? 700 : 400,
              fontSize: 14.5,
              padding: '16px 28px',
              cursor: 'pointer',
              borderBottom: active === tab ? `2.5px solid ${NAVY2}` : '2.5px solid #E5E7EB',
              marginBottom: -1,
              letterSpacing: '-0.01em',
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{ padding: '20px 28px', fontSize: 13, color: MUTED }}>
        Conteúdo: <strong style={{ color: TEXT }}>{active}</strong>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   DIALOGS — image-7
═══════════════════════════════════════════════════════ */
function DialogsPreview() {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ background: '#F3F4F6', borderRadius: 12, padding: '40px 32px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 240 }}>
      {open ? (
        <div style={{
          background: '#fff',
          borderRadius: 12,
          padding: '36px 40px 32px',
          maxWidth: 500,
          width: '100%',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: NAVY2, marginBottom: 20, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Alterar plano/opção de preço
          </h3>
          <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.65, marginBottom: 4 }}>
            Tem certeza que deseja alterar o plano/opção de preço da assinatura
          </p>
          <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 36 }}>PlanoTestes?</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
            <button
              onClick={() => setOpen(false)}
              style={{ border: `1.5px solid ${BORDER}`, borderRadius: 10, padding: '11px 28px', fontSize: 14, fontWeight: 500, color: TEXT, background: '#fff', cursor: 'pointer' }}
            >
              Cancelar
            </button>
            <button
              onClick={() => setOpen(false)}
              style={{ border: 'none', borderRadius: 10, padding: '11px 28px', fontSize: 14, fontWeight: 600, color: '#fff', background: NAVY2, cursor: 'pointer' }}
            >
              Confirmar
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{ border: 'none', background: NAVY2, color: '#fff', borderRadius: 10, padding: '11px 28px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
        >
          Abrir dialog
        </button>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   TOAST — image-8
═══════════════════════════════════════════════════════ */
function ToastPreview() {
  const [show, setShow] = useState(true);

  return (
    <PreviewBox bg="#F3F4F6" p={32}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
        {/* Success — dark green-black bg, matches image-8 */}
        {show && (
          <div style={{
            background: '#0D2117',
            borderRadius: 10,
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            minWidth: 300,
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}>
            {/* circle-check icon in green */}
            <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #4ADE80', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check size={12} color="#4ADE80" strokeWidth={3} />
            </div>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: '#4ADE80', marginBottom: 2 }}>Sucesso</div>
              <div style={{ fontSize: 13, color: '#D1FAE5' }}>Plano inativado com sucesso</div>
            </div>
          </div>
        )}

        {/* Error */}
        <div style={{
          background: '#1F0A0A',
          borderRadius: 10,
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          minWidth: 300,
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}>
          <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #F87171', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <X size={12} color="#F87171" strokeWidth={3} />
          </div>
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: '#F87171', marginBottom: 2 }}>Erro</div>
            <div style={{ fontSize: 13, color: '#FEE2E2' }}>Não foi possível completar a ação</div>
          </div>
        </div>

        <button
          onClick={() => setShow(v => !v)}
          style={{ fontSize: 12, color: MUTED, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 6, padding: '5px 12px', cursor: 'pointer', marginTop: 4 }}
        >
          {show ? 'Esconder sucesso' : 'Mostrar sucesso'}
        </button>
      </div>
    </PreviewBox>
  );
}

/* ═══════════════════════════════════════════════════════
   SIDEBAR — image-9
═══════════════════════════════════════════════════════ */

type ContentSection = {
  title: string;
  breadcrumb?: string[];
  columns: string[];
  rows: (string | React.ReactNode)[][];
  count: string;
};

const SIDEBAR_CONTENT: Record<string, ContentSection> = {
  Dashboard: {
    title: 'Dashboard',
    columns: ['Métrica', 'Valor', 'Variação', 'Período'],
    rows: [
      ['MRR', 'R$ 142.890', '+8,3%', 'Jul 2024'],
      ['Assinantes Ativos', '1.403', '+5,1%', 'Jul 2024'],
      ['Churn Rate', '2,4%', '-0,3%', 'Jul 2024'],
      ['Receita Total', 'R$ 1,2M', '+12%', 'Jul 2024'],
    ],
    count: '4 métricas',
  },
  Planos: {
    title: 'Planos',
    breadcrumb: ['Catálogo', 'Planos'],
    columns: ['Nome', 'Preço', 'Período', 'Assinantes', 'Status'],
    rows: [
      ['AURA EXCLUSIVE', 'R$ 299,90', 'Anual', '320', 'Ativo'],
      ['AURA PREMIUM', 'R$ 149,90', 'Mensal', '541', 'Ativo'],
      ['AURA BEAUTY', 'R$ 99,90', 'Mensal', '389', 'Ativo'],
      ['AURA GLOW', 'R$ 49,90', 'Mensal', '141', 'Inativo'],
    ],
    count: '1 – 50 de 1.403',
  },
  Cupons: {
    title: 'Cupons',
    breadcrumb: ['Catálogo', 'Cupons'],
    columns: ['Código', 'Desconto', 'Validade', 'Usos', 'Status'],
    rows: [
      ['BLACKFRIDAY50', '50%', '30/11/2024', '238', 'Expirado'],
      ['BEMVINDO10', '10%', '31/12/2024', '1.021', 'Ativo'],
      ['AURA20OFF', 'R$ 20,00', '15/01/2025', '74', 'Ativo'],
      ['FIDELIDADE30', '30%', '28/02/2025', '12', 'Ativo'],
    ],
    count: '1 – 50 de 87',
  },
  Produtos: {
    title: 'Produtos',
    breadcrumb: ['Catálogo', 'Produtos'],
    columns: ['Nome', 'Tipo', 'Categoria', 'Preço', 'Status'],
    rows: [
      ['Kit Skin Care Básico', 'Físico', 'Beleza', 'R$ 189,90', 'Ativo'],
      ['E-book Rotinas Aura', 'Digital', 'Conteúdo', 'R$ 39,90', 'Ativo'],
      ['Consultoria Premium', 'Serviço', 'Consultoria', 'R$ 500,00', 'Ativo'],
      ['Pack Vitaminas', 'Físico', 'Saúde', 'R$ 129,90', 'Inativo'],
    ],
    count: '1 – 50 de 34',
  },
  Cobranças: {
    title: 'Cobranças',
    columns: ['ID', 'Assinante', 'Valor', 'Vencimento', 'Status'],
    rows: [
      ['#78231', 'Maria Silva', 'R$ 149,90', '10/07/2024', 'Pago'],
      ['#78230', 'João Santos', 'R$ 299,90', '09/07/2024', 'Pago'],
      ['#78229', 'Ana Lima', 'R$ 99,90', '08/07/2024', 'Pendente'],
      ['#78228', 'Carlos Mendes', 'R$ 49,90', '05/07/2024', 'Vencido'],
      ['#78227', 'Paula Rocha', 'R$ 149,90', '03/07/2024', 'Pago'],
    ],
    count: '1 – 50 de 4.210',
  },
  Financeiro: {
    title: 'Financeiro',
    columns: ['Relatório', 'Status', 'Criação', 'Tamanho', ''],
    rows: [
      ['Nota Fiscal Jul/2024', 'Disponível', '01/07/2024', '2,4 MB', 'Baixar'],
      ['Nota Fiscal Jun/2024', 'Disponível', '01/06/2024', '2,1 MB', 'Baixar'],
      ['Régua Cobrança Q2', 'Disponível', '30/06/2024', '890 KB', 'Baixar'],
      ['Nota Fiscal Mai/2024', 'Expirado', '01/05/2024', '—', '—'],
    ],
    count: '1 – 50 de 28',
  },
  Atividades: {
    title: 'Atividades',
    columns: ['Evento', 'Usuário', 'IP', 'Data/Hora'],
    rows: [
      ['Login bem-sucedido', 'admin@cyclopay.io', '189.6.42.10', '10/07/2024 09:14'],
      ['Plano alterado', 'admin@cyclopay.io', '189.6.42.10', '10/07/2024 09:20'],
      ['Cupom criado', 'ops@cyclopay.io', '177.34.11.9', '09/07/2024 16:03'],
      ['Usuário exportado', 'admin@cyclopay.io', '189.6.42.10', '08/07/2024 14:55'],
    ],
    count: '1 – 50 de 2.881',
  },
  Webhooks: {
    title: 'Webhooks',
    columns: ['Endpoint', 'Evento', 'Última chamada', 'Status'],
    rows: [
      ['https://api.app.io/hook', 'subscription.created', '10/07/2024 09:14', 'Ativo'],
      ['https://erp.io/webhook', 'charge.paid', '10/07/2024 08:30', 'Ativo'],
      ['https://crm.io/events', 'subscription.canceled', '05/07/2024 11:00', 'Erro'],
      ['https://legacy.io/cb', 'plan.updated', '01/06/2024 10:00', 'Inativo'],
    ],
    count: '1 – 50 de 9',
  },
  Notificações: {
    title: 'Notificações',
    columns: ['Template', 'Canal', 'Gatilho', 'Última Edição'],
    rows: [
      ['Boas-vindas', 'E-mail', 'subscription.created', '01/07/2024'],
      ['Cobrança pendente', 'E-mail + SMS', 'charge.pending', '15/06/2024'],
      ['Pagamento confirmado', 'E-mail', 'charge.paid', '10/06/2024'],
      ['Plano expirado', 'E-mail', 'subscription.expired', '01/05/2024'],
    ],
    count: '1 – 50 de 12',
  },
  Relatórios: {
    title: 'Relatórios',
    columns: ['Nome do relatório', 'Status', 'Data de expiração', 'Data de Criação'],
    rows: [
      ['Exportação de dados de Notas Fiscais', 'Erro', '10/10/2024', '01/10/2024'],
      ['Exportação de dados de Notas Fiscais', 'Expirado', '09/09/2024', '01/09/2024'],
      ['Exportação de dados de Planos', 'Disponível', '10/11/2024', '01/10/2024'],
      ['Exportação de dados de Planos', 'Disponível', '10/11/2024', '01/10/2024'],
    ],
    count: '1 – 50 de 310',
  },
  Configurações: {
    title: 'Configurações',
    columns: ['Configuração', 'Valor', 'Última alteração', 'Usuário'],
    rows: [
      ['Moeda padrão', 'BRL (R$)', '01/07/2024', 'admin@cyclopay.io'],
      ['Timezone', 'America/Sao_Paulo', '15/01/2024', 'admin@cyclopay.io'],
      ['Autenticação 2FA', 'Habilitado', '10/03/2024', 'ops@cyclopay.io'],
      ['Webhook retry', '3 tentativas', '20/02/2024', 'admin@cyclopay.io'],
    ],
    count: '4 configurações',
  },
};

const STATUS_STYLE: Record<string, React.CSSProperties> = {
  Ativo:       { background: '#DCFCE7', color: '#15803D', border: '1px solid #BBF7D0' },
  Ativo_blue:  { background: '#EEF2FF', color: '#3730A3', border: '1px solid #C7D2FE' },
  Inativo:     { background: '#F3F4F6', color: '#6B7280', border: '1px solid #D1D5DB' },
  Pago:        { background: '#DCFCE7', color: '#15803D', border: '1px solid #BBF7D0' },
  Pendente:    { background: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A' },
  Vencido:     { background: '#FDECEA', color: '#D93025', border: '1px solid #F5C6C2' },
  Expirado:    { background: '#F3F4F6', color: '#6B7280', border: '1px solid #D1D5DB' },
  Disponível:  { background: '#DCFCE7', color: '#15803D', border: '1px solid #BBF7D0' },
  Erro:        { background: '#FDECEA', color: '#D93025', border: '1px solid #F5C6C2' },
  Habilitado:  { background: '#DCFCE7', color: '#15803D', border: '1px solid #BBF7D0' },
};

function SidebarContentTable({ section }: { section: ContentSection }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <h1 style={{ fontSize: 22, fontWeight: 900, color: TEXT, marginBottom: 4, letterSpacing: '-0.02em' }}>{section.title}</h1>
      {section.breadcrumb && (
        <div style={{ fontSize: 11.5, color: MUTED, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 5 }}>
          {section.breadcrumb.map((b, i) => (
            <span key={b} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              {i > 0 && <ChevronRight size={10} />}
              {b}
            </span>
          ))}
        </div>
      )}
      {!section.breadcrumb && <div style={{ marginBottom: 14 }} />}
      <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 8, overflow: 'hidden', fontSize: 11.5 }}>
        {/* header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${section.columns.length}, 1fr)`,
          padding: '8px 14px',
          background: '#fff',
        }}>
          {section.columns.map(c => (
            <div key={c} style={{ fontWeight: 700, color: '#374151', fontSize: 11 }}>{c}</div>
          ))}
        </div>
        {/* rows */}
        {section.rows.map((row, ri) => (
          <div key={ri} style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${section.columns.length}, 1fr)`,
            padding: '9px 14px',
            borderBottom: `1px solid ${BORDER}`,
            background: ri % 2 === 1 ? '#EEF2FF' : '#fff',
            alignItems: 'center',
          }}>
            {row.map((cell, ci) => {
              const statusStyle = STATUS_STYLE[cell as string];
              return (
                <div key={ci} style={{ color: ci === 0 ? NAVY2 : TEXT, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {statusStyle ? (
                    <span style={{ ...statusStyle, borderRadius: 20, padding: '2px 8px', fontSize: 10.5, fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                      {cell}
                    </span>
                  ) : (
                    <span style={{ color: ci === 0 ? NAVY2 : '#4B5563' }}>{cell}</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11, color: MUTED, marginTop: 8 }}>{section.count}</div>
    </div>
  );
}

function SidebarPreview() {
  const [active,   setActive]   = useState<string>('Planos');
  const [expanded, setExpanded] = useState<string>('Catálogo');
  const [tooltip,  setTooltip]  = useState<string | null>(null);

  type NavItem = {
    id: string;
    icon: React.ReactNode;
    label: string;
    children?: NavItem[];
    submenu?: { icon: React.ReactNode; label: string }[];
  };

  const nav: NavItem[] = [
    { id: 'Dashboard',  icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    {
      id: 'Catálogo', icon: <BookOpen size={20} />, label: 'Catálogo',
      children: [
        { id: 'Planos',    icon: <FileText size={18} />, label: 'Planos' },
        { id: 'Cupons',    icon: <Ticket size={18} />,   label: 'Cupons' },
        { id: 'Produtos',  icon: <ShoppingBag size={18} />, label: 'Produtos' },
      ],
    },
    { id: 'Cobranças',    icon: <CreditCard size={20} />,  label: 'Cobranças' },
    {
      id: 'Financeiro', icon: <DollarSign size={20} />, label: 'Financeiro',
      submenu: [
        { icon: <FileDown size={16} />,  label: 'Régua de cobrança' },
        { icon: <FileText size={16} />,  label: 'Nota fiscal' },
      ],
    },
    { id: 'Atividades',    icon: <Activity size={20} />,  label: 'Atividades' },
    { id: 'Webhooks',      icon: <Webhook size={20} />,   label: 'Webhooks' },
    { id: 'Notificações',  icon: <Bell size={20} />,      label: 'Notificações' },
    { id: 'Relatórios',    icon: <FileDown size={20} />,  label: 'Relatórios' },
    { id: 'Configurações', icon: <Settings size={20} />,  label: 'Configurações' },
  ];

  const isParentActive = (item: NavItem) =>
    item.children?.some(c => c.id === active) || item.id === expanded;

  const parentPill = (item: NavItem): React.CSSProperties => {
    if (item.id === 'Catálogo' && isParentActive(item)) {
      return { background: 'transparent', border: '1.5px solid #fff' };
    }
    if (item.id === 'Financeiro' && tooltip === 'Financeiro') {
      return { background: 'transparent', border: '1.5px solid #fff' };
    }
    return { background: 'transparent', border: '1.5px solid transparent' };
  };

  const childPill = (id: string): React.CSSProperties =>
    id === active
      ? { background: 'rgba(109,93,245,0.30)', border: '1.5px solid transparent' }
      : { background: 'transparent', border: '1.5px solid transparent' };

  const parentLabelColor = (item: NavItem) =>
    isParentActive(item) || item.id === active ? '#fff' : 'rgba(255,255,255,0.6)';

  return (
    <div style={{ display: 'flex', borderRadius: 14, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
      {/* ── sidebar ── */}
      <div style={{ width: 240, background: NAVY, display: 'flex', flexDirection: 'column', minHeight: 540 }}>
        {/* collapse */}
        <div style={{ padding: '18px 20px 12px' }}>
          <PanelLeftClose size={22} color="rgba(255,255,255,0.45)" style={{ cursor: 'pointer' }} />
        </div>

        {/* nav */}
        <nav style={{ flex: 1, padding: '4px 10px', overflowY: 'auto' }}>
          {nav.map(item => (
            <div key={item.id}>
              {/* parent row */}
              <button
                onClick={() => {
                  if (item.children) {
                    setExpanded(expanded === item.id ? '' : item.id);
                    setTooltip(null);
                  } else if (item.submenu) {
                    setTooltip(tooltip === item.id ? null : item.id);
                    setActive(item.id);
                  } else {
                    setActive(item.id);
                    setTooltip(null);
                    setExpanded('');
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  width: '100%',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px 12px',
                  borderRadius: 10,
                  margin: '2px 0',
                  background: active === item.id && !item.children ? 'rgba(255,255,255,0.1)' : 'transparent',
                  ...parentPill(item),
                  position: 'relative',
                }}
              >
                <span style={{ color: parentLabelColor(item), display: 'flex', flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: 14, fontWeight: isParentActive(item) || active === item.id ? 600 : 400, color: parentLabelColor(item), flex: 1, textAlign: 'left' }}>
                  {item.label}
                </span>
                {item.children && (
                  <ChevronRight size={14} color="rgba(255,255,255,0.35)"
                    style={{ transform: expanded === item.id ? 'rotate(90deg)' : 'none', transition: 'transform 0.18s' }}
                  />
                )}

                {/* submenu tooltip */}
                {item.submenu && tooltip === item.id && (
                  <div style={{
                    position: 'absolute', left: 'calc(100% + 10px)', top: 0,
                    background: '#0A1525', borderRadius: 12, padding: '18px 20px',
                    minWidth: 190, boxShadow: '0 8px 28px rgba(0,0,0,0.35)', zIndex: 20,
                  }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 14 }}>{item.label}</div>
                    {item.submenu.map(s => (
                      <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0', color: 'rgba(255,255,255,0.7)', fontSize: 13.5 }}>
                        <span style={{ color: 'rgba(255,255,255,0.45)' }}>{s.icon}</span>
                        {s.label}
                      </div>
                    ))}
                  </div>
                )}
              </button>

              {/* children */}
              {item.children && expanded === item.id && (
                <div style={{ paddingLeft: 10, paddingBottom: 4 }}>
                  {item.children.map(child => (
                    <button
                      key={child.id}
                      onClick={() => { setActive(child.id); setTooltip(null); }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        width: '100%',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '9px 12px 9px 20px',
                        borderRadius: 10,
                        margin: '2px 0',
                        ...childPill(child.id),
                      }}
                    >
                      <span style={{ color: child.id === active ? '#A78BFA' : 'rgba(255,255,255,0.5)', display: 'flex' }}>{child.icon}</span>
                      <span style={{ fontSize: 13.5, color: child.id === active ? '#C4B5FD' : 'rgba(255,255,255,0.55)', fontWeight: child.id === active ? 600 : 400 }}>
                        {child.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* brand */}
        <div style={{ padding: '14px 22px 18px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 900, color: '#fff', letterSpacing: '-0.01em' }}>cyclopay</span>
        </div>
      </div>

      {/* ── content preview ── */}
      <div style={{ flex: 1, background: '#F9FAFB', padding: '20px 22px', minWidth: 0, overflow: 'hidden' }}>
        {SIDEBAR_CONTENT[active] ? (
          <SidebarContentTable section={SIDEBAR_CONTENT[active]} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <span style={{ fontSize: 13, color: MUTED }}>{active}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════ */
export function DesignSystemCase() {
  const colorTokens = [
    { name: 'Navy',      hex: NAVY },
    { name: 'Navy 2',    hex: NAVY2 },
    { name: 'Primary',   hex: ACCENT },
    { name: 'Background',hex: BG },
    { name: 'Text',      hex: TEXT },
    { name: 'Muted',     hex: MUTED },
    { name: 'Border',    hex: BORDER },
    { name: 'Success',   hex: '#15803D' },
    { name: 'Warning',   hex: '#A7852B' },
    { name: 'Error',     hex: '#DC2626' },
  ];

  return (
    <div style={{ backgroundColor: BG, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* ── Hero ── */}
      <div style={{ background: '#F5F0FF', borderBottom: `1px solid #DDD6FE`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: MUTED, textDecoration: 'none', fontSize: 13, fontWeight: 600, marginBottom: 40 }}>
            <ArrowLeft size={14} /> Voltar ao portfólio
          </Link>
          <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>
            DESIGN SYSTEM · UX/UI
          </div>
          <h1 style={{ fontSize: 'clamp(40px,7vw,80px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em', color: TEXT, marginBottom: 24 }}>
            Design System
          </h1>
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, maxWidth: 500, marginBottom: 48 }}>
            Criação e evolução de padrões e componentes para construir experiências consistentes e escaláveis em múltiplos produtos.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 36 }}>
            {[
              { label: 'MEU PAPEL', value: 'Product Designer' },
              { label: 'ÂMBITO',    value: 'Figma + Web' },
              { label: 'EXPERIÊNCIA', value: '3 anos' },
            ].map(m => (
              <div key={m.label}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#999', letterSpacing: '0.1em', marginBottom: 4 }}>{m.label}</div>
                <div style={{ fontSize: 14, color: TEXT, fontWeight: 600 }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>

        <Section n="01 —" title="Por que um Design System?" desc="Um sistema de design bem construído vai além da biblioteca de componentes — ele é uma linguagem compartilhada que acelera o desenvolvimento e garante consistência.">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { title: 'Consistência',   icon: '◉', desc: 'Componentes padronizados garantem que cada tela siga os mesmos padrões visuais e de interação.' },
              { title: 'Escalabilidade', icon: '◈', desc: 'Novos times e features podem ser construídos com velocidade usando componentes já testados.' },
              { title: 'Colaboração',    icon: '◎', desc: 'Uma linguagem compartilhada entre design e dev reduz ambiguidade e retrabalho.' },
            ].map(c => (
              <div key={c.title} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ fontSize: 22, color: ACCENT, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 8 }}>{c.title}</div>
                <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Real Figma screenshot */}
        <Section n="02 —" title="Visão Geral — Figma" desc="Estruturado no Figma com páginas dedicadas para Color Style, Font Style, Icons, Buttons, Tabs, Text Fields, Cards, Components, Logotipo, Grid e Images.">
          <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${BORDER}`, boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
            <div style={{ background: '#2c2c2c', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', gap: 5 }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
              </div>
              <div style={{ fontSize: 11, color: '#888', marginLeft: 8 }}>Design System — Figma</div>
            </div>
            <img src={imgDesignSystem} alt="Visão geral do Design System no Figma" style={{ width: '100%', display: 'block' }} />
          </div>
        </Section>

        <Section n="03 —" title="Tables" desc="Linhas alternadas em azul-acinzentado claro. Badges semânticos: Erro (vermelho), Expirado (cinza), Disponível (verde). Paginação com seletor de rows.">
          <TablePreview />
        </Section>

        <Section n="04 —" title="Buttons" desc='"Voltar" com borda navy e fundo branco. "Confirmar" sólido navy. Sempre posicionados nas extremidades opostas da ação.'>
          <ButtonsPreview />
        </Section>

        <Section n="05 —" title="Inputs" desc="Labels em bold navy acima do campo. Bordas sutis arredondadas. Select com chevron integrado. Grid responsivo para múltiplos campos relacionados.">
          <InputsPreview />
        </Section>

        <Section n="06 —" title="Cards" desc="Fundo branco com borda sutil. Título em bold à esquerda. Empty state centralizado com texto regular + negrito para destaque.">
          <CardsPreview />
        </Section>

        <Section n="07 —" title="Tabs" desc="Dark tabs em painel navy com aba ativa em pílula branca. Light tabs com underline navy na aba ativa.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: MUTED, letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>Dark — painel de detalhes</div>
              <DarkTabsPreview />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: MUTED, letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>Light — underline</div>
              <LightTabsPreview />
            </div>
          </div>
        </Section>

        <Section n="08 —" title="Dialogs" desc='Modal com título bold navy. Plano/item em negrito no corpo. Par "Cancelar" (outline) + "Confirmar" (sólido navy) alinhados à direita.'>
          <DialogsPreview />
        </Section>

        <Section n="09 —" title="Toast" desc="Fundo escuro (verde-escuro ou vermelho-escuro). Ícone circular com cor semântica. Label em bold colorido + descrição em tom suave.">
          <ToastPreview />
        </Section>

        <Section n="10 —" title="Sidebar" desc="Navegação dark navy. Catálogo ativo = pílula com borda branca. Sub-item ativo (Planos) = pílula roxa. Tooltip contextual para itens com submenu.">
          <SidebarPreview />
        </Section>

        {/* Color tokens */}
        <Section n="11 —" title="Color Tokens">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
            {colorTokens.map(t => (
              <div key={t.name} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: t.hex, border: '1px solid rgba(0,0,0,0.08)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: TEXT }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: MUTED, fontFamily: 'monospace', marginTop: 2 }}>{t.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Typography */}
        <Section n="12 —" title="Typography Scale">
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, padding: '36px 40px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { label: 'Display',      size: '40px', w: 900, sample: 'Planos' },
              { label: 'H1',           size: '30px', w: 700, sample: 'Preencha com seus dados' },
              { label: 'H2',           size: '20px', w: 700, sample: 'Configurar novo template' },
              { label: 'Body Bold',    size: '16px', w: 600, sample: 'Portal do Assinante' },
              { label: 'Body Regular', size: '14px', w: 400, sample: 'Tem certeza que deseja alterar o plano?' },
              { label: 'Small',        size: '12px', w: 400, sample: 'Texto auxiliar, labels, breadcrumbs.' },
            ].map(t => (
              <div key={t.label} style={{ display: 'flex', alignItems: 'baseline', gap: 20, borderBottom: `1px solid ${BORDER}`, paddingBottom: 16 }}>
                <div style={{ minWidth: 120, fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: '0.08em' }}>{t.label}</div>
                <div style={{ flex: 1, fontSize: t.size, fontWeight: t.w, color: NAVY2, lineHeight: 1.2 }}>{t.sample}</div>
                <div style={{ fontSize: 10, color: MUTED, flexShrink: 0, fontFamily: 'monospace' }}>{t.size} / {t.w}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Impact */}
        <Section n="13 —" title="Impacto">
          <div style={{ background: TEXT, borderRadius: 16, padding: '40px 48px', color: '#fff' }}>
            <p style={{ fontSize: 15, color: '#aaa', lineHeight: 1.75, marginBottom: 36, maxWidth: 640 }}>
              Um Design System bem construído vai além da biblioteca de componentes — ele é uma linguagem compartilhada que acelera o desenvolvimento e garante consistência de forma sustentável.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
              {[
                { v: '60+',  l: 'Componentes',  s: 'Documentados e testados' },
                { v: '120+', l: 'Tokens',        s: 'Cor, tipografia, espaçamento' },
                { v: '3+',   l: 'Produtos',      s: 'Usando o mesmo sistema' },
              ].map(m => (
                <div key={m.l} style={{ background: '#1a1a1a', borderRadius: 12, padding: '24px 28px', textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: ACCENT, marginBottom: 6 }}>{m.v}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{m.l}</div>
                  <div style={{ fontSize: 11.5, color: '#666' }}>{m.s}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Link to="/backoffice" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: MUTED, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
            <ArrowLeft size={16} /> Backoffice
          </Link>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: TEXT, textDecoration: 'none', fontSize: 14, fontWeight: 700, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 20px' }}>
            Ver todos os projetos
          </Link>
        </div>
      </div>
    </div>
  );
}
