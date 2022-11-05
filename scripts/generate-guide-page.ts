import fs from 'fs'
import path from 'path'

import { getRecommendedPerks } from '../src/utils/perk'

const createHtml = (se: number, pick: string[], drop: string[]) => {
  return `<!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <title>Perk Guide: SE${se}</title>
       <meta name="description" content="Take: ${pick.join(', ')}${
    drop.length ? `; Drop: ${drop.join(', ')}` : ''
  }" />
       <meta property="og:image"  content="/iseps-perktree-simulator/images/se/se${se}.png" />
     </head>
     <body>
       <script>
         location.href = '/iseps-perktree-simulator?se=${se}'
       </script>
     </body>
   </html>
   `
}

for (let se = 1; se <= 50; se++) {
  const { pick, drop } = getRecommendedPerks(se)

  fs.writeFileSync(
    path.join(__dirname, '../', 'build', `se${se}.html`),
    createHtml(se, pick, drop),
  )
}
