import { Given, When, Then } from "@wdio/cucumber-framework";
import productPage from "../pages/productPage"


Given(/^I'm on the product page$/, async () => {
    await productPage.validateTitle()
})

When(/^I enter one in the zebra quantity box$/, async () => {
    await productPage.zebraQuantity.setValue(1)
})

When(/^I enter one in the lion quantity box$/, async () => {
    await productPage.lionQuantity.setValue(1)
})

When(/^I enter one in the elephant quantity box$/, async () => {
    await productPage.elephantQuantity.setValue(1)
})

When(/^I enter one in the giraffe quantity box$/, async () => {
    await productPage.giraffeQuantity.setValue(1)
})

When(/^I click select California from the dropdown$/, async () => {
    // await productPage.stateDropdown.click()
    await productPage.selectCaState.click()
    // await browser.keys("Enter")
})

When(/^I click on the checkout button$/, async () => {
    await productPage.checkoutBtn.click()
    await browser.pause(5000)
})