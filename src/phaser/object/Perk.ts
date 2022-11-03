import Phaser from 'phaser'
import { PerkConfig, PERK_COLOR } from '../../constants'
import { InfinityPerk } from './PerkInfinity'

const INACTIVE_COLOR = 0x000000
const NODE_BG_COLOR = 0x585858
const NODE_FONT_COLOR = '#ffffff'
const NODE_RADIUS = 40
const NODE_DISTANCE = 130
const NODE_DISTANCE_FROM_CENTER = 200

export class Perk extends Phaser.GameObjects.Container {
  code: string
  color: number
  // inactiveColor: number
  distanceMultiplier?: number
  name: string
  parentPerks: Perk[] = []
  childrenPerks: Array<Perk | InfinityPerk> = []
  direction: number
  isActivated = false

  nodeX: number = 0
  nodeY: number = 0

  // @ts-ignore
  nodeObject: Phaser.GameObjects.Shape
  // @ts-ignore
  pathObjects: Phaser.GameObjects.Line[]

  constructor(scene: Phaser.Scene, config: PerkConfig) {
    super(scene)

    this.code = config.code
    this.name = config.name
    this.direction = (Math.PI * config.direction) / 180
    this.distanceMultiplier = config.distanceMultiplier
    // @ts-ignore
    this.color = PERK_COLOR[config.type]
    // @ts-ignore
    // this.inactiveColor = Phaser.Display.Color.IntegerToColor(PERK_COLOR[config.type]).darken(30).color

    this.parentPerks = config.parents.map((code) => this.scene.perkMap[code])
    this.parentPerks.forEach((p) => {
      p.childrenPerks.push(this)
    })

    this.calculatePosition()

    this.createPaths()
  }

  calculatePosition() {
    const parentCount = this.parentPerks.length

    const parentX = parentCount
      ? this.parentPerks.reduce((acc, p) => acc + p.nodeX, 0) / parentCount
      : 0
    const parentY = parentCount
      ? this.parentPerks.reduce((acc, p) => acc + p.nodeY, 0) / parentCount
      : 0

    const distance =
      (parentCount ? NODE_DISTANCE : NODE_DISTANCE_FROM_CENTER) *
      (this.distanceMultiplier || 1)

    this.nodeX = parentX + Math.sin(this.direction) * distance
    this.nodeY = parentY - Math.cos(this.direction) * distance
  }

  createPaths() {
    const origins = this.parentPerks.length
      ? this.parentPerks.map((perk) => [perk.nodeX, perk.nodeY])
      : [[0, 0]]

    this.pathObjects = origins.map((origin) =>
      this.scene.add
        .line(
          0,
          0,
          origin[0],
          origin[1],
          this.nodeX,
          this.nodeY,
          INACTIVE_COLOR,
        )
        .setOrigin(0, 0)
        .setLineWidth(10),
    )
  }
  createNode() {
    this.nodeObject = this.scene.add
      .circle(this.nodeX, this.nodeY, NODE_RADIUS, INACTIVE_COLOR)
      .setInteractive({ useHandCursor: true })
    this.nodeObject.on('pointerup', this.onPointerUp, this)
    this.scene.add.circle(
      this.nodeX,
      this.nodeY,
      NODE_RADIUS - 10,
      NODE_BG_COLOR,
    )
    this.scene.add
      .text(this.nodeX, this.nodeY, this.code, {
        color: NODE_FONT_COLOR,
        fontFamily:
          'BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif',
        fontSize: '25px',
      })
      .setOrigin(0.5, 0.5)
  }

  refreshState() {
    this.pathObjects.forEach((pathObject) => {
      pathObject.strokeColor = this.isActivated ? this.color : INACTIVE_COLOR
    })
    this.nodeObject.fillColor = this.isActivated ? this.color : INACTIVE_COLOR
  }

  onPointerUp() {
    this.scene.game.events.emit('showPerkInfo', {
      code: this.code,
      isActivated: this.isActivated,
    })
  }

  activate() {
    this.isActivated = true
    this.parentPerks.forEach((p) => p.activate())
    this.refreshState()
  }

  deactivate() {
    this.isActivated = false
    this.childrenPerks.forEach((p) => p.deactivate())
    this.refreshState()
  }
}

export class PerkPlugin extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager: Phaser.Plugins.PluginManager) {
    super(pluginManager)

    pluginManager.registerGameObject('perk', this.createPerk)
  }

  createPerk(config: PerkConfig) {
    // @ts-ignore
    return this.displayList.add(new Perk(this.scene, config))
  }
}
