class skipScreen {
    get #enterStoreLogin(){
        return $('id:button_skip')
    }
    get #skipSurvey() {
        return $('id:survey_button_skip')
    }

    get #skipAnnouncement() {
        return $('id:close_feature_announcement_button')
    }

        
    async goToNextPage(){
        await this.#enterStoreLogin.click()
        if (await this.#skipSurvey.isExisting()){
            await this.#skipSurvey.click()
        }
    }
    async skipAnnouncement(){
        await this.#skipAnnouncement.waitForDisplayed({ timeout: 20000 })
        await this.#skipAnnouncement.click()
    }
    
}
module.exports = new skipScreen()