import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`

export const InputLabel = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textBlack};
  margin-bottom: 4px;
`

export const Field = styled.TextInput.attrs((prop) => ({
  placeholderTextColor: prop.theme.colors.placeHolderInput,
}))`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textBlack};
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
`
