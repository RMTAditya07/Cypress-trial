describe('Custom commands' ,() => {
    it('login',() => {
        cy.visit('https://demo.nopcommerce.com/')
        //Direct method
        // cy.get(':nth-child(1) > .product-item > .details > .product-title > a').click()
        
        //Custom command
        cy.clickLink("Build your own computer")
        cy.get('div[class="product-name"] h1').should('have.text','Build your own computer')
        
    })
})