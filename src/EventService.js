import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://mysample.firebaseio.com',
    withCredentials: false,
    headers : {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        crossDomain: true
    }
})

export default {
    getEvents() {
        return apiClient.get('/events.json')
    },

    getEvent(id) {
        return apiClient.get('/events/'+id+'.json')
    },

    getData(response) {
        return response.data
    }
}
