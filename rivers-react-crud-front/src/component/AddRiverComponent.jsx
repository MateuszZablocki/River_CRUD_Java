import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class AddRiverComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            river_name: '',
            river_length: '',
        }
        this.saveRiver = this.saveRiver.bind(this);
    }

    saveRiver = (e) => {
        e.preventDefault();
        let river = {river_name: this.state.river_name, river_length: this.state.river_length};
        ApiService.addRiver(river)
            .then(res => {
                this.setState({message : 'River added successfully.'});
                this.props.history.push('/rivers');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add River</h2>
                <form>
                    <div className="form-group">
                        <label>River Name:</label>
                        <input type="text" placeholder="river_name" name="river_name" className="form-control" value={this.state.river_name} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>River Length:</label>
                        <input type="river_length" placeholder="river_length" name="river_length" className="form-control" value={this.state.river_length} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveRiver}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddRiverComponent;