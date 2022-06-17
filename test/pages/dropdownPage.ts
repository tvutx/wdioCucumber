import { assert } from "chai"

class DropdownPage {
    // Page objects
    get dropdownHeader() {return $(`div.example > h3`)}
    get dropdownList() {return $(`#dropdown`)}
    get option() {return $(`option[value^="1"]`)}
    get selectedFirstOption() {return $(`option[value^="1"][selected^="selected"]`)}

    // Page actions
    async assertDropdownPageIsVisible() {
        await this.dropdownHeader.waitForDisplayed()
        await expect(this.dropdownHeader).toHaveTextContaining("Dropdown List")
    }

    async clickOnTheDropdownList() {
        await this.dropdownList.waitForDisplayed()
        await this.dropdownList.click()
        await browser.pause(3000)
    }

    async selectOptionFromList() {
        await this.option.waitForDisplayed()
        await this.dropdownList.keys("ArrowDown")
        await browser.keys("Enter")
        await expect(this.option).toHaveTextContaining("Option 1")

    }
}

export default new DropdownPage();