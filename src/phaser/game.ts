import Phaser from 'phaser'
import { PerkPlugin } from './object/Perk'
import { PerkInfinityPlugin } from './object/PerkInfinity'

import Scene from './Scene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  // transparent: true,
  backgroundColor: '#1b1b1b',
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight - 56,
  },
  scene: [Scene],
  plugins: {
    global: [
      { key: 'PerkPlugin', plugin: PerkPlugin, start: true },
      { key: 'InfinityPerkPlugin', plugin: PerkInfinityPlugin, start: true },
    ],
  },
}

export default new Phaser.Game(config)
