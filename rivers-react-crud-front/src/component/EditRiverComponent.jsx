import React, { Component } from 'react'
import ApiService from "../service/ApiService";
import {Layout} from "../layout";

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

                <Layout>
                <h1 className='text-3xl'>Edit River</h1>
                <form>
                    <div className="mx-3 mb-6">
                    <div className="form-group" >
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> ID: </label>
                        <input class ="shadow appearance-none border rounded aspect-w-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control" placeholder="id" name="id" value={this.state.id} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">River Name: </label>
                        <input class ="shadow appearance-none border rounded aspect-w-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control" placeholder="river_name" name="river_name" value={this.state.river_name} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">River length: </label>
                        <input class ="shadow appearance-none border rounded aspect-w-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control" placeholder="river_length" name="river_length" value={this.state.river_length} onChange={this.onChange}/>
                    </div>
                    </div>



                </form>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        onClick={this.saveRiver}>Save
                    </button>
                </Layout>
        );
    }
}

export default EditRiverComponent;