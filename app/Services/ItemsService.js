import { ProxyState } from "../AppState.js";



class ItemsService{

  addToCart(item){
    let foundItems = ProxyState.items.find(i => i.name === item)
    foundItems.quantity --
    
    ProxyState.cart = [...ProxyState.cart, foundItems]
    ProxyState.cart = ProxyState.cart


    console.log(ProxyState.cart, "hello from itemservice")
  }
  totalCart(){
    let total = 0
    for (let i = 0; i < ProxyState.cart.length; i++) {
      let item = ProxyState.cart[i].price;
      total += item 
    }
    return total 
  }

  purchase(){
    ProxyState.cart = []
    ProxyState.cart = ProxyState.cart
  }

  deleteItem(itemId){
    ProxyState.cart = ProxyState.cart.filter(i => i.id !== itemId)
  }

}


export const itemsService = new ItemsService