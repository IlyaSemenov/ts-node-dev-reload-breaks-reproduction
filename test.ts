import { Nuxt, Builder } from 'nuxt'

console.log('Loading...')

const nuxt = new Nuxt({ dev: false })
nuxt.listen(3000)

const builder = new Builder(nuxt)
builder.build() // <--- Uncommenting this line breaks ts-node-dev's reload.

console.log(`Listening since ${new Date()}.`)
