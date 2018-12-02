import React from 'react'
import { Link } from 'react-router-dom'


export class Header extends React.PureComponent {
    render() {
        return (
            <div>
                <h3><Link to='/'>Library Demo</Link> </h3><br/>
                <Link to='/books'>Books</Link> <br/>
                <Link to='/addwriter'>Add Author</Link> <br/>
                <Link to='/addbook'>Add Book</Link> <br/>
                <Link to='/delbook'>Delete Book</Link> <br/>
                <Link to='/delwriter'>Delete Writer</Link> <br/>



            </div>
        )
    }
}
