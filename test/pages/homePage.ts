class HomePage {
    // Page objects
    get dropdownLink () {return $(`a[href^="/dropdown"]`)}

    // Page actions
    async clickOnDropdownLink(){
        await this.dropdownLink.click()
    }
}

export default new HomePage();