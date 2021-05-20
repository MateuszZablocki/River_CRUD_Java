import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class EditRiverComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            river_name: '',
            river_length: '',
        }
        this.saveRiver = this.saveRiver.bind(this);
        this.loadRiver = this.loadRiver.bind(this);
    }

    componentDidMount() {
        this.loadRiver();
    }

    loadRiver() {
        ApiService.fetchRiverById(window.localStorage.getItem("riverId"))
            .then((res) => {
                let river = res.data;
                this.setState({
                    id: river.id,
                    river_name: river.river_name,
                    river_length: river.river_length,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveRiver = (e) => {
        e.preventDefault();
        let river = {id: this.state.id, river_name: this.state.river_name, river_length: this.state.river_length};
        ApiService.editRiver(river)
            .then(res => {
                this.setState({message : 'River added successfully.'});
                this.props.history.push('/rivers');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit River</h2>
                <form>

                    <div className="form-group">
                        <label>ID:</label>
                        <input placeholder="id" name="id" className="form-control" value={this.state.id} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>River Name:</label>
                        <input placeholder="river_name" name="river_name" className="form-control" value={this.state.river_name} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>River length:</label>
                        <input placeholder="river_length" name="river_length" className="form-control" value={this.state.river_length} onChange={this.onChange}/>
                    </div>



                    <button className="btn btn-success" onClick={this.saveRiver}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditRiverComponent;