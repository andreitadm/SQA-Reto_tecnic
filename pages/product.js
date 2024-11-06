export class Product{
  constructor(page){
    this.page=page
  }

  get elements() {
    return{    
      productpage: {
        button: this.page.locator('#add-to-cart-button'),
      }
    }
  }

  async clickOnAddtoCart(){
    await this.elements.productpage.button.click()
  }

}