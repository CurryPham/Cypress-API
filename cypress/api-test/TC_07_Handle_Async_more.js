describe('Handling async request in Cypress ', () => {
    it('should be able to wait until a request resolved', async () => {
        // CRUD  
        let createdPostBody = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }

        cy.createPost(createdPostBody).then(res => {
            cy.getPost((Number(res.body.id) -1).toString()).then(res => {
                cy.updatePost(res.body.id).then(res => {
                    cy.deletePost(res.body.id)
                })
            })
        })
        
    });
});