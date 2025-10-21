import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  display: flex;
`

export const InputLabel = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #666;
  margin-bottom: 4px;
`

export const InputField = styled.TextInput.attrs({
  placeholderTextColor: '#74798B',
})`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-width: 1px;
  border-color: #c3c5cb;
  border-radius: 8px;
  font-size: 16px;
  color: #74798b;
  background-color: #ffffff;
`
