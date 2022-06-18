import { Given, When, Then } from "@wdio/cucumber-framework";
import confirmationPage from "../pages/confirmationPage"
import homePage from "../pages/homePage";

Then(/^I'm on the confirm order page$/, async () => {
    await expect(confirmationPage.confirmHeader).toHaveTextContaining("Please Confirm Your Order")
})

Then(/^I verify the subtotal is "([^"]*)"$/, async (subtotal) => {
    await expect(confirmationPage.subtotal).toHaveTextContaining(subtotal)
    let sub = await (await confirmationPage.subtotal).getText()
    console.log(`************************* SUBTOTAL: ${sub}`)
})

Then(/^I verify the taxes is "([^"]*)"$/, async (tax) => {
    await expect(confirmationPage.taxes).toHaveTextContaining(tax)
    let taxes = await (await confirmationPage.taxes).getText()
    console.log(`************************* TAXES: ${taxes}`)
})

Then(/^I verify the total is "([^"]*)"$/, async (total) => {
    await expect(confirmationPage.total).toHaveTextContaining(total)
    let tl = await (await confirmationPage.total).getText()
    console.log(`************************* TOTAL: ${tl}`)
})

Then(/^I verify the checkout error message "([^"]*)"$/, async (errorMessage) => {
    await expect(confirmationPage.errorMessage).toHaveTextContaining(errorMessage)

})