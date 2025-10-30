import * as S from './styles'

export interface IInputProps {
  label?: string
  placeholder?: string
  value: string
  onChangeText: (value: string) => void
  maxLength?: number
}

export const Input: React.FC<IInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  maxLength,
}) => {
  return (
    <S.Container>
      {label && <S.InputLabel>{label}</S.InputLabel>}

      <S.Field
        testID={label || 'input-field'}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        accessibilityLabel={label || placeholder}
      />
    </S.Container>
  )
}
