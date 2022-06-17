class LoginPage {

    get usernameInputBox() {return $(`#username`)}
    get passwordInputBox() {return $(`#password`)}
    get loginButton() {return $(`.fa.fa-2x.fa-sign-in`)}

    // Page actions
    async enterUsername(username: string){
        await (await this.usernameInputBox).setValue(username)
    }

    async enterPassword(password: string){
        await (await this.passwordInputBox).setValue(password)
    }

    async clickLoginButton(){
        await (await this.loginButton).click()
    }

    async loginToHerokuApp(username: string, password: string){

            await this.enterUsername(username)
            await this.enterPassword(password)
            await this.clickLoginButton()
    }

}

export default new LoginPage()