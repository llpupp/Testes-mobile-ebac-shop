class MyStoreScreen {
    get #myStoreLogo() {
        return $('~My store')
    }
    get #myStoreName() {
        return $('id:toolbar_subtitle')
    }
    async myStoreLogoIsDisplayed() {
        await this.#myStoreLogo.waitForExist()
        return await this.#myStoreLogo.isDisplayed()
    }
    async getStoreName() {
        return await this.#myStoreName.getText()
    }
}
module.exports = new MyStoreScreen()