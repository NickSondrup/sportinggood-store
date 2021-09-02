import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  items =[new Item({name: 'UFO', quantity: 5, price: 10000, img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16CE8/production/_109061439_hi018470968.jpg'}), new Item({name: 'Scary Alien', quantity: 5, price: 5000, img: 'https://m.media-amazon.com/images/I/51XmgmAUztL._AC_SX425_.jpg'}), new Item({name: 'Cute Alien', quantity: 5, price: 2500, img: 'https://i.insider.com/5e28bce1ab49fd060115ce44?width=600&format=jpeg&auto=webp'}), new Item({name: 'Ray Gun', quantity: 5, price: 1500, img: 'https://i.dlpng.com/static/png/5311309-black-ops-2-ray-gun-mark-ii-spotted-in-game-ahead-of-call-of-ray-gun-png-820_414_preview.png'})]

  cart = []
  
  
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
