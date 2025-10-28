import * as S from './styles'

interface IButtonProps {
  buttonText?: string
  onPress: () => void
  disabled?: boolean
}

export const Button: React.FC<IButtonProps> = ({
  buttonText,
  onPress,
  disabled,
}) => {
  return (
    <S.Container onPress={onPress} disabled={disabled} isDisabled={!!disabled}>
      <S.ButtonText>{buttonText}</S.ButtonText>
    </S.Container>
  )
}
