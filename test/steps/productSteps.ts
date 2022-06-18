import { Given, When, Then } from "@wdio/cucumber-framework";
import productPage from "../pages/productPage"


Given(/^I'm on the product page$/, async () => {
    await productPage.validateTitle()
})

When(/^I enter "([^"]*)" in the "([^"]*)" quantity box$/, async (quantity, product) => {
    await productPage.zebraQuantity.setValue(1)
    await (await $(`#line_item_quantity_${product}`)).setValue(quantity)
    // await browser.pause(2000)
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

When(/^I click select "([^"]*)" from the dropdown$/, async (stateAbrv) => {
    await (await $(`select[name^=state] > option[value^=${stateAbrv}]`)).click()
    await browser.pause(2000)
})

When(/^I click on the checkout button$/, async () => {
    await productPage.checkoutBtn.click()
    await browser.pause(2000)
})