export class HomePage{
  constructor(page){
    this.page=page
  }

  get elements() {
    return{    
      menu: {
        dismiss: this.page.locator('#nav-main > div.nav-left > div > div > div.glow-toaster-footer > span.a-button.a-spacing-top-base.a-button-base.glow-toaster-button.glow-toaster-button-dismiss > span > input'),
        Todaysdeals: this.page.locator(".nav-a[href='/gp/goldbox?ref_=nav_cs_gb']")
      }
    }
  }

  
  async navigateAmazon(){
    await this.page.goto('https://www.amazon.com/');
  }

  async clickOnbutton(){
    await this.elements.menu.dismiss.click()
  }
  async clicktodaydeals(){
    await this.elements.menu.Todaysdeals.click()
  }

  }
