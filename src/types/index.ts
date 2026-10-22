export type IconName =
  | 'leaf'
  | 'shield'
  | 'chart'
  | 'egg'
  | 'flame'
  | 'sun'
  | 'drop'
  | 'clock'
  | 'bird'
  | 'tag'
  | 'eye'
  | 'arrow'
  | 'menu'
  | 'x'

export interface NavItem {
  id: string
  label: string
}

export interface Stat {
  value: string
  label: string
}

export interface Step {
  number: string
  title: string
  description: string
}

export interface Pillar {
  icon: IconName
  title: string
  description: string
}

export interface Horizon {
  tag: string
  title: string
  description: string
}

export interface RoutineItem {
  time: string
  title: string
  icon: IconName
}

export interface DayPoint {
  day: number
  eggs: number
}

export interface KpiData {
  icon: IconName
  label: string
  value: number
  hint: string
  suffix?: string
  decimals?: number
}
