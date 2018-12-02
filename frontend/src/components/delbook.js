import React from 'react'

export class DelBook extends React.Component {
    constructor () {
        super ();
        this.state = {
            book_id: ''
        }
        this.idhandler = this.idhandler.bind(this)

    }
    

    async delete_book () {
        fetch('http://localhost:3000/books'+this.state.book_id, {method: 'DELETE'})
    }

    idhandler (event) {
        this.setState({book_id: event.target.value});
    }

    render () {
        return (
            <form>
                <label>
                    Book ID:
                    <input type="text" name="book_id" value={this.state.book_id} onChange = {this.idhandler}/>
                </label>
                <input type="submit" value="Submit" onClick= {
                    this.delete_book
                    }/>
            </form>
        )
    }
}