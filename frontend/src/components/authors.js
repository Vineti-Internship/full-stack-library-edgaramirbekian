import React from 'react'
import { Link } from 'react-router-dom'


export class Authors extends React.Component {

    constructor () {
        super ();
        this.state = {
            writers: [],
            // writers_book: [],

        }
    }

    async componentDidMount () {
        const writers_url = await fetch ("http://localhost:3000/writers/", {method: 'GET'});
        const writers_obj = await writers_url.json();
        // const books_url = await fetch ("http://localhost:3000/books/", {method: 'GET'});
        // const books_obj = await books_url.json();

        this.setState({writers: writers_obj});
        // this.setState({writers_book:books_obj});

        console.log(this.state.writers);
        // console.log(this.state.writers_book);
        
        

        // const last_writer = writers_obj[writers_obj.length - 1].id;
       
        // let all_writers = []
        
        // for (let n = writers_obj[0]; n <= last_writer; n++) {
        //     var url = await fetch ("http://localhost:3000/writers/"+n, {method: 'GET'});
        //     var res = await url.json();
        //     await all_writers.append(res);
        // }
        
        // await console.log(all_writers);
        
    }

    // Function to render information from object data type in render method
    renderWriterInfo(){

        // const book_handler = async () => {
        //     return Object.entries(this.state.writers_book).map(([key, value], i) => {
		// 	return (
		// 		<div key={key}>
		// 			BOOK ID: {value.id} ,
		// 			TITLE: {value.title},
        //             Rating: {value.rating},
        //             <br/>
		// 		</div>
		// 	)
		// }) 
        
		return Object.entries(this.state.writers).map(([key, value], i) => {
			return (
				<ul key={key}>
					<li>
                        <Link to='/books'>Writer ID: {value.id} ,
                        Writer's Full Name: {value.first_name + ' ' + value.last_name}
                        </Link>
                    </li>
				</ul>
			)
		})
	}

    


    render() {
        return (
            <div>
                {this.renderWriterInfo()}
            </div> 
            
        )
    }
}
