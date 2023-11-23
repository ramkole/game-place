import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResposne } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery<FetchResposne<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResposne<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    // initialData: genresData save in const and use fixed Data
  });

export default usePlatform;
