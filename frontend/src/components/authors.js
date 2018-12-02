import React from 'react'
import { Link } from 'react-router-dom'


export class Authors extends React.Component {

    constructor () {
        super ();
        this.state = {
            writers: [],
        }
    }

    async componentDidMount () {
        const writers_url = await fetch ("http://localhost:3000/writers/", {method: 'GET'});
        const writers_obj = await writers_url.json();

        this.setState({writers: writers_obj});
        
    }

    // Function to render information from object data type in render method
    renderWriterInfo(){



		return Object.entries(this.state.writers).map(([key, value], i) => {
			return (
				<ul key={key}>
					<li>
                        <Link to='/books'>Writer ID: {value.id} ,
                        Writer's Full Name: {value.first_name + ' ' + value.last_name},
                        </Link>
                        <button onClick={
                            async () => {
                                fetch('http://localhost:3000/writers/'+value.id, {method: 'DELETE'})
                            }
                        }>Delete</button>
                    </li>
				</ul>
			)
		})
    }


    


    render() {
        // console.log(this.state);
        
        return (
            <div>
                {this.renderWriterInfo()}
            </div> 
            
        )
    }
}
