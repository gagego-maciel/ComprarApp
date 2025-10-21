import * as S from './styles'

interface IModalConfirmationProps {
  onPressCancel?: () => void
  onPressConfirm?: () => void
}

export const ModalConfirmation: React.FC<IModalConfirmationProps> = ({
  onPressCancel,
  onPressConfirm,
}) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{'Deseja limpar tudo?'}</S.Title>
      </S.Header>

      <S.DescriptionWrapper>
        <S.DescriptionText>
          {
            'Todos os itens da lista serão apagados. Você deseja realmente prosseguir com a remoção?'
          }
        </S.DescriptionText>
      </S.DescriptionWrapper>

      <S.ButtonWrapper>
        <S.Button type="CANCEL" onPress={onPressCancel}>
          <S.ButtonText>{'Cancelar'}</S.ButtonText>
        </S.Button>
        <S.Button type="CONFIRM" onPress={onPressConfirm}>
          <S.ButtonText>{'Continuar'}</S.ButtonText>
        </S.Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}
