const {test, expect} = require('@playwright/test');
const{ HomePage } = require('../pages/home.page');
const{ Todaysdeals } = require('../pages/todaysdeals');
const{ Product} = require('../pages/product');
const{ Cart} = require('../pages/cart');
const{ Borrar} = require('../pages/borrar');


test('Seleccionar producto y borrarlo', async ({ page }) => {
  const homepage = new HomePage(page)
  const todaysDeals = new Todaysdeals(page)
  const product = new Product(page)
  const cart = new Cart(page)
  const borrar = new Borrar(page)

  await homepage.navigateAmazon();
  await homepage.clickOnbutton();
  await homepage.clicktodaydeals();
  await todaysDeals.clickOnProduct();
  await product.clickOnAddtoCart();
  await cart.clickGotoCard();
  await borrar.clickDelete();


});
