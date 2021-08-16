import { GET, POST } from "./privateApiService";
const URL = 'http://ongapi.alkemy.org/api/organization';

export const getOrganizationData = async () => {
  return await GET(URL);
}

// Recibe un objeto 'data' con la informacion a enviar.
export const postOrganizationData = async (data) => {
  return await POST(URL, data);
}