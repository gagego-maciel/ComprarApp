import type { TStatus } from '@/types/status'

export const EMPTY_MESSAGES: Record<TStatus, string> = {
  ALL: 'Nenhum item por aqui',
  PENDING: 'Nenhum item pendente',
  PURCHASED: 'Nenhum item comprado',
}
