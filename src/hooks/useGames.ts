import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient from '../services/api-client';
import { FetchResposne } from '../services/api-client';

export interface Platform {
  id: number,
  name: string,
  slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: { platform: Platform } []
    metacritic: number
  }
  

const useGames = (gameQuery: GameQuery | null) =>  useQuery<FetchResposne<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClient.get<FetchResposne<Game>>('/games',
   {params: {
     genres: gameQuery?.genre?.id, 
     parent_platforms: gameQuery?.platform?.id, 
     ordering: gameQuery?.sortOrder,
     search: gameQuery?.searchText
   }}).then(res => res.data),
   staleTime: 24 * 60 * 60 * 1000, //24hrs

})

export default useGames