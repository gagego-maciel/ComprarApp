import { css } from 'styled-components'
import styled from 'styled-components/native'
import type { TStatus } from '@/types/status'

interface IItemProps {
  isPurchased: TStatus
}

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 34px;

  border-bottom-width: 1px;
  border-bottom-color: #e4e6ec;
  padding: 0 0 16px 0;
  margin-top: 16px;
`

export const ButtonPurchased = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const LogoImage = styled.Image`
  width: 18px;
  height: 18px;
`

export const LabelWrapper = styled.View``

export const Label = styled.Text<IItemProps>`
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

export const ButtonDelete = styled.TouchableOpacity``
