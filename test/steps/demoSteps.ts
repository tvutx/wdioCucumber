import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import securePage from "../pages/securePage"
import dropdownPage from "../pages/dropdownPage"
import homePage from "../pages/homePage";

Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com")
})

Given(/^Herokuapp homepage is opened$/, async () => {
    await browser.url("")
})

Given(/^I open the site$/, async () => {
    await browser.url("")
    let test = await browser.getUrl()
    console.log("*******************",test)
})

When(/^Search with (.*)$/, async (searchItem) => {
    console.log(`>> searchItem: ${searchItem}`);
    let ele = await $(`.gLFyf.gsfi`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first result$/, async () => {
    let ele = await $(`.LC20lb.MBeuO.DKV0Md`)
    await ele.click()

})

Then(/^URL should match (.*)$/, async (expectedURL) => {
    console.log(`Expected URl: ${expectedURL}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)
})

// Web interactions

Given(/^A web page is opened$/, async () => {
    await browser.url("/inputs")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    // await browser.maximizeWindow()
})

When(/^Perform web interactions$/, async () => {

    console.log(await browser.getUrl());

    let ele = await $(`[type=number]`)
    await ele.setValue("12345")
})

Then(/^I'm at the secure page$/, async () => {
    await securePage.assertSecurePageIsVisible()      
})

When(/^I click on the dropdown link$/, async () => {
    await homePage.clickOnDropdownLink()
})

Then(/^I'm at the dropdown page$/, async () => {
    await dropdownPage.assertDropdownPageIsVisible()
})

Then(/^I click on the dropdown list$/, async () => {
    await dropdownPage.clickOnTheDropdownList()
})

Then(/^I select option 1 from the dropdown list$/, async () => {
    await dropdownPage.selectOptionFromList()
    await browser.pause(2000)
})