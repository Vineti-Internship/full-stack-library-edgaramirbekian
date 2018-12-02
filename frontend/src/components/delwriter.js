import React from 'react'

export class DelWriter extends React.Component {
    constructor () {
        super ();
        this.state = {
            writer_id: ''
        }
        this.idhandler = this.idhandler.bind(this)

    }

    async delete_writer () {
        fetch('http://localhost:3000/writers/'+this.state.writer_id, {method: 'DELETE'})
    }

    idhandler (event) {
        this.setState({writer_id: event.target.value});
    }

    render () {
        return (
            <form>
                <label>
                    Writer ID:
                    <input type="text" name="writer_id" value={this.state.writer_id} onChange = {this.idhandler}/>
                </label>
                <input type="submit" value="Submit" onClick= {
                    this.delete_writer
                    }/>
            </form>
        )
    }
}