import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FetchResposne } from '../services/api-client';

export interface Genre {
  id: number,
  name: string,
  image_background: string
}


const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResposne<Genre>>('/genres')
  .then(res => res.data),
  staleTime: 24*60*60*1000, //24hrs
  // initialData: genresData save in const and use fixed Data
})

export default useGenres