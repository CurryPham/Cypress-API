describe('Test POST request', () => {
    it('should be able to send a POST request and get response', () => {
        let url = 'https://jsonplaceholder.typicode.com/posts'

        let headers = {
        'Content-Type': 'application/json; charset=UTF-8',
    }
    
    let requestBody = {
        title: 'foo',
        body: 'bar',
        user: 1,
    }

    let requestObject = {
        method: 'POST',
        url: url,
        Headers: headers,
        body: requestBody
    }

    cy.request(requestObject).then(res => {
        let {status, body} = res
        expect(status).to.eq(201, 'Status is 201')

        let {userId, id, title} = body
        let responseBody = body.body

        expect(userId).to.eq(requestBody.userId, 'userId is correct')
        expect(id).to.eq(101, 'id is correct')
        expect(title).to.eq(requestBody.title, 'title is correct')
        expect(responseBody).to.eq(requestBody.body, 'body is correct')
    })
    });
});