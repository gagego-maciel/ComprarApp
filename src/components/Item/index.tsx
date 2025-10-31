import type { TStatus } from '@/types/status'
import * as S from './styles'

import pendenteIcon from '@/assets/pendente-icon.png'
import compradosIcon from '@/assets/comprados-icon.png'
import deleteIcon from '@/assets/delete-icon.png'

export interface IItemProps {
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
        <S.ButtonPurchased onPress={onPressCompleted} testID="button-purchased">
          {status === 'PENDING' ? (
            <S.LogoImage source={pendenteIcon} />
          ) : (
            <S.LogoImage source={compradosIcon} />
          )}

          <S.Label isPurchased={status}>{label}</S.Label>
        </S.ButtonPurchased>
      </S.LabelWrapper>

      <S.ButtonDelete onPress={onPressRemoveItem} testID="button-delete">
        <S.LogoImage source={deleteIcon} />
      </S.ButtonDelete>
    </S.Container>
  )
}
