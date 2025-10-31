import React from 'react'
import { Item } from './index'
import { theme } from '@/theme'
import { ThemeProvider } from 'styled-components/native'
import { render, fireEvent } from '@testing-library/react-native'

jest.mock('@/assets/pendente-icon.png', () => 'pendente-icon')
jest.mock('@/assets/comprados-icon.png', () => 'comprados-icon')
jest.mock('@/assets/delete-icon.png', () => 'delete-icon')

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('Item Component', () => {
  test('should render label correctly', () => {
    const { getByText } = renderWithTheme(
      <Item status="PENDING" label="Test item" />,
    )
    expect(getByText('Test item')).toBeTruthy()
  })

  test('should call onPressCompleted when pressing purchased button', () => {
    const onPressCompleted = jest.fn()
    const { getByTestId } = renderWithTheme(
      <Item
        status="PENDING"
        label="Item"
        onPressCompleted={onPressCompleted}
      />,
    )

    fireEvent.press(getByTestId('button-purchased'))
    expect(onPressCompleted).toHaveBeenCalled()
  })

  test('should call onPressRemoveItem when pressing delete button', () => {
    const onPressRemoveItem = jest.fn()
    const { getByTestId } = renderWithTheme(
      <Item
        status="PENDING"
        label="Item"
        onPressRemoveItem={onPressRemoveItem}
      />,
    )

    fireEvent.press(getByTestId('button-delete'))
    expect(onPressRemoveItem).toHaveBeenCalled()
  })

  test('should show line-through when status is PURCHASED', () => {
    const { getByText } = renderWithTheme(
      <Item status="PURCHASED" label="Completed item" />,
    )

    const label = getByText('Completed item')
    expect(label.props.style).toMatchObject({
      textDecorationLine: 'line-through',
    })
  })

  test('should not show line-through when status is PENDING', () => {
    const { getByText } = renderWithTheme(
      <Item status="PENDING" label="Pending item" />,
    )

    const label = getByText('Pending item')
    expect(label.props.style).toMatchObject({
      textDecorationLine: 'none',
    })
  })

  test('should matches snapshot', () => {
    const tree = renderWithTheme(
      <Item status="PENDING" label="Snapshot test" />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
