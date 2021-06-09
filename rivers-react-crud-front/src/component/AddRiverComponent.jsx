import React, { Component } from 'react'
import ApiService from "../service/ApiService";
import {Layout} from "../layout";

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
            <Layout>
                <h1 className='text-3xl'>Add River</h1>
                <form>
                    <div className="form-group mx-3 mb-6" >
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">River Name:</label>
                        <input class ="shadow appearance-none border rounded aspect-w-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control" type="text" placeholder="river_name" name="river_name" value={this.state.river_name} onChange={this.onChange}/>
                    </div>

                    <div className="form-group mx-3 mb-6" >
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">River Length:</label>
                        <input class ="shadow appearance-none border rounded aspect-w-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control" type="river_length" placeholder="river_length" name="river_length" value={this.state.river_length} onChange={this.onChange}/>
                    </div>

                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 border border-green-700 rounded" onClick={this.saveRiver}>Save</button>
                </form>
            </Layout>
        );
    }
}

export default AddRiverComponent;