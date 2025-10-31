import { css } from 'styled-components'
import styled from 'styled-components/native'
import type { TStatus } from '@/types/status'

interface ILabelProps {
  isPurchased: TStatus
}

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.divider};
`

export const ButtonPurchased = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 16px 0;
`

export const LogoImage = styled.Image`
  width: 18px;
  height: 18px;
`

export const LabelWrapper = styled.View``

export const Label = styled.Text<ILabelProps>`
  font-size: 14px;
  font-weight: 500;

  ${({ isPurchased }) =>
    isPurchased === 'PURCHASED'
      ? css`
          text-decoration-line: line-through;
        `
      : css`
          text-decoration-line: none;
        `}
`

export const ButtonDelete = styled.TouchableOpacity`
  margin: 16px 0;
`
