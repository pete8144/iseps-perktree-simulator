import Phaser from 'phaser'
import { PerkPlugin } from './object/Perk'
import { PerkInfinityPlugin } from './object/PerkInfinity'

import Scene from './Scene'

const exportMode = /mode=export/.test(window.location.href)
const scale = exportMode
  ? {
      mode: Phaser.Scale.ScaleModes.NONE,
      width: 800,
      height: 800,
    }
  : {
      mode: Phaser.Scale.ScaleModes.RESIZE,
      width: window.innerWidth,
      height: window.innerHeight - 56,
    }

const config: Phaser.Types.Core.GameConfig = {
  type: exportMode ? Phaser.CANVAS : Phaser.AUTO,
  parent: 'phaser-container',
  // transparent: true,
  backgroundColor: '#1b1b1b',
  scale,
  scene: [Scene],
  plugins: {
    global: [
      { key: 'PerkPlugin', plugin: PerkPlugin, start: true },
      { key: 'InfinityPerkPlugin', plugin: PerkInfinityPlugin, start: true },
    ],
  },
}

const game = new Phaser.Game(config)

// @ts-ignore
window.exportMode = exportMode
// @ts-ignore
window.game = game

export default game
