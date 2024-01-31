describe('template spec', () => {
  it('type', () => {
    cy.visit('/');
    cy.get('#fname')
    cy.get('#lname')
  })
  it('radio', () => {
    cy.visit('/');
    cy.get('[for="male"]').click()
    cy.get('[for="female"]').click()
    cy.get('[for="other"]').click()
  })
  it('dropdown', () => {
    cy.visit('/');
    cy.get('select[id = "option"]').should('have.value','option')
    cy.get('#option').select('Option 2')
    cy.get('#option').should('have.value','option 2')
    
  })
  it('Checkbox', ()=> {
    cy.visit('/')
    // cy.get('[name="option1"]').click()
    cy.get('[name="option1"]').check()
    cy.get('[name="option1"]').uncheck()
    cy.get('[name="option1"]').should('not.be.checked')
    cy.get('[name="option2"]').click()
    cy.get('[name="option2"]').click()
    cy.get('[name="option3"]').click()
    cy.get('[name="option3"]').should('be.checked')
  })

  it('table', () => {
    cy.visit('/')
    cy.get('tbody > :nth-child(1) > :nth-child(1)')
  })
  it('double-click' , () => {
    cy.visit('/')
    cy.get('button[ondblclick="myFunction()"]').dblclick()
    cy.get('p[id = "demo"]').should('contain','Your Sample Double Click worked!')
  })
  it('hover',() => {
    cy.visit('/')
    cy.get('.tooltip').trigger('mouseover')
    // cy.get('.tooltiptext').should('be.visible')
    cy.get('.tooltiptext').should('contain','This is your sample Tooltip text')
  })
  it('alert',() => {
    cy.visit('/')
    // cy.get('.pop-up-alert > button').click()
    // cy.on('window:alert',(txt) => {
    //   expect(txt).to.contains('Press a button!'),
    //   () => true
    // })
    // cy.log('Pressed ok')
    // cy.get('.pop-up-alert > #demo').contains('You Pressed the OK Button!')
    cy.get('.pop-up-alert > button').click()
    cy.on('window:confirm',() => {
      // expect(txt1).to.contains('Press a button!'),
      () => false
    })
    cy.log('Pressed cancel')
    cy.get('.pop-up-alert > #demo').should('have.value','You pressed the Cancel Button!')
  })
  it.only('Column count', () =>{
    cy.visit('/')
    cy.get('tbody > tr > th').its('length').then((col_count) => {
      cy.log('Column Count : '+col_count)
    })
    cy.get('tbody > tr').its('length').then((row_count) => {
      cy.log('Row Count : '+row_count)
    })
  })


})