import uuid from 'react-native-uuid'
import { DELAYS } from '@/constants/dalys'
import type { TStatus } from '@/types/status'
import type { IItem } from '@/interfaces/intem'
import { useCallback, useMemo, useState } from 'react'
import { EMPTY_MESSAGES } from '@/constants/emptyMessages'

export const useHome = () => {
  const [labelItem, setLabelItem] = useState('')
  const [isActiveModalConfirmation, setIsActiveModalConfirmation] =
    useState(false)
  const [isConfirmatedRemoveItem, setIsConfirmatedRemoveItem] = useState(false)
  const [recentlyChanged, setRecentlyChanged] = useState<string[]>([])
  const [itemList, setItemList] = useState<IItem[]>([])
  const [activeButtonFilter, setActiveButtonFilter] = useState<TStatus>('ALL')

  const isEmptyList = itemList.length === 0

  const isValidLabel = (label: string) => {
    return Boolean(label && label.trim().length > 0)
  }

  const handleFilterSelect = (status: TStatus) => {
    setActiveButtonFilter(status)
  }

  const handleClearAllConfirm = () => {
    setIsActiveModalConfirmation(true)
  }

  const handleCancelModal = () => {
    setIsActiveModalConfirmation(false)
  }

  const clearList = () => {
    setItemList([])
    handleCancelModal()
  }

  const handleRemoveItem = useCallback((id: string) => {
    setIsConfirmatedRemoveItem(true)

    setTimeout(() => {
      setItemList((prev) => prev.filter((item) => item.id !== id))
    }, DELAYS.REMOVE_ITEM)

    setTimeout(() => {
      setIsConfirmatedRemoveItem(false)
    }, DELAYS.CLOSE_MODAL_ALERT)
  }, [])

  const handleAddItem = useCallback(() => {
    if (!labelItem.trim()) return
    const id = String(uuid.v4())

    const newItem: IItem = {
      id,
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
    }, DELAYS.STATUS_CHANGE)
  }, [])

  const filteredItems = useMemo(() => {
    if (activeButtonFilter === 'ALL') return itemList

    return itemList.filter(
      (item) =>
        item.status === activeButtonFilter || recentlyChanged.includes(item.id),
    )
  }, [itemList, activeButtonFilter, recentlyChanged])

  return {
    labelItem,
    activeButtonFilter,
    isActiveModalConfirmation,
    isConfirmatedRemoveItem,
    isEmptyList,
    setLabelItem,
    handleAddItem,
    handleRemoveItem,
    handleMarkedAsCompleted,
    handleFilterSelect,
    handleClearAllConfirm,
    clearList,
    handleCancelModal,
    filteredItems,
    isValidLabel,
    EMPTY_MESSAGES,
  }
}
