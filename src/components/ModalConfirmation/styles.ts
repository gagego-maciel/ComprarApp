import { css } from 'styled-components'
import styled from 'styled-components/native'

interface ModalConfirmationProps {
  type: 'CANCEL' | 'CONFIRM'
}

export const Container = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 16px;
  padding: 24px;
`

export const Header = styled.View`
  margin-bottom: 16px;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
`

export const DescriptionWrapper = styled.View`
  margin-bottom: 24px;
`

export const DescriptionText = styled.Text`
  font-size: 14px;
  font-weight: 400;
`

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

export const Button = styled.TouchableOpacity<ModalConfirmationProps>`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: red;
  padding: 8px 0;

  ${({ type, theme }) =>
    type === 'CANCEL'
      ? css`
          background: ${theme.colors.backgroundButtonRed};
        `
      : css`
          background: ${theme.colors.backgroundButtonBlue};
        `}
`

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textWhite};
`
