import React from 'react'
import { ButtonFilter } from './index'
import '@testing-library/jest-native/extend-expect'
import { render, fireEvent } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '@/theme'

const FILTER_CONFIG = {
  ALL: { label: 'Todos', iconActive: 'icon', iconDisabled: 'icon' },
  PENDING: { label: 'Pendentes', iconActive: 'icon', iconDisabled: 'icon' },
  PURCHASED: { label: 'Comprados', iconActive: 'icon', iconDisabled: 'icon' },
}

jest.mock('@/components/ButtonFilter/hooks/useButtonFilter', () => ({
  useButtonFilter: () => ({
    FILTER_CONFIG,
  }),
}))

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('ButtonFilter Component', () => {
  const statuses = ['ALL', 'PENDING', 'PURCHASED'] as const

  test('renders correct label and style depending on isActive', () => {
    statuses.forEach((status) => {
      const { getByText, unmount } = renderWithTheme(
        <ButtonFilter status={status} isActive={true} onPress={() => {}} />,
      )

      const label = getByText(FILTER_CONFIG[status].label)
      expect(label).toBeTruthy()
      expect(label).toHaveStyle({ color: theme.colors.textBlack })

      unmount()
    })

    statuses.forEach((status) => {
      const { getByText, unmount } = renderWithTheme(
        <ButtonFilter status={status} isActive={false} onPress={() => {}} />,
      )

      const label = getByText(FILTER_CONFIG[status].label)
      expect(label).toBeTruthy()
      expect(label).toHaveStyle({ color: theme.colors.textGray })

      unmount()
    })
  })

  test('calls onPress handler when pressed', () => {
    const onPressMock = jest.fn()

    statuses.forEach((status) => {
      const { getByTestId, unmount } = renderWithTheme(
        <ButtonFilter status={status} isActive={true} onPress={onPressMock} />,
      )

      const button = getByTestId(`button-${status}`)
      fireEvent.press(button)
      expect(onPressMock).toHaveBeenCalledTimes(1)

      onPressMock.mockClear()
      unmount()
    })
  })

  test('should match snapshot for all statuses', () => {
    const { toJSON } = renderWithTheme(
      <>
        <ButtonFilter status="ALL" isActive={true} onPress={() => {}} />
        <ButtonFilter status="ALL" isActive={false} onPress={() => {}} />
        <ButtonFilter status="PENDING" isActive={true} onPress={() => {}} />
        <ButtonFilter status="PENDING" isActive={false} onPress={() => {}} />
        <ButtonFilter status="PURCHASED" isActive={true} onPress={() => {}} />
        <ButtonFilter status="PURCHASED" isActive={false} onPress={() => {}} />
      </>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
