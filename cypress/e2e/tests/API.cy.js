describe("Testing APIs functionalities", () => {

    let userId;
    let token;
    const email = 'acorenc1234567@gmail.com';
    const password = '123456';
    const url = 'https://practice.expandtesting.com/notes/api/users';

    it("Testing POST request", () => {
        cy.request('POST', url +'/register', {

            name: 'John Doe',
            email: email,
            password: password 

        }).then((response) => {

            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('data')
            expect(response.body.data).to.have.property('id')

            userId = response.body.data.id;
            cy.log(`User id: ${userId}`)
        })
    })

    it("Testing AUTHENTICATION user", () => {

        cy.request('POST', url + '/login', {
           email: email,
           password: password 

        }).then((response) => {
        // This method converts the response object to a JSON string. \
        // The second parameter (null) indicates that no special transformation is applied, 
        // and the third parameter (2) specifies the number of spaces for indentation, 
        // making the output more readable.
            cy.log(`Response: ${JSON.stringify(response, null, 2)}`)

            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('data')
            expect(response.body.data).to.have.property('id')
            expect(response.body.data).to.have.property('token')

            token = response.body.data.token
            cy.log(`User token: ${token}`)
        })
    })

    it("Test GET user", () => {

        cy.request({
            method: 'GET', 
            url: url + '/profile',
            headers: {
                'x-auth-token': `${token}`
            }
        }).then((response) => {
        // This method converts the response object to a JSON string. \
        // The second parameter (null) indicates that no special transformation is applied, 
        // and the third parameter (2) specifies the number of spaces for indentation, 
        // making the output more readable.
            cy.log(`Response: ${JSON.stringify(response, null, 2)}`)

            expect(response.status).to.eq(200)
        })
    })

    it("Test DELETE user", () => {
        cy.request({
            method: 'DELETE',
            url: url + '/delete-account',
            headers: {
               'x-auth-token': `${token}` 
            }
        }).then((response) => {
        // This method converts the response object to a JSON string. \
        // The second parameter (null) indicates that no special transformation is applied, 
        // and the third parameter (2) specifies the number of spaces for indentation, 
        // making the output more readable.
            cy.log(`Response: ${JSON.stringify(response, null, 2)}`)

            expect(response.status).to.eq(200)
        })
    })

})