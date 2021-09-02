import { ProxyState } from "../AppState.js"
import { itemsService } from "../Services/ItemsService.js"



function _drawShop(){
  let template = ``
  ProxyState.items.forEach(item => {template += item.shopTemplate})
  document.getElementById("shop").innerHTML = template
}

function _drawCart(){
  let template = ''
  ProxyState.cart.forEach(item => {template += item.cartTemplate})
  document.getElementById('cart').innerHTML = template
}

function _drawTotal(){
  let template = ""
  template += /*html*/ 
  `
  <div class="col-lg-1">      
  <div class="card p-2">
      <div> <h6>Cart Total</h6> </div>
      <div> $ ${itemsService.totalCart()} </div>
      <button class="btn btn-success" onclick="app.itemsController.purchase()">Buy</button>
    </div>
  </div>  

  `
  document.getElementById('total').innerHTML = template
  
}

export class ItemsController{
  constructor(){
    _drawShop()
    _drawCart()
    _drawTotal()
    ProxyState.on('cart', _drawShop)
    ProxyState.on('cart', _drawCart)
    ProxyState.on('cart', _drawTotal)
  }

  addToCart(name){itemsService.addToCart(name)}
  purchase(){itemsService.purchase()}

  deleteItem(itemId){itemsService.deleteItem(itemId)}
} 