import {DEFAULT} from "../utils/Method";

describe('Test DELETE method request', () => {
    it('should be able to send a requeset with DELETE method', () => {
        let url = 'https://jsonplaceholder.typicode.com/posts/1'
        let headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        }

        cy.request({
            method: DEFAULT.delete,
            url: url,   
            Headers: headers,
        }).then(res => {
            expect(res.status).to.eq(200, 'Status is 200')
        })
    });
});