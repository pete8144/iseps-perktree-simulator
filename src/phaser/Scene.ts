import Phaser from 'phaser'

import { ALL_PERKS } from '../constants'
import { getSeDcPercentBonus } from '../utils/bonus/perk-white'
import { formatPercent } from '../utils/formatter'
import { getRecommendedPerks } from '../utils/perk'
import { Perk } from './object/Perk'
import { InfinityPerk } from './object/PerkInfinity'

export default class Scene extends Phaser.Scene {
  // @ts-ignore
  dcBonusText: Phaser.GameObjects.Text
  perkMap: { [key: string]: Perk } = {}
  perkList: Perk[] = []
  // @ts-ignore
  infinityPerk: InfinityPerk
  isUsingGuide = false
  showingFullMap = false

  preload() {}

  create() {
    this.zoom(0)

    ALL_PERKS.forEach((perkConfig) => {
      // @ts-ignore
      const perk: Perk = this.add.perk(perkConfig)

      this.perkMap[perkConfig.code] = perk
      this.perkList.push(perk)
    })

    // @ts-ignore
    this.infinityPerk = this.add.infinityperk()
    ;[...this.perkList, this.infinityPerk].forEach((perk) => {
      perk.createNode()
      perk.refreshState()
    })

    // @ts-ignore
    this.add.circle(0, 0, window.exportMode ? 50 : 100, 0x000000)
    // @ts-ignore
    this.add.circle(0, 0, window.exportMode ? 40 : 90, 0x444444)

    this.dcBonusText = this.add
      .text(0, 0, '', {
        fontFamily:
          'BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif',
        fontSize: '32px',
      })
      .setOrigin(0.5, 0.5)

    this.game.events.on('pauseScene', () => {
      this.sys.pause()
    })
    this.game.events.on('resumeScene', () => {
      this.sys.resume()
    })
    this.game.events.on('resetPerks', () => {
      this.isUsingGuide = false
      this.perkList.forEach((p) => p.deactivate())
      this.updateSummary()
    })
    this.game.events.on('activatePerks', this.activatePerks, this)
    this.game.events.on('deactivatePerks', this.deactivatePerks, this)
    this.game.events.on('selectPerkGuide', this.selectPerkGuide, this)
    this.game.events.on('setZoom', (level: number) => {
      this.zoom(level)
    })

    this.input.on(
      'wheel',
      (
        pointer: Phaser.Input.Pointer,
        gameObjects: Phaser.GameObjects.GameObject,
        deltaX: number,
        deltaY: number,
        deltaZ: number,
      ) => {
        if (deltaY > 0) this.zoom(1)
        if (deltaY < 0) this.zoom(-1)
      },
    )

    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      if (!pointer.isDown) return

      this.cameras.main.scrollX -=
        (pointer.x - pointer.prevPosition.x) / this.cameras.main.zoom
      this.cameras.main.scrollY -=
        (pointer.y - pointer.prevPosition.y) / this.cameras.main.zoom
    })
  }

  update() {}

  updateSummary() {
    const activatedPerks = this.perkList
      .filter((p) => p.isActivated)
      .map((p) => p.code)

    activatedPerks.push(...Array(this.infinityPerk.level).fill('IP'))

    const dcBonus = activatedPerks.length
      ? formatPercent(getSeDcPercentBonus(activatedPerks)) + ' DC'
      : ''
    this.dcBonusText.setText(dcBonus).setFontSize(dcBonus.length > 8 ? 25 : 35)

    this.game.events.emit('updatePerkState', {
      perks: activatedPerks,
      perkCount: activatedPerks.length,
      isUsingGuide: this.isUsingGuide,
      showingFullMap: this.showingFullMap,
    })
  }

  zoom(level: number) {
    if (level === 0) {
      this.cameras.main.pan(0, 0, 0).zoomTo(0.4, 0)
    } else if (level > 0) {
      const newZoom = this.cameras.main.zoom - 0.1
      if (newZoom > 0.2) {
        this.cameras.main.zoom = newZoom
      }
    } else {
      const newZoom = this.cameras.main.zoom + 0.1
      if (newZoom < 1.3) {
        this.cameras.main.zoom = newZoom
      }
    }
  }

  activatePerks({
    perks,
    reset = false,
  }: {
    perks: string[]
    reset?: boolean
  }) {
    this.isUsingGuide = false
    if (reset) this.perkList.forEach((p) => p.deactivate())
    perks.forEach((perk) => this.perkMap[perk]?.activate())
    const ipCount = perks.filter((p) => p === 'IP').length
    if (ipCount) this.infinityPerk.activate(ipCount)
    this.updateSummary()
  }

  deactivatePerks({ perks }: { perks: string[] }) {
    this.isUsingGuide = false
    perks.forEach((perk) => this.perkMap[perk]?.deactivate())
    this.updateSummary()
  }

  selectPerkGuide(se: number) {
    this.isUsingGuide = true
    this.perkList.forEach((p) => p.deactivate())
    const { perks, pick, drop } = getRecommendedPerks(se)
    perks.forEach((perk) => this.perkMap[perk]?.activate())
    this.updateSummary()
    // @ts-ignore
    if (window.exportMode) {
      pick.forEach((perk) => this.perkMap[perk]?.showPickStatus())
      drop.forEach((perk) => this.perkMap[perk]?.showDropStatus())
      this.dcBonusText.text = 'SE' + se
    }
  }

  getAcquiredPerksBoundary() {
    const frame = { t: -50, b: 50, l: -50, r: 50 }

    const OFFSET = 20

    this.perkList
      .filter((p) => p.isActivated || p.isDropped)
      .forEach((perk) => {
        frame.t = Math.min(frame.t, perk.nodeY / 2 - OFFSET)
        frame.b = Math.max(frame.b, perk.nodeY / 2 + OFFSET)
        frame.l = Math.min(frame.l, perk.nodeX / 2 - OFFSET)
        frame.r = Math.max(frame.r, perk.nodeX / 2 + OFFSET)
      })

    return {
      x: frame.l,
      y: frame.t,
      width: frame.r - frame.l,
      height: frame.b - frame.t,
    }
  }
}
