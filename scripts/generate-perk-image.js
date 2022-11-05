const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:3000/iseps-perktree-simulator?mode=export')

  const resultsSelector = '#phaser-container canvas'
  await page.waitForSelector(resultsSelector)
  await delay(1000)

  const images = await page.evaluate(async (resultsSelector) => {
    function delay(time) {
      return new Promise(function (resolve) {
        setTimeout(resolve, time)
      })
    }

    const game = window.game

    const result = []

    for (let se = 1; se <= 50; se++) {
      game.scene.scenes[0].selectPerkGuide(se)
      await delay(100)
      const boundary = game.scene.scenes[0].getAcquiredPerksBoundary()
      const gameContext = window.game.canvas.getContext('2d')
      const imagedata = gameContext.getImageData(
        boundary.x + 400,
        boundary.y + 400,
        boundary.width,
        boundary.height,
      )

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = imagedata.width
      canvas.height = imagedata.height
      ctx.putImageData(imagedata, 0, 0)

      result.push(canvas.toDataURL('image/png'))
    }

    return result
  }, resultsSelector)

  images.forEach((data, i) => {
    fs.writeFileSync(
      path.join(__dirname, '..', 'public', 'images', 'se', `se${i + 1}.png`),
      data.replace(/^data:image\/png;base64,/, ''),
      'base64',
    )
  })

  await browser.close()
})()
