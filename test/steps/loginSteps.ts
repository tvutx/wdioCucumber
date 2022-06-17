import { Given, When } from "@wdio/cucumber-framework";
import chai from "chai"
import loginPage from "../pages/loginPage"
import productPage from "../pages/productPage"


Given(/^I'm at the Herokuapp login page$/, async () => {
    await browser.url("/login")
    let url = await browser.getUrl()
    let expectedUrl = "http://the-internet.herokuapp.com/login"
    chai.expect(url).to.equal(expectedUrl)
})

When(/^I enter the username$/, async () => {
    await loginPage.enterUsername(process.env.TEST_USERNAME)
})

When(/^I enter the password/, async () => {
    await loginPage.enterPassword(process.env.TEST_PWD)
})
