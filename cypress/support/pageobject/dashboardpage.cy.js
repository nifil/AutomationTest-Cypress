class dashboard_page{
    name = '#Name'
    company = '#Company'
    address = '#Address'
    city = '#City'
    phone = '#Phone'
    email = '#Email'  
    search = '#searching'

    input_name(name){
        cy.input(this.name, name)
    }

    input_company(company){
        cy.input(this.company, company)
    }

    input_address(address){
        cy.input(this.address, address)
    }

    input_city(city){
        cy.input(this.city, city)
    }

    input_phone(phone){
        cy.input(this.phone, phone)
    }

    input_email(email){
        cy.input(this.email, email)
    }

    input_search(search){
        cy.input(this.search, search)
    }
}

export default dashboard_page