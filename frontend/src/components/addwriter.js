import React from 'react'

export class AddWriter extends React.Component {
    constructor () {
        super ();

        this.state = {
            first_name: '',
            last_name: '',
            password: '',
            email: ''
        }
        this.post_request = this.post_request.bind(this)

    }
    

    async post_request () {
        fetch('http://localhost:3000/writers', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            password: this.state.password,
            email: this.state.email
            })
        })
    }

    render () {
        return (
            <form>
                <label>
                    First Name:
                    <input type="text" name="first_name" value={this.state.first_name} onChange = {
                        (event) => {this.setState({first_name: event.target.value})}
                        }/>
                </label>
                <label>
                    Last Name:
                    <input type="text" name="last_name" value={this.state.last_name} onChange = {
                        (event) => {this.setState({last_name: event.target.value})}
                        }/>
                </label>
                <label>
                    Password:
                    <input type="pasword" name="password" value={this.state.password} onChange = {
                        (event) => {this.setState({password: event.target.value})}
                        }/>
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={this.state.email} onChange = {
                        (event) => {this.setState({email: event.target.value})}
                    }/>
                </label>
                <input type="submit" value="Submit" onClick= {
                    this.post_request
                    // console.log(this.state)
                    }/>
            </form>
        )
    }


}