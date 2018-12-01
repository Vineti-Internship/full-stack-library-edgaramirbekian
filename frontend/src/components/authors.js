import React from 'react'

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
        this.setState({writers: writers_obj})
        console.log(this.state.writers);
        

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
		return Object.entries(this.state.writers).map(([key, value], i) => {
			return (
				<a href='#' key={key}>
					Writer ID: {value.id} ,
					Writer Full Name: {value.first_name +' '+ value.last_name} <br/>
				</a>
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
