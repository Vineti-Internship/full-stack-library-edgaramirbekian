import React from 'react'

export class Books extends React.Component {

    constructor () {
        super ();
        this.state = {
            books: [],
        }
    }

    async componentDidMount () {
        const books_url = await fetch ("http://localhost:3000/books/", {method: 'GET'});
        const books_obj = await books_url.json();
        this.setState({books: books_obj})
        console.log(this.state.books);
        
        
    }

    // Function to render information from object data type in render method
    renderBookInfo(){
		return Object.entries(this.state.books).map(([key, value], i) => {
			return (
				<ul key={key}>
                    <li>
					Book ID: {value.id},
                    Title: {value.title},
                    Rating: {value.rating},
                    Category: {value.category},
                    Writer ID: {value.writer_id}
                    </li>
				</ul>
			)
		})
	}

    render() {
        return (
            <div>
                {this.renderBookInfo()}
            </div> 
            
        )
    }
}
