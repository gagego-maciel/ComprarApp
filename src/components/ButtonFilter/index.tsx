import * as S from './styles'
import {
  useButtonFilter,
  type ButtonFilterProps,
} from '@/components/ButtonFilter/hooks/useButtonFilter'

export const ButtonFilter: React.FC<ButtonFilterProps> = ({
  status,
  isActive,
  onPress,
}) => {
  const { FILTER_CONFIG } = useButtonFilter()
  const { label, iconActive, iconDisabled } = FILTER_CONFIG[status]
  const icon = isActive ? iconActive : iconDisabled

  return (
    <S.Container onPress={onPress} testID={`button-${status}`}>
      {icon && <S.LogoImage source={icon} />}
      <S.ButtonText isActive={isActive}>{label}</S.ButtonText>
    </S.Container>
  )
}
