describe('Trying fixtures',() => {
    let userData;
    before(()=>{
        cy.fixture("orangehrm").then((data)=> {
            userData= data;
        })
    })
    it('Direct Method', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture("orangehrm").then((data)=>{

            cy.get('input[name = "username"]').type(data.username)
            cy.get('input[name = "password"]').type(data.password)
            cy.get('button[type="submit"]').click()
        })
        // cy.get('.oxd-userdropdown-name').should('have.text','Ranga Akunuri')
    })
    it.only('Hooks Method',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name = "username"]').type(userData.username)
        cy.get('input[name = "password"]').type(userData.password)
        cy.get('button[type="submit"]').click()
    })
})