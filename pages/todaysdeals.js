export class Todaysdeals{
  constructor(page){
    this.page=page
  }

  get elements() {
    return{    
      product: {
        container: this.page.locator('div#slots-container'),
        firstone: this.page.locator('body > div:nth-child(1) > div:nth-child(28) > div:nth-child(121) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'),
      }
    }
  }

  async clickOnProduct(){
    await this.elements.product.container.hover();
    await this.page.evaluate(() => {
      window.scrollBy(0, 1000);  // Desplazamiento vertical de 1000px
    });
    await this.elements.product.firstone.click();
  }

}