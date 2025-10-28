import type { TStatus } from '@/types/status'
import * as S from './styles'

interface ButtonFilterProps {
  status: TStatus
  isActive: boolean
  onPress: () => void
}

const FILTER_CONFIG = {
  ALL: {
    label: 'Todos',
    iconActive: require('@/assets/pendente-icon.png'),
    iconDisabled: require('@/assets/pendente-disabled-icon.png'),
  },
  PENDING: {
    label: 'Pendentes',
    iconActive: require('@/assets/pendente-icon.png'),
    iconDisabled: require('@/assets/pendente-disabled-icon.png'),
  },
  PURCHASED: {
    label: 'Comprados',
    iconActive: require('@/assets/comprados-icon.png'),
    iconDisabled: require('@/assets/comprados-disabled-icon.png'),
  },
} as const

export const ButtonFilter: React.FC<ButtonFilterProps> = ({
  status,
  isActive,
  onPress,
}) => {
  const { label, iconActive, iconDisabled } = FILTER_CONFIG[status]
  const icon = isActive ? iconActive : iconDisabled

  return (
    <S.Container onPress={onPress}>
      {icon && <S.LogoImage source={icon} />}
      <S.ButtonText isActive={isActive}>{label}</S.ButtonText>
    </S.Container>
  )
}
