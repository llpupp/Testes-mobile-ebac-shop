const skipScreen = require("../screens/skip.screen")
const homeScreen = require("../screens/home.screen")
const loginScreen = require("../screens/login.screen")
const myStoreScreen = require("../screens/myStore.screen")

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let username = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'


describe('Access Admin Panel', () => {
    
    it('should login with valid credentials', async () => {
        await skipScreen.goToNextPage()
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueWithStoreCredentials()
        await loginScreen.login(username , password)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(password)
        await loginScreen.newcontinue()
        
        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect (await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
    });
})