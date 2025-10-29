import * as S from './styles'
import Modal from 'react-native-modal'

interface IModalConfirmationProps {
  isVisible: boolean
  onPressCancel?: () => void
  onPressConfirm?: () => void
  onBackdropPress?: () => void
}

export const ModalConfirmation: React.FC<IModalConfirmationProps> = ({
  isVisible,
  onBackdropPress,
  onPressCancel,
  onPressConfirm,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      animationInTiming={500}
      animationOutTiming={600}
      useNativeDriver={true}
    >
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
    </Modal>
  )
}
