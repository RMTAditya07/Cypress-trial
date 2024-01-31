import {LoginPage} from '../pages/loginPage'

const loginPage =  new LoginPage()

it('testing' , () => {
    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test')
    loginPage.enterPassword('test')
    loginPage.clickSubmit()
})