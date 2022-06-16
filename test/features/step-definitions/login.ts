import { Given } from "@wdio/cucumber-framework";
import chai from "chai"
import loginPage from "../../page-objects/herokuapp.login.page"


Given(/^I'm at the Herokuapp login page$/, async function(){
    await browser.url("/login")
    let url = await browser.getUrl()
    console.log(`********* URL ${url}`);
    let expectedUrl = "http://the-internet.herokuapp.com/login"
    chai.expect(url).to.equal(expectedUrl)
})

Given(/^I enter the username$/, async function(){
    loginPage.enterUsername(process.env.TEST_USERNAME)
})

Given(/^I enter the password/, async function(){
    loginPage.enterPassword(process.env.TEST_PWD)
})

Given(/^I click on the login button$/, async function(){
    loginPage.clickLoginButton() 
})