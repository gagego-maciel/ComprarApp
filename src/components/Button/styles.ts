import { css } from 'styled-components'
import styled from 'styled-components/native'

interface IButton {
  isDisabled: boolean
}

export const Container = styled.TouchableOpacity<IButton>`
  width: 100%;
  height: 48px;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.backgroundButtonBlue};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isDisabled, theme }) =>
    !isDisabled
      ? css`
          background: ${theme.colors.backgroundButtonBlue};
        `
      : css`
          opacity: 0.5;
        `}
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 16px;
  font-weight: 600;
`
