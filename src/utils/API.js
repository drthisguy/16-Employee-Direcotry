import axios from 'axios';

export default {
    getDirectory: ()=> axios.get("https://randomuser.me/api/?results=150"),
}