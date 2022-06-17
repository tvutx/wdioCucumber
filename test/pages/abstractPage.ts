class AbstractPage {

    async navigate(url: string) {
        await browser.url(url)
        await browser.maximizeWindow()

    }

    async waitForSeconds(seconds: number) {
        await browser.pause(seconds * 1000)
    }

    async debug() {
        await browser.debug()
    }

    async click(el: WebdriverIO.Element) {
        await el.waitForClickable({timeout: 5000})
        if(!el.elementId) {
            throw Error(el.error.message)
        }

        await el.click()
    }

    async enterText(el: WebdriverIO.Element, text: string) {
        await el.waitForDisplayed({timeout: 5000})
        if(!el.elementId) {
            throw Error(el.error.message)
        }

        await el.setValue(text)
    }
}

export default new AbstractPage();