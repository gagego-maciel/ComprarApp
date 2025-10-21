import type { TStatus } from '@/types/status'
import * as S from './styles'

interface IItemProps {
  status: TStatus
  label: string
  onPressCompleted?: () => void
  onPressRemoveItem?: () => void
}

export const Item: React.FC<IItemProps> = ({
  status,
  label,
  onPressCompleted,
  onPressRemoveItem,
}) => {
  return (
    <S.Container>
      <S.LabelWrapper>
        <S.ButtonPurchased onPress={onPressCompleted}>
          {status === 'PENDING' ? (
            <S.LogoImage source={require('@/assets/pendente-icon.png')} />
          ) : (
            <S.LogoImage source={require('@/assets/comprados-icon.png')} />
          )}

          <S.Label isPurchased={status}>{label}</S.Label>
        </S.ButtonPurchased>
      </S.LabelWrapper>

      <S.ButtonDelete onPress={onPressRemoveItem}>
        <S.LogoImage source={require('@/assets/delete-icon.png')} />
      </S.ButtonDelete>
    </S.Container>
  )
}
