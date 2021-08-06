import axios from 'axios';

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
export const GET = async (URL, id = null) => {
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

// Function que realiza la peticion POST, data es el objeto a enviar en el BODY del request
export const POST = async (URL, data) => {
  try {
    const response = await axios.post(URL, data, getLocalStorageToken());
    return response;
  } catch (error) {
    return {
      msg: 'Error al realizar la peticion POST',
      error
    }
  }
}

// Function que realiza la peticion PUT. Recibe data que es el objeto a enviar en el BODY del request.
export const PUT = async (URL, id = null, data) => {
  try {
    const response = await axios.put(getURL(URL, id), data, getLocalStorageToken());
    return response;
  } catch (error) {
    return {
      msg: id === null ? 'Debe proporcionar un ID valido' : 'Error al realizar la peticion PUT',
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
