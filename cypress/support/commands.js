// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    }   
    
    let updatedPostBody = {
        id: 1,
        title: 'fooooooooo',
        body: 'bar',
        userId: 1,
    }

Cypress.Commands.add("createPost", postBody => {
    cy.request({
        method: 'POST',
        url: Cypress.env("baseUrl"),
        Headers: headers,
        body: postBody
})
})

Cypress.Commands.add("getPost", getNum => {
    cy.request({
        method: 'GET',
        url: Cypress.env("baseUrl") + "/" + getNum
})
})

Cypress.Commands.add("updatePost", putNum => {
    cy.request({
        method: 'PUT',
        url: Cypress.env("baseUrl") + "/" + putNum, 
        Headers: headers,
        body: updatedPostBody
})
})

Cypress.Commands.add("deletePost", deleteBody => {
    cy.request({
        method: 'DELETE',
        url: Cypress.env("baseUrl") + '/' + deleteBody,   
})
})