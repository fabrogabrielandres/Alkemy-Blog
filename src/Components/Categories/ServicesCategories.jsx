import { DELETE, GET, POST, PUT } from "../../Services/privateApiService"

const urlBase = 'http://ongapi.alkemy.org/api/categories'

export const getCategories = async (id) => {
  const getData = await GET(urlBase, id)
  return getData;
}

export const createCategory = async (values) => {
  const postData = await POST(urlBase, values);
  return postData;
}

export const editCategory = async (id, values) => {
  const putData = await PUT(urlBase, id, values);
  return putData;
}

export const deleteCategory = async (id) => {
  const deleteData = await DELETE(urlBase, id);
  return deleteData;
}