import chai from "chai"

export default class Page {
    constructor() {

    }

    async navigateTo(path: string){
        await browser.url(path)
        await browser.maximizeWindow()
    }

    async click(ele: WebdriverIO.Element){
        await ele.waitForClickable({timeout: 5000})
        if(!ele.elementId){
            throw Error(ele.error.message)
        }

        ele.click()
    }

    async typeInto(ele: WebdriverIO.Element, text: string){
        await ele.waitForClickable({timeout: 5000})
        if(!ele.elementId){
            throw Error(ele.error.message)
        }

        ele.setValue(text) 
    }
}