describe('Handling async request in Cypress ', () => {
    it('should be able to wait until a request resolved', async () => {
        // CRUD
        let url = 'https://jsonplaceholder.typicode.com/posts'
        let headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        }    
        let createdPostBody = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        let updatedPostBody = {
            id: 1,
            title: 'fooooooooo',
            body: 'bar',
            userId: 1,
        }

        cy.createPost(createdPostBody).then(res => {
            cy.getPost((Number(res.body.id) -1).toString()).then(res => {
                cy.updatePost(res.body.id, updatedPostBody).then(res => {
                    cy.deletePost(res.body.id)
                })
            })
        })
        
    });
});