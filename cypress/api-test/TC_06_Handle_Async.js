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

        cy.request({
            method: 'POST',
            url: url,
            Headers: headers,
            body: createdPostBody
        }).then(res => {
            cy.request({
                method: 'GET',
                url: url + "/" + (Number(res.body.id) -1).toString()
            }).then(res => {
                cy.request({
                    method: 'PUT',
                    url: url + "/" + res.body.id, 
                    Headers: headers,
                    body: updatedPostBody
                }).then(res => {
                    cy.request({
                        method: 'DELETE',
                        url: url + '/' + res.body.id,   
                    });
                })
            })
        })
    });
});