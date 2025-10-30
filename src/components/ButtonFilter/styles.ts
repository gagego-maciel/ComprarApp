import { css } from 'styled-components'
import styled from 'styled-components/native'

interface IButtonFilter {
  isActive: boolean
}

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 90px;
  height: 18px;
  gap: 5px;
`

export const ButtonText = styled.Text<IButtonFilter>`
  font-size: 12px;
  font-weight: 500;

  ${({ isActive, theme }) =>
    isActive
      ? css`
          color: ${theme.colors.textBlack};
        `
      : css`
          color: ${theme.colors.textGray};
        `}
`

export const LogoImage = styled.Image``
