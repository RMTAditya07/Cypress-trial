describe('Data Driven Test',() => {
    it('Direct Method', ()=> {
        cy.fixture("orangehrm2").then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/')
            data.forEach((userData) => {
                cy.get('input[name = "username"]').type(userData.username)
                cy.get('input[name = "password"]').type(userData.password)
                cy.get('button[type="submit"]').click()
                
                if(userData.username == 'Admin' && userData.password == 'admin123'){
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should(
                    'have.text',userData.expected
                    )                
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else{
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text',userData.expected)
                }
            });

        })
        // cy.get('.oxd-userdropdown-name').should('have.text','Ranga Akunuri')
    })
    
})