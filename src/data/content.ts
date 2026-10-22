import type { Horizon, NavItem, Pillar, RoutineItem, Stat, Step } from '../types'

// ✏️ Troque pelo e-mail real da granja
export const contact = {
  email: 'SEU-EMAIL-AQUI@exemplo.com',
}

export const navItems: NavItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'dia-a-dia', label: 'Dia a dia' },
  { id: 'lote-piloto', label: 'Lote-piloto' },
  { id: 'expansao', label: 'Expansão' },
  { id: 'pilares', label: 'Pilares' },
]

export const stats: Stat[] = [
  { value: '30–50', label: 'aves no lote-piloto' },
  { value: '2–3', label: 'meses de validação' },
  { value: '2', label: 'baias reformadas' },
  { value: '100%', label: 'rotina registrada' },
]

export const routine: RoutineItem[] = [
  { time: '06:00', title: 'Abertura do piquete', icon: 'sun' },
  { time: '07:30', title: 'Água e ração', icon: 'drop' },
  { time: '10:00', title: 'Primeira coleta de ovos', icon: 'egg' },
  { time: '14:00', title: 'Seleção e embalagem', icon: 'tag' },
  { time: '17:30', title: 'Recolhimento das aves', icon: 'shield' },
  { time: '18:30', title: 'Registro do dia', icon: 'chart' },
]

export const steps: Step[] = [
  {
    number: '01',
    title: 'Levantamento',
    description: 'Limpeza, medições, vistoria da estrutura e levantamento de custos.',
  },
  {
    number: '02',
    title: 'Reforma',
    description: 'Adequação das baias e cercamento da área externa para as aves.',
  },
  {
    number: '03',
    title: 'Preparação',
    description: 'Equipamentos, armazenamento e rotinas de manejo definidas.',
  },
  {
    number: '04',
    title: 'Lote-piloto',
    description: 'Início com poucas aves, acompanhando indicadores e a procura pelos ovos.',
  },
  {
    number: '05',
    title: 'Expansão',
    description: 'Decisão baseada em dados reais de produção, custos, saúde e vendas.',
  },
]

export const horizons: Horizon[] = [
  {
    tag: 'Hoje',
    title: 'Lote-piloto',
    description: 'Uma estrutura enxuta para provar o manejo, a qualidade dos ovos e a procura.',
  },
  {
    tag: 'Próximo passo',
    title: 'Consolidação',
    description: 'Mais aves, rotina afinada e uma base fiel de clientes que confia na marca.',
  },
  {
    tag: 'Visão',
    title: 'Granja de referência',
    description: 'Uma operação em grande escala, reconhecida pela qualidade e pela transparência.',
  },
]

export const pillars: Pillar[] = [
  {
    icon: 'leaf',
    title: 'Criação caipira',
    description: 'Aves com espaço para circular ao ar livre durante o dia.',
  },
  {
    icon: 'shield',
    title: 'Biossegurança',
    description: 'Estrutura protegida contra predadores e plano de limpeza e sanidade.',
  },
  {
    icon: 'chart',
    title: 'Gestão com dados',
    description: 'Registro diário de ração, ovos e ocorrências para decidir com segurança.',
  },
  {
    icon: 'egg',
    title: 'Cuidado com o ovo',
    description: 'Coleta, seleção e armazenamento pensados para conservar a qualidade.',
  },
  {
    icon: 'tag',
    title: 'Rastreabilidade',
    description: 'Cada lote com origem, data e registro, do ninho até a entrega.',
  },
  {
    icon: 'eye',
    title: 'Transparência',
    description: 'Mostramos a rotina da granja para quem compra e para quem investe.',
  },
]
