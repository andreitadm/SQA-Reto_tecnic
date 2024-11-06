export class Cart{
  constructor(page){
    this.page=page
  }

  get elements() {
    return{    
      buttons: {
        gotocart: this.page.locator('//a[@href="/cart?ref_=sw_gtc"]'),
      }
    }
  }


  async clickGotoCard(){
    const gotoCartButton = this.elements.buttons.gotocart.click();
  }

  }
