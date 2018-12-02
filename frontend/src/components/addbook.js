import React from 'react'

export class AddBook extends React.Component {
    constructor () {
        super ();
        
        this.post_request = this.post_request.bind(this);
    }

    state = {
        title: '',
        category: '',
        rating: 0,
        writer_id: 0
    }

    async post_request () {
        fetch('https://localhost:3000/books', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
            title: this.state.title,
            category: this.state.category,
            rating: this.state.rating,
            writer_id: this.state.writer_id
            })
        })
    }

    render () {
        return (
            <form>
                <label>
                    Title:
                    <input type="text" name="title" value={this.state.title} onChange = {
                        (event) => {this.setState({title: event.target.value})}
                        }/>
                </label>
                <label>
                    Category:
                    <input type="text" name="category" value={this.state.category} onChange = {
                        (event) => {this.setState({category: event.target.value})}
                        }/>
                </label>
                <label>
                    Rating:
                    <input type="text" name="rating" value={this.state.rating} onChange = {
                        (event) => {this.setState({rating: parseInt(event.target.value)})}
                        }/>
                </label>
                <label>
                    Writer ID:
                    <input type="text" name="writer_id" value={this.state.writer_id} onChange = {
                        (event) => {this.setState({writer_id: parseInt(event.target.value)})}
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