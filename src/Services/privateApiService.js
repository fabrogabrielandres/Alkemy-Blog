import axios from 'axios';

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default Get