import React, { Component } from 'react'
import ApiService from "../service/ApiService";

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
                <h2 className="text-center">River Details</h2>
                <button className="btn btn-danger" onClick={() => this.addRiver()}> Add River</button>
                <table className="table table-striped">
                    <thead>
                    <tr>

                        <th>River Name</th>
                        <th>River Length</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.rivers.map(
                            rivers =>
                                <tr key={rivers.id}>
                                    <td>{rivers.river_name}</td>
                                    <td>{rivers.river_length}</td>
                                    <td><button className="btn btn-success" onClick={() => this.deleteRiver(rivers.id)}> Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => this.editRiver(rivers.id)}> Edit</button></td>

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