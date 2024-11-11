export class Borrar{
  constructor(page){
    this.page=page
  }

  get elements() {
    return{    
      buttons: {
        delete: this.page.locator('input[value="Eliminar"]'),
      }
    }
  }


  async clickDelete(){
    await this.elements.buttons.delete.click()
  }

  }