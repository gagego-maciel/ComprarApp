import pendenteIcon from '@/assets/pendente-icon.png'
import pendenteDisabled from '@/assets/pendente-disabled-icon.png'

import compradosIcon from '@/assets/comprados-icon.png'
import compradosDisabled from '@/assets/comprados-disabled-icon.png'

import type { TStatus } from '@/types/status'

export interface ButtonFilterProps {
  status: TStatus
  isActive: boolean
  onPress: () => void
}

export const useButtonFilter = () => {
  const basePendingIcons = {
    iconActive: pendenteIcon,
    iconDisabled: pendenteDisabled,
  } as const

  const FILTER_CONFIG = {
    ALL: {
      label: 'Todos',
      ...basePendingIcons,
    },
    PENDING: {
      label: 'Pendentes',
      ...basePendingIcons,
    },
    PURCHASED: {
      label: 'Comprados',
      iconActive: compradosIcon,
      iconDisabled: compradosDisabled,
    },
  } as const

  return { FILTER_CONFIG }
}
