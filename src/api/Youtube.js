import axios from 'axios'

const KEY = 'AIzaSyA_jEsAeTpTuOCg1W1C4P_AJ2PQmh-mgx4';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3' ,
    params : {
        part: 'snippet',
        type: 'video',
        maxResults: 15,
        key:KEY
    }
})