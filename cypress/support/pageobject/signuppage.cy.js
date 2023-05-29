class signup_page{
    first_name = '#FirstName'
    surname = '#Surname'
    epost = '#E_post'
    mobile = '#Mobile'
    username = '#Username'
    password = '#Password'
    confirm_password = '#ConfirmPassword'
    success_message = '.label-success'
    error_message = '.label-danger'

    input_first_name(first_name){
        cy.input(this.first_name, first_name)
    }

    input_surname(surname){
        cy.input(this.surname, surname)
    }

    input_epost(epost){
        cy.input(this.epost, epost)
    }

    input_mobile(mobile){
        cy.input(this.mobile, mobile)
    }

    input_username(username){
        cy.input(this.username, username)
    }

    input_password(password){
        cy.input(this.password, password)
    }

    input_confirm_password(confirm_password){
        cy.input(this.confirm_password, confirm_password)
    }
}

export default signup_page