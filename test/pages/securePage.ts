class SecurePage {
    
    // Page objects
    get secureAreaText() {return $(`.example h2`)}
    get logoutBtn() {return $(`a.button.secondary`)}

    // Page actions
    async assertSecurePageIsVisible(){
        await this.secureAreaText.waitForDisplayed()
        await expect(this.secureAreaText).toHaveTextContaining("Secure Area")
    }
}

export default new SecurePage()