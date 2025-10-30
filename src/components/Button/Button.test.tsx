import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { Button } from './index'
import { theme } from '@/theme'

const renderWithTheme = (component: React.ReactNode) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)

describe('Button Component', () => {
  test('should render correctly with text', () => {
    const { getByText } = renderWithTheme(
      <Button buttonText="Salvar" onPress={jest.fn()} />,
    )

    expect(getByText('Salvar')).toBeTruthy()
  })

  test('should call onPress when pressed', () => {
    const onPressMock = jest.fn()
    const { getByRole } = renderWithTheme(
      <Button buttonText="Pressionar" onPress={onPressMock} />,
    )

    fireEvent.press(getByRole('button'))
    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  test('should not call onPress when disabled', () => {
    const onPressMock = jest.fn()
    const { getByRole } = renderWithTheme(
      <Button buttonText="Desabilitado" onPress={onPressMock} disabled />,
    )

    fireEvent.press(getByRole('button'))
    expect(onPressMock).not.toHaveBeenCalled()
  })

  test('should apply disabled opacity style', () => {
    const { getByRole } = renderWithTheme(
      <Button buttonText="Disabled" onPress={jest.fn()} disabled />,
    )

    const button = getByRole('button')
    expect(button.props.style.opacity).toBe(0.5)
  })

  test('should match snapshott', () => {
    const tree = renderWithTheme(
      <Button buttonText="Snapshot" onPress={jest.fn()} />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
