import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com")
})

When(/^Search with (.*)$/, async function(searchItem){
    console.log(`>> searchItem: ${searchItem}`);
    let ele = await $(`.gLFyf.gsfi`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first result$/, async function(){
    let ele = await $(`.LC20lb.MBeuO.DKV0Md`)
    await ele.click()

})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`Expected URl: ${expectedURL}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)
})

// Web interactions

Given(/^A web page is opened$/, async function (){
    await browser.url("/inputs")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    // await browser.maximizeWindow()
})

When(/^Perform web interactions$/, async function (){
    /* 
        input box
        Actions:
        1. type into input box
        2. Clear the input box, continue to type, or add more value
        3. click and type
        4. type slowly
    */
    console.log(await browser.getUrl());

    let ele = await $(`[type=number]`)
    await ele.setValue("12345")

    await browser.debug()
})