import chai from "chai"
import Page from "./page"

class LoginPage extends Page {
    constructor() {
        super()
    }

    // Page objects
    get usernameInputBox() {return $(`#username`)}
    get passwordInputBox() {return $(`#password`)}
    get loginButton() {return $(`.fa.fa-2x.fa-sign-in`)}

    // Page actions
    async enterUsername(username: string){
        if(!username) throw Error(`*****Given username: ${username} is not valid*****`)
        username = username.trim()
        console.log(`**************** ${process.env.TEST_USERNAME}`);

        await this.typeInto(await this.usernameInputBox, username)
    }

    async enterPassword(password: string){
        if(!password) throw Error(`*****Given password: ${password} is not valid*****`)
        password = password.trim()

        console.log(`**************** ${process.env.TEST_PWD}`);

        await this.typeInto(await this.passwordInputBox, password)
    }

    async clickLoginButton(){
        await this.click(await this.loginButton)
    }

    async loginToHerokuApp(username: string, password: string){
        try{
            await this.enterUsername(username)
            await this.enterPassword(password)
            await this.clickLoginButton()
        }  catch (err){
            throw err
        }
    }

}

export default new LoginPage()