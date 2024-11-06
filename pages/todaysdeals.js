export class Todaysdeals{
  constructor(page){
    this.page=page
  }

  get elements() {
    return{    
      product: {
        firstone: this.page.locator('body > div:nth-child(1) > div:nth-child(28) > div:nth-child(121) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'),
      }
    }
  }

  async clickOnProduct(){
    await this.elements.product.firstone.click()
  }

}