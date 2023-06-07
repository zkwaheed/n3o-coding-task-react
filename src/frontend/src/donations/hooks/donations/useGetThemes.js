import {useQuery} from 'react-query';
import { fetchWrapper } from '../../api/restApi';
import { API_BASE_URL, GET_DONTAION_THEMES_ENDPOINT } from '../../constants';
  
export const useGetThemese = () => {

  return useQuery(
    ['themes'],
    () => fetchWrapper('GET', `${API_BASE_URL}${GET_DONTAION_THEMES_ENDPOINT}`),
  );
}