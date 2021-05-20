import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8081';

class ApiService {

    fetchRivers() {
        return axios.get(USER_API_BASE_URL + '/river');
    }

    fetchRiverById(riverId) {
        return axios.get(USER_API_BASE_URL + '/river/' + riverId);
    }

    deleteRiver(riverId) {
        return axios.delete(USER_API_BASE_URL + '/river/' + riverId);
    }

    addRiver(river) {
        return axios.post(""+USER_API_BASE_URL + '/rivers', river);
    }

    editRiver(river) {
        return axios.put(USER_API_BASE_URL + '/rivers', river);
    }

}

export default new ApiService();
