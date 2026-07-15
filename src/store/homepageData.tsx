import AjioImg from '../assets/brands/ajio.svg';
import AmazonImg from '../assets/brands/amazon.svg';
import EbayImg from '../assets/brands/amazon.svg';
import LacosteImg from '../assets/brands/lacoste.svg';
import LevisImg from '../assets/brands/levis.svg';

interface Company {
    id: number;
    name: string;
    src: string;
  }
  
export const COMPANIES: Company[] = [
    { id: 1, name: "Amazon", src: AmazonImg },
    { id: 2, name: "AJIO", src: AjioImg },
    { id: 3, name: "ebay", src: EbayImg },
    { id: 4, name: "lacoste", src: LacosteImg },
    { id: 5, name: "Netflix", src: LevisImg },
];