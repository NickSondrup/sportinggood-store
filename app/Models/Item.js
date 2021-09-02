import { generateId } from "../Utils/generateId.js"

export class Item{
  constructor(itemData){
    this.name = itemData.name 
    this.quantity = itemData.quantity
    this.price = itemData.price 
    this.id =  generateId()
    this.img = itemData.img
  }
  
  get shopTemplate() {

    return /*html*/`
        
    <div class="col-lg-3 mb-4" id= "shop-card">
    <div class="card p-2">
      <img src="${this.img}">
      <div class = "card-body text-center"> 
        <div>
          <h6>
            Item Name: ${this.name}
          </h6>
        </div>
        <div>
          <h6>
            Price: $ ${this.price}
          </h6>
        </div>
        <div>
          <h6>
            Stock: ${this.quantity}
          </h6>
        </div>
      <button class ="btn btn-dark" ${this.quantity == 0 ? "disabled": ""} type= "button" onclick="app.itemsController.addToCart ('${this.name}')" id="cart-btn">add to cart</button>
      </div>
    </div>
  </div>
    
    `
}
  get cartTemplate(){
    return /*html*/ `

    
    <div class="col-lg-12 my-2">
              
    <div class =" p-2">
    <ul>
      <h6> Item Name: ${this.name}</h6>
      
      
      
      <span> <h6> Item Price: ${this.price}</h6> </span>
    </ul>
    <button type="button" class="btn btn-danger" onclick ="app.itemsController.deleteItem('${this.id}')">Delete</button>
    </div>
  </div>
      
  
      `   
  }

}