import Phaser from 'phaser'
import { Perk } from './Perk'

const ACTIVE_COLOR = 0xdddddd
const INACTIVE_COLOR = 0x000000
const NODE_BG_COLOR = 0x585858
const NODE_FONT_COLOR = '#ffffff'
const NODE_RADIUS = 75
const NODE_DISTANCE = 150

export class InfinityPerk extends Phaser.GameObjects.Container {
  code = 'IP'
  parentPerk: Perk
  direction = Math.PI / 2 // 90 degree

  level: number = 0

  nodeX: number = 0
  nodeY: number = 0

  // @ts-ignore
  nodeObject: Phaser.GameObjects.Shape
  // @ts-ignore
  pathObject: Phaser.GameObjects.Line
  // @ts-ignore
  nodeText: Phaser.GameObjects.Text

  constructor(scene: Phaser.Scene) {
    super(scene)

    this.direction = (Math.PI * 90) / 180

    // @ts-ignore
    this.parentPerk = this.scene.perkMap['W10']
    this.parentPerk.childrenPerks.push(this)

    this.calculatePosition()

    this.createPaths()
  }

  calculatePosition() {
    const parentX = this.parentPerk.nodeX
    const parentY = this.parentPerk.nodeY

    const distance = NODE_DISTANCE

    this.nodeX = parentX + Math.sin(this.direction) * distance
    this.nodeY = parentY - Math.cos(this.direction) * distance
  }

  createPaths() {
    const origin = [this.parentPerk.nodeX, this.parentPerk.nodeY]

    this.pathObject = this.scene.add
      .line(0, 0, origin[0], origin[1], this.nodeX, this.nodeY, INACTIVE_COLOR)
      .setOrigin(0, 0)
      .setLineWidth(10)
  }

  createNode() {
    this.nodeObject = this.scene.add.circle(
      this.nodeX,
      this.nodeY,
      NODE_RADIUS,
      INACTIVE_COLOR,
    )
    this.scene.add.circle(
      this.nodeX,
      this.nodeY,
      NODE_RADIUS - 10,
      NODE_BG_COLOR,
    )
    this.nodeText = this.scene.add
      .text(this.nodeX, this.nodeY, this.code, {
        color: NODE_FONT_COLOR,
        fontFamily:
          'BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif',
        fontSize: '35px',
      })
      .setOrigin(0.5, 0.5)
    this.createButtons()
  }

  createButtons() {
    // @ts-ignore
    if (window.exportMode) {
      return
    }

    const OFFSET = 110

    const createButton = (text: string, offsetY: number) => {
      const b = this.scene.add
        .circle(this.nodeX, this.nodeY + offsetY, 20, 0x444444)
        .setOrigin(0.5, 0.5)
        .setInteractive({ useHandCursor: true })
      this.scene.add
        .text(this.nodeX, this.nodeY + offsetY, text, {
          color: NODE_FONT_COLOR,
          fontFamily:
            'BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif',
          fontSize: '35px',
        })
        .setOrigin(0.5, 0.5)
      return b
    }

    const incLvlButton = createButton('+', -OFFSET)
    const decLvlButton = createButton('-', OFFSET)

    incLvlButton.on('pointerup', () => {
      this.activate(1)
      // @ts-ignore
      this.scene.updateSummary()
    })

    decLvlButton.on('pointerup', () => {
      if (this.level) {
        this.activate(-1)
        // @ts-ignore
        this.scene.updateSummary()
      }
    })
  }

  refreshState() {
    this.pathObject.strokeColor = this.level ? ACTIVE_COLOR : INACTIVE_COLOR
    this.nodeObject.fillColor = this.level ? ACTIVE_COLOR : INACTIVE_COLOR
    this.nodeText.text = `IP lv ${this.level}`
  }

  activate(inc = 1) {
    const newLevel = this.level + inc
    if (newLevel >= 0 && newLevel <= 40) {
      this.level = newLevel
      this.parentPerk.activate()
      this.refreshState()
    }
  }

  deactivate() {
    this.level = 0
    this.refreshState()
  }
}

export class PerkInfinityPlugin extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager: Phaser.Plugins.PluginManager) {
    super(pluginManager)

    pluginManager.registerGameObject('infinityperk', this.createInfinityPerk)
  }

  createInfinityPerk() {
    // @ts-ignore
    return this.displayList.add(new InfinityPerk(this.scene))
  }
}
