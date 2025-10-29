import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`

export const Content = styled.View`
  padding: 8px 16px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.backgroundSuccess};
  margin-bottom: 16px;
`

export const Label = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textWhite};
`
