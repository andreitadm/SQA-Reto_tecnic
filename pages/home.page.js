export class HomePage{
  constructor(page){
    this.page=page
  }

  get elements() {
    return{    
      menu: {
        dismiss: this.page.locator('#nav-main > div.nav-left > div > div > div.glow-toaster-footer > span.a-button.a-spacing-top-base.a-button-base.glow-toaster-button.glow-toaster-button-dismiss > span > input'),
        Todaysdeals: this.page.locator(".nav-a[href='/gp/goldbox?ref_=nav_cs_gb']"),
        languages: this.page.locator("span[class='icp-nav-link-inner'] span[class='nav-line-2']"),
        idiom: this.page.locator("body > div:nth-child(1) > header:nth-child(20) > div:nth-child(1) > div:nth-child(3) > div:nth-child(18) > div:nth-child(2) > a:nth-child(2) > span:nth-child(1) > span:nth-child(2)"),
      }
    }
  }

  
  async navigateAmazon(){
    await this.page.goto('https://www.amazon.com/');
  }

  async clickOnbutton(){
    await this.elements.menu.dismiss.click()
  }

  async clicklanguage(){
    await this.elements.languages.hover();
    await this.elements.idiom.click();
  }
  async clicktodaydeals(){
    await this.elements.menu.Todaysdeals.click()
  }

  }
