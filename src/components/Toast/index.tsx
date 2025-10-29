import * as S from './styles'
import Modal from 'react-native-modal'

interface IToastProps {
  isVisible: boolean
  type?: 'success' | 'error'
}

export const Toast: React.FC<IToastProps> = ({ isVisible, type }) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0}
      useNativeDriver={true}
      animationInTiming={500}
      animationOutTiming={600}
    >
      <S.Container>
        <S.Content>
          <S.Label>
            {type === 'success' ? 'Item removido com sucesso!' : ''}
          </S.Label>
        </S.Content>
      </S.Container>
    </Modal>
  )
}
