import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import AboutModal from '../components/modal/AboutModal'

import GuideModal from '../components/modal/GuideModal'
import NoteModal from '../components/modal/NoteModal'
import PerkInfoModal from '../components/modal/PerkInfoModal'
import TodoModal from '../components/modal/TodoModal'

import game from '../phaser/game'
import { readFromQs, savePerksToQs, saveSeToQs } from '../utils/url'

type PerkState = {
  perks: string[]
  perkCount: number
  showingFullMap: boolean
  isUsingGuide: boolean
}

type Context = {
  perkState: PerkState
  isMobileDrawerOpen: boolean
  setMobileDrawerOpen: (state: boolean) => any
  zoom: (level: number) => any
  showGuideModal: () => any
  showBonusModal: () => any
  showNoteModal: () => any
  showTodoModal: () => any
  showAboutModal: () => any
}

// @ts-ignore
export const appContext = createContext<Context>({})

type Props = {
  children: React.ReactNode
}

const useEmitter = (name: string) => {
  const fn = useCallback(
    (data?: any) => {
      game.events.emit(name, data)
    },
    [name],
  )

  return fn
}

let isInit = false

const useListener = (name: string, handler: (data: any) => any) => {
  useEffect(() => {
    game.events.on(name, handler)

    return () => {
      game.events.off(name, handler)
    }
  }, [name, handler])
}

export const AppContextProvider = ({ children }: Props) => {
  const [modalState, setModalState] = useState({
    perkInfo: false,
    guide: false,
    bonus: false,
    note: false,
    todo: false,
    about: false,
  })
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const openModal = (name: string) =>
    setModalState((s) => ({ ...s, [name]: true }))
  const closeModal = (name: string) =>
    setModalState((s) => ({ ...s, [name]: false }))

  const [perkInfoData, setPerkInfoData] = useState<{ code: string } | null>(
    null,
  )
  const [perkState, setPerkState] = useState<PerkState>({
    perks: [],
    perkCount: 0,
    showingFullMap: false,
    isUsingGuide: false,
  })

  const zoom = useEmitter('setZoom')
  const pauseScene = useEmitter('pauseScene')
  const resumeScene = useEmitter('resumeScene')
  const activatePerks = useEmitter('activatePerks')
  const deactivatePerks = useEmitter('deactivatePerks')
  const selectPerkGuide = useEmitter('selectPerkGuide')

  const onShowPerkInfo = useCallback((data: any) => {
    setPerkInfoData(data)
    openModal('perkInfo')
  }, [])

  useEffect(() => {
    if (Object.values(modalState).includes(true) || isMobileDrawerOpen) {
      pauseScene()
    } else {
      resumeScene()
    }
  }, [modalState, isMobileDrawerOpen])

  useListener('showPerkInfo', onShowPerkInfo)
  useListener('updatePerkState', (p) => setPerkState(p))

  const value = useMemo(
    () => ({
      zoom,
      perkState,
      isMobileDrawerOpen,
      setMobileDrawerOpen,
      showGuideModal: () => openModal('guide'),
      showBonusModal: () => openModal('bonus'),
      showNoteModal: () => openModal('note'),
      showTodoModal: () => openModal('todo'),
      showAboutModal: () => openModal('about'),
    }),
    [zoom, perkState, isMobileDrawerOpen],
  )

  useEffect(() => {
    if (perkState.isUsingGuide) {
      saveSeToQs(perkState.perkCount)
    } else if (perkState.perkCount) {
      savePerksToQs(perkState.perks)
    }
  }, [perkState])

  useEffect(() => {
    if (!game || isInit) return

    setTimeout(() => {
      const { se, perks } = readFromQs()
      if (se) {
        selectPerkGuide(se)
      } else if (perks && perks.length) {
        activatePerks({ perks, reset: true })
      }
    }, 300)
    isInit = true
  }, [game])

  return (
    <appContext.Provider value={value}>
      {children}
      <PerkInfoModal
        isVisible={modalState.perkInfo}
        // @ts-ignore
        data={perkInfoData}
        onClose={() => closeModal('perkInfo')}
        onActivate={() => {
          activatePerks({ perks: [perkInfoData?.code] })
          closeModal('perkInfo')
        }}
        onDeactivate={() => {
          deactivatePerks({ perks: [perkInfoData?.code] })
          closeModal('perkInfo')
        }}
      />
      <GuideModal
        isVisible={modalState.guide}
        onClose={() => closeModal('guide')}
        onGuideSelect={(se) => {
          selectPerkGuide(se)
          closeModal('guide')
        }}
      />
      <NoteModal
        isVisible={modalState.note}
        onClose={() => closeModal('note')}
      />
      <TodoModal
        isVisible={modalState.todo}
        onClose={() => closeModal('todo')}
      />
      <AboutModal
        isVisible={modalState.about}
        onClose={() => closeModal('about')}
      />
    </appContext.Provider>
  )
}
