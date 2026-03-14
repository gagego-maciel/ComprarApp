import * as S from './styles'

import { FlatList } from 'react-native'
import { Item } from '@/components/Item'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

import { ButtonFilter } from '@/components/ButtonFilter'
import { ModalConfirmation } from '@/components/ModalConfirmation'
import { Toast } from '@/components/Toast'
import { useHome } from '@/screens/Home/hooks/useHome'

export const Home = () => {
  const {
    isValidLabel,
    labelItem,
    setLabelItem,
    handleAddItem,
    activeButtonFilter,
    handleFilterSelect,
    handleClearAllConfirm,
    filteredItems,
    handleMarkedAsCompleted,
    handleRemoveItem,
    isActiveModalConfirmation,
    handleCancelModal,
    clearList,
    isConfirmatedRemoveItem,
    isEmptyList,
    EMPTY_MESSAGES,
  } = useHome()

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.LogoImage source={require('@/assets/logo.png')} />

        <S.InputContainer>
          <Input
            placeholder="O que você precisa comprar?"
            value={labelItem}
            onChangeText={setLabelItem}
            maxLength={35}
          />
        </S.InputContainer>

        <Button
          buttonText="Adicionar"
          onPress={handleAddItem}
          disabled={!isValidLabel(labelItem)}
        />
      </S.HeaderContainer>

      <S.ItensContainer>
        <S.FiltersWrapper>
          <S.ButtonsFilter>
            <ButtonFilter
              status="ALL"
              isActive={activeButtonFilter === 'ALL'}
              onPress={() => handleFilterSelect('ALL')}
            />
            <ButtonFilter
              status="PENDING"
              isActive={activeButtonFilter === 'PENDING'}
              onPress={() => handleFilterSelect('PENDING')}
            />
            <ButtonFilter
              status="PURCHASED"
              isActive={activeButtonFilter === 'PURCHASED'}
              onPress={() => handleFilterSelect('PURCHASED')}
            />
          </S.ButtonsFilter>

          <S.ButtonClear
            onPress={handleClearAllConfirm}
            disabled={isEmptyList}
            isActiveClearAll={isEmptyList}
          >
            <S.ButtonClearText>{'Limpar'}</S.ButtonClearText>
          </S.ButtonClear>
        </S.FiltersWrapper>

        <S.Separate />

        <S.ItemWrapper>
          {filteredItems.length === 0 && (
            <S.EmptyContainer>
              <S.EmptyLabel>{EMPTY_MESSAGES[activeButtonFilter]}</S.EmptyLabel>
            </S.EmptyContainer>
          )}

          <FlatList
            data={filteredItems}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Item
                label={item.label}
                status={item.status}
                onPressCompleted={() => handleMarkedAsCompleted(item.id)}
                onPressRemoveItem={() => handleRemoveItem(item.id)}
              />
            )}
          />
        </S.ItemWrapper>
      </S.ItensContainer>

      <ModalConfirmation
        isVisible={isActiveModalConfirmation}
        onPressCancel={handleCancelModal}
        onPressConfirm={clearList}
      />

      <Toast isVisible={isConfirmatedRemoveItem} type="success" />
    </S.Container>
  )
}
