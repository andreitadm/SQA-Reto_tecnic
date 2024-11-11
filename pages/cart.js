export class Cart{
  constructor(page){
    this.page=page
  }

  get elements() {
    return{    
      buttons: {
        gotocart: this.page.locator('a', { hasText: "Ir al Carrito" }),
      }
    }
  }


  async clickGotoCard(){
    const gotoCartButton = this.elements.buttons.gotocart.click();
  }

  }
