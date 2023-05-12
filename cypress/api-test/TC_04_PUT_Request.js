describe('Test PUT method request', () => {
    it('should be able to send a requeset with PU method', () => {
        let url = 'https://jsonplaceholder.typicode.com/posts/1'
        let headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        }
    
        let requestBody = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        cy.request({
            method: 'PUT',
            url: url,   
            Headers: headers,
            body: requestBody
        }).then(res => {
            let {status} = res
            let resbody = res.body
            let {userId, id, title, body} = resbody
            expect(status).to.eq(200, 'Status is 200')
            expect(userId).to.eq(requestBody.userId)
            expect(id).to.eq(requestBody.id)
            expect(title).to.eq(requestBody.title)
            expect(body).to.eq(requestBody.body)
        })
    });
});