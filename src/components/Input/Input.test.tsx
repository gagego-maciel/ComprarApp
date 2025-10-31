import React from 'react'
import { theme } from '@/theme'
import { Input, type IInputProps } from '../Input'
import { ThemeProvider } from 'styled-components/native'
import { render, fireEvent } from '@testing-library/react-native'

const renderWithTheme = (props: IInputProps) =>
  render(
    <ThemeProvider theme={theme}>
      <Input {...props} />
    </ThemeProvider>,
  )

describe('<Input />', () => {
  const mockOnChangeText = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render without crashing', () => {
    const { getByPlaceholderText } = renderWithTheme({
      value: '',
      onChangeText: mockOnChangeText,
      placeholder: '',
    })
    expect(getByPlaceholderText('')).toBeTruthy()
  })

  it('should render the label when provided', () => {
    const labelText = 'Username'
    const { getByText } = renderWithTheme({
      value: '',
      onChangeText: mockOnChangeText,
      label: labelText,
      placeholder: '',
    })
    expect(getByText(labelText)).toBeTruthy()
  })

  it('should not render the label when not provided', () => {
    const { queryByText } = renderWithTheme({
      value: '',
      onChangeText: mockOnChangeText,
    })
    expect(queryByText(/./)).toBeNull()
  })

  it('should display the correct placeholder', () => {
    const placeholder = 'Enter text'
    const { getByPlaceholderText } = renderWithTheme({
      value: '',
      onChangeText: mockOnChangeText,
      placeholder,
    })
    expect(getByPlaceholderText(placeholder)).toBeTruthy()
  })

  it('should display the correct value', () => {
    const value = 'Initial value'
    const { getByDisplayValue } = renderWithTheme({
      value,
      onChangeText: mockOnChangeText,
    })
    expect(getByDisplayValue(value)).toBeTruthy()
  })

  it('should call onChangeText when typing', () => {
    const placeholder = 'Type here'
    const { getByPlaceholderText } = renderWithTheme({
      value: '',
      onChangeText: mockOnChangeText,
      placeholder,
    })

    const input = getByPlaceholderText(placeholder)
    fireEvent.changeText(input, 'Hello')

    expect(mockOnChangeText).toHaveBeenCalledWith('Hello')
  })

  it('should respect maxLength prop', () => {
    const placeholder = 'Max 5'
    const { getByPlaceholderText } = renderWithTheme({
      value: '',
      onChangeText: mockOnChangeText,
      placeholder,
      maxLength: 5,
    })

    const input = getByPlaceholderText(placeholder)
    fireEvent.changeText(input, '12345')

    expect(mockOnChangeText).toHaveBeenCalledWith('12345')
  })

  it('should match snapshot', () => {
    const { toJSON } = renderWithTheme({
      value: 'Snapshot',
      onChangeText: mockOnChangeText,
      label: 'Snapshot Label',
      placeholder: 'Snapshot Placeholder',
    })

    expect(toJSON()).toMatchSnapshot()
  })
})
