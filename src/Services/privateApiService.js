// import axios from 'axios';

const getLocalStorageToken = () => {
  return {
    headers: {
      'Authorization': localStorage.token ? `Bearer ${localStorage.token}` : ''
    }
  }
}

// Dejo comentado porque tengo que seguir construyendo esta funcion 
// en mi proximo ticket
export const Get = () => {
  console.log(getLocalStorageToken());
  /*
  axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  */
}

/*
const config = {
  headers: {
    Group: 01                //Aqui va el ID del equipo!!
  }
}
*/