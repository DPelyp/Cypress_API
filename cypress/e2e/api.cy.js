describe("PET Store Swagger", () => { 
  it("Add new pet to the store", () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', { 
      id : 12 , name : 'PES', status : 'available' 
    }).then(
      (response) => {
        expect(response.status).to.eq(200),
        expect(response.body).to.have.property('id', 12),
        expect(response.body).to.have.property('name', 'PES'),
        expect(response.body).to.have.property('status', 'available')
        // expect(response.body).length(42)
      })
    })
    it("Update an existing pet", () => {
      cy.request('PUT', 'https://petstore.swagger.io/v2/pet', { 
        id : 45 , name : 'Lucky', status : 'unavailable' 
      }).then(
        (response) => {
          expect(response.status).to.eq(200),
          expect(response.body).to.have.property('id', 45),
          expect(response.body).to.have.property('name', 'Lucky'),
          expect(response.body).to.have.property('status', 'unavailable')
          // expect(response.body).length(42)
        })
      })
      it("Finds Pets by status", () => {
      cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available', {
        id : 45
      }).then(
        (response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property(length)
        })
      })
      it("Delete Pets by id", () => {
        cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/45').then(
          (response) => {
            expect(response.status).to.eq(200)
            // expect(response.body).length(493)
          })
        })
    })
