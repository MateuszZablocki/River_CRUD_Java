import React, { Component } from 'react'
import ApiService from "../service/ApiService";
import {Layout} from "../layout";

class ListRiverComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rivers: [],
        }
        this.deleteRiver = this.deleteRiver.bind(this);
        this.editRiver = this.editRiver.bind(this);
        this.addRiver = this.addRiver.bind(this);
        this.reloadRiverList = this.reloadRiverList.bind(this);
    }

    componentDidMount() {
        this.reloadRiverList();
    }

    reloadRiverList() {
        ApiService.fetchRivers()
            .then((res) => {
                this.setState({rivers: res.data})
            });
    }

    deleteRiver(riverId) {
        ApiService.deleteRiver(riverId)
            .then(res => {
                this.setState({message : 'River deleted successfully.'});
                this.setState({rivers: this.state.rivers.filter(river => river.id !== riverId)});
            })
    }

    editRiver(id) {
        window.localStorage.setItem("riverId", id);
        this.props.history.push('/edit-river');
    }

    addRiver() {
        window.localStorage.removeItem("riverId");
        this.props.history.push('/add-river');
    }

    render() {
        return (
            <div>
                <Layout>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 border border-green-700 rounded ju"
                            onClick={() => this.addRiver()}> Add River
                    </button>
                </Layout>

                <table align="center" class="table-fixed content-center">
                    <thead>
                    <tr>

                        <th class="w-1/4">River Name</th>
                        <th class="w-1/4">River Length</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.rivers.map(
                            rivers =>
                                <tr key={rivers.id}>
                                    <td>{rivers.river_name}</td>
                                    <td>{rivers.river_length}</td>
                                    <td><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 border border-red-700 rounded" onClick={() => this.deleteRiver(rivers.id)}> Delete</button></td>
                                    <td><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => this.editRiver(rivers.id)}> Edit</button></td>

                                </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListRiverComponent;