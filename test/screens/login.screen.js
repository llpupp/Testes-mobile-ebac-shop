class LoginScreen {
    get #storeAddress() {
        return $('android.widget.EditText')
    }
    get #continue() { 
        return $('id:bottom_button')
    }
    get #continueWithStoreCredentials() {
        return $('id=com.woocommerce.android:id/button_login_store')
    }
    get #username() { 
        return $('android=new UiSelector().text("Username")')
    }
    get #password() { 
        return $('android=new UiSelector().text("Password")')
    }
    get #twoFactorPasswordBtn() { 
        return $('id:login_enter_password')
    }
    get #newcontinue() {
        return $('id:close_feature_announcement_button')
    }

    async setStoreAddress(url) {
       await this.#storeAddress.setValue(url)
    }
    async continue() {
        await this.#continue.click()
    }
    async continue() {
        await this.#continueWithStoreCredentials.click()
    }
    async login(username, password) {
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
        
    }
    async goToTwoFactorAuth() {
        await this.#twoFactorPasswordBtn.click()
    }
    async twoFactorLogin(password) {
        await this.#password.setValue(password)
        await this.#continue.click()
    }
    async newcontinue() {
        await this.#newcontinue.click()
    }
}
module.exports = new LoginScreen()