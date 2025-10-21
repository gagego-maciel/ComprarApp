import { css } from 'styled-components'
import styled from 'styled-components/native'

interface IHomeProps {
  isActiveClearAll: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: #cccc;
`

export const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`

export const LogoImage = styled.Image`
  width: 154px;
  height: 34;
  margin-top: 62px;
  margin-bottom: 38px;
`

export const InputContainer = styled.Text`
  margin-bottom: 8px;
`

export const ItensContainer = styled.View`
  display: flex;
  width: 100%;
  flex: 1;
  height: 523px;
  background: #ffffff;
  margin-top: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 32px 24px 0 24px;
`

export const FiltersWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`

export const ButtonsFilter = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

export const ButtonClear = styled.TouchableOpacity<IHomeProps>`
  padding: 0 0 0 16px;

  ${({ isActiveClearAll }) =>
    !isActiveClearAll
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.5;
        `}
`

export const ButtonClearText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #000000;
`

export const Separate = styled.View`
  width: 100%;
  height: 1px;
  background: #e4e6ec;
`

export const ItemWrapper = styled.View``

export const EmptyContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`

export const EmptyLabel = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`

export const TesteText = styled.Text``
