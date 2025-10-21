import { css } from 'styled-components'
import styled from 'styled-components/native'

interface IButton {
  isDisabled: boolean
}

export const Container = styled.TouchableOpacity<IButton>`
  width: 100%;
  height: 48px;
  padding: 0 20px;
  background: #2c46b1;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isDisabled }) =>
    !isDisabled
      ? css`
          color: #2c46b1;
        `
      : css`
          opacity: 0.4;
        `}
`

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`
