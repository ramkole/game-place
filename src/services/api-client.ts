import axios from "axios";
export interface FetchResposne <T>{
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '57a2df3edc764061bd7032067707c2d0'
    }
})