import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Item } from "../store/types/types";

const apiURL = import.meta.env.VITE_API_URL;
const limit = 8;

interface FetchFilterParams {
    page: number;
    sort?: string;
    searchValue?: string;
    size?: number | null;
    color?: string | null;
    sex?: string;
  }
  
export default class FilterService {
  static getFilteredProducts({
    page,
    sort,
    searchValue,
    size,
    color,
    sex
  }: FetchFilterParams): Promise<AxiosResponse<Item[]>> {
    const sortQuery = sort ? `&sortBy=price&order=${sort}` : "";
    const searchQuery = searchValue ? `&search=${searchValue}` : "";
    const sizeQuery = size ? `&size=${size}` : "";
    const colorQuery = color ? `&color=${color}` : "";
    const sexQuery = sex && sex !== 'both' ? `&sex=${sex}` : ""; 
  
    const url = `${apiURL}?page=${page}&limit=${limit}${sortQuery}${searchQuery}${sizeQuery}${colorQuery}${sexQuery}`;
    return axios.get(url);
  }
}

