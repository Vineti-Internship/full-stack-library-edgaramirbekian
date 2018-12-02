import React from 'react'
export class AddBook extends React.Component {
    constructor () {
        super ();
        // this.state = {
        //     title: '',
        //     category: '',
        //     rating: 0,
        //     writer_id: 0
        // }
        
        // this.post_request = this.post_request.bind(this);
    }

    

    async post_request (reqdatat) {
        fetch('http://localhost:3000/books/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify (
            reqdatat
            // title: this.data.title,
            // category: this.data.category,
            // rating: this.data.rating,
            // writer_id: this.data.writer_id
            )
        })
    }

    myvalues_data = React.createRef();

    myvalues_creator = () => {
        const myvalues = this.myvalues_data.current.elements;

        const data = {
            title: myvalues.title.value,
            category: myvalues.category.value,
            rating: myvalues.rating.value,
            writer_id: myvalues.writer_id.value
        }

        this.post_request(data)
    }

    

    render () {
        return (
            <form ref = {this.myvalues_data}>
                <label>
                    Title:
                    <input type="text" name="title" /*value={this.data.title} onChange = {
                        // (event) => {this.setState({title: event.target.myvalues})}
                        // (event) =>  {this.data.title = event.target.myvalues}
                        }*//>
                </label>
                <label>
                    Category:
                    <input type="text" name="category" /*value={this.data.category} onChange = {
                        // (event) => {this.setState({category: event.target.myvalues})}
                        // (event) =>  {this.data.category = event.target.value}
                        }*//>
                </label>
                <label>
                    Rating:
                    <input type="text" name="rating" /*value={this.data.rating} onChange = {
                        // (event) => {this.setState({rating: parseInt(event.target.myvalues)})}
                        // (event) =>  {this.data.rating = event.target.value}
                        }*//>
                </label>
                <label>
                    Writer ID:
                    <input type="text" name="writer_id" /*value={this.data.writer_id} onChange = {
                        // (event) => {this.setState({writer_id: parseInt(event.target.myvalues)})}
                        // (event) =>  {this.data.writer_id = event.target.value}
                    }*//>
                </label>
                <input type="submit" value="Submit" onClick= {
                        // this.post_request
                        this.myvalues_creator
                        // console.log(this.state)
                    }/>
            </form>
        )
    }


}