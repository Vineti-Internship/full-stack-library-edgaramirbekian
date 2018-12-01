import React from 'react'
import { Link } from 'react-router-dom'


export class Header extends React.PureComponent {
    render() {
        return (
            <div>
                <h3>Library Demo</h3>
                <Link to='/addwriter'>Add Author</Link> <br/>
                <Link to='/addbook'>Add Book</Link> <br/>

            </div>
        )
    }
}
