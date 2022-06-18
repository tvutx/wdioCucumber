import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../pages/homePage";
import productPage from "../pages/productPage"


Given(/^I'm on the product page$/, async () => {
    await productPage.validateTitle()
})

When(/^I enter "([^"]*)" in the "([^"]*)" quantity box$/, async (quantity, product) => {
    await productPage.enterQuantityByProduct(quantity, product)
    await browser.pause(1000) // Can remove this pause. It's for the viewer.
})

When(/^I select "([^"]*)" from the dropdown$/, async (stateAbrv) => {
    await productPage.selectState(stateAbrv)
    await browser.pause(1000) // Can remove this pause. It's for the viewer.
})

When(/^I click on the checkout button$/, async () => {
    await productPage.checkoutBtn.click()
    await browser.pause(1000) // Can remove this pause. It's for the viewer.
})