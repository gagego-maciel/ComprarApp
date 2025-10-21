import * as S from './styles'

interface IInputProps {
  label?: string
  placeholderText?: string
  value: string
  onChangeText: (value: string) => void
  maxLength?: number
}

export const Input: React.FC<IInputProps> = ({
  label,
  placeholderText,
  value,
  onChangeText,
  maxLength,
}) => {
  return (
    <S.Container>
      {label && <S.InputLabel>{label}</S.InputLabel>}

      <S.InputField
        placeholder={placeholderText}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
      />
    </S.Container>
  )
}
