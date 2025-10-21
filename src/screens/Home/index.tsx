import * as S from './styles'
import uuid from 'react-native-uuid'
import Modal from 'react-native-modal'
import { FlatList } from 'react-native'
import { Item } from '@/components/Item'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import type { TStatus } from '@/types/status'
import type { IItem } from '@/interfaces/intem'
import { useCallback, useMemo, useState } from 'react'
import { ButtonFilter } from '@/components/ButtonFilter'
import { ModalConfirmation } from '@/components/ModalConfirmation'
import { ModalAlert } from '@/components/ModalAlert'

export const Home = () => {
  const STATUS_CHANGE_DELAY = 900
  const REMOVE_ITEM_DELAY = 500
  const CLOSE_MODAL_ALERT_DELAY = 2000
  const [labelItem, setLabelItem] = useState('')
  const [isActiveModalConfirme, setIsActiveModalConfirme] = useState(false)
  const [isConfirmatedRemoveItem, setIsConfirmatedRemoveItem] = useState(false)
  const [itemList, setItemList] = useState<IItem[]>([])
  const [activeButtonFilter, setActiveButtonFilter] = useState<TStatus>('ALL')
  const [recentlyChanged, setRecentlyChanged] = useState<string[]>([])

  const handleFilterSelect = (status: TStatus) => {
    setActiveButtonFilter(status)
  }

  const handleAddItem = useCallback(() => {
    if (!labelItem.trim()) return

    const newItem: IItem = {
      id: uuid.v4().toString(),
      label: labelItem.trim(),
      status: 'PENDING',
    }

    setItemList((prev) => [newItem, ...prev])
    setLabelItem('')
  }, [labelItem])

  const handleMarkedAsCompleted = useCallback((id: string) => {
    setItemList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === 'PENDING' ? 'PURCHASED' : 'PENDING',
            }
          : item,
      ),
    )

    setRecentlyChanged((prev) => [...prev, id])

    setTimeout(() => {
      setRecentlyChanged((prev) => prev.filter((itemId) => itemId !== id))
    }, STATUS_CHANGE_DELAY)
  }, [])

  const handleRemoveItem = (id: string) => {
    setIsConfirmatedRemoveItem(true)
    setTimeout(() => {
      setItemList((prev) => prev.filter((item) => item.id !== id))
    }, REMOVE_ITEM_DELAY)

    setTimeout(() => {
      setIsConfirmatedRemoveItem(false)
    }, CLOSE_MODAL_ALERT_DELAY)
  }

  const handleClearAllConfirm = () => {
    setIsActiveModalConfirme(true)
  }

  const handleCancelModal = () => {
    setIsActiveModalConfirme(false)
  }

  const clearAllList = () => {
    setItemList([])
    handleCancelModal()
  }

  const emptyMessages: Record<TStatus, string> = {
    ALL: 'Nenhum item por aqui',
    PENDING: 'Nenhum item pendente',
    PURCHASED: 'Nenhum item comprado',
  }

  const filteredItems = useMemo(() => {
    if (activeButtonFilter === 'ALL') return itemList

    return itemList.filter(
      (item) =>
        item.status === activeButtonFilter || recentlyChanged.includes(item.id),
    )
  }, [itemList, activeButtonFilter, recentlyChanged])

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.LogoImage source={require('@/assets/logo.png')} />

        <S.InputContainer>
          <Input
            placeholderText="O que você precisa comprar?"
            value={labelItem}
            onChangeText={setLabelItem}
            maxLength={35}
          />
        </S.InputContainer>

        <Button
          buttonText="Adicionar"
          onPress={handleAddItem}
          disabled={!labelItem}
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
            disabled={itemList.length == 0}
            isActiveClearAll={itemList.length == 0}
          >
            <S.ButtonClearText>{'Limpar'}</S.ButtonClearText>
          </S.ButtonClear>
        </S.FiltersWrapper>

        <S.Separate />

        <S.ItemWrapper>
          {filteredItems.length === 0 && (
            <S.EmptyContainer>
              <S.EmptyLabel>{emptyMessages[activeButtonFilter]}</S.EmptyLabel>
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

      <Modal
        isVisible={isActiveModalConfirme}
        onBackdropPress={handleCancelModal}
        animationInTiming={500}
        animationOutTiming={600}
        useNativeDriver={true}
      >
        <ModalConfirmation
          onPressCancel={handleCancelModal}
          onPressConfirm={clearAllList}
        />
      </Modal>

      <Modal
        isVisible={isConfirmatedRemoveItem}
        backdropOpacity={0}
        useNativeDriver={true}
        animationInTiming={500}
        animationOutTiming={600}
      >
        <ModalAlert />
      </Modal>
    </S.Container>
  )
}
