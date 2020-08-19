import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input'
// import { ReactComponent } from '*.svg'
// import { render } from 'node-sass'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }



render() {
  return(
    <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
            <FormInput name="email"
             type="email"
              value={this.state.email}
              handleChange={ this.handleChange }
              label="Email"
               required />
            <FormInput name="password"
             type="password"
              value={this.state.password}
              handleChange={ this.handleChange }
              label="Password"
               required />

            <input type="submit" value="Submit form" />
        </form>
    </div>
   )
 }
}
export default SignIn