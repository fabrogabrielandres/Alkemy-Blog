import { GET } from "./privateApiService";
const URL = 'http://ongapi.alkemy.org/api/organization';

export const getOrganizationData = async () => {
  return await GET(URL);
}