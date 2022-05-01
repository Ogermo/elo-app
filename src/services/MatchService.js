import axios from 'axios'

const DOWNLOAD_REST_API_URL = 'http://localhost:8080/api/match/download';
const CALCULATE_REST_API_URL = 'http://localhost:8080/api/match/calculate';

class MatchService {

    calculate(){
        return axios.get(CALCULATE_REST_API_URL)
    }

    download(){
        return axios.get(DOWNLOAD_REST_API_URL);
    }
}

export default new MatchService();