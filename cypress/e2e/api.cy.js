describe("User registartaion Full", () => { 
  it("Form 1 Registration", () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', { 
      id : 12 , name : 'PES', status : 'available' 
    }).then(
      (response) => {
        expect(response.status).to.eq(200),
        expect(response.body).to.have.property('id', 12),
        expect(response.body).to.have.property('name', 'PES'),
        expect(response.body).to.have.property('status', 'available'),
        expect(response.body).length(42)
      }
    )
    })
  })