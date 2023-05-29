class login_page{
    username = '#Username'
    password = '#Password'
    error_message = '.alert-danger'

    input_username(username){
        cy.input(this.username, username)
    }

    input_password(password){
        cy.input(this.password, password)
    }
}

export default login_page