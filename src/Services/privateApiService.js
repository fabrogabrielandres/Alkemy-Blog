// import axios from 'axios';

// Function que obtiene el token del localStorage.
const getLocalStorageToken = () => {
  return {
    headers: {
      'Authorization': localStorage.token ? `Bearer ${localStorage.token}` : '',
      "Content-Type": "application/json",
      'accept': 'application/json'
    }
  }
}

// Function que construye la URL.
const getURL = (URL, id) => {
  return `${URL}${id !== null ? '/' + String(id) : ''}`
}

// Function que realiza la peticion GET
export const privateApiGet = async (URL, id = null) => {
  try {
    const response = await axios.get(getURL(URL, id), getLocalStorageToken());
    return response;
  } catch (error) {
    return {
      msg: 'Error al realizar la peticion GET',
      error
    }
  }
}

/*
const config = {
    headers: {
        Group: 01                //Aqui va el ID del equipo!!
    }
}
*/
