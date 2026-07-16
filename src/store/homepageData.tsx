import AjioImg from '../assets/brands/ajio.svg';
import AmazonImg from '../assets/brands/amazon.svg';
import EbayImg from '../assets/brands/amazon.svg';
import LacosteImg from '../assets/brands/lacoste.svg';
import LevisImg from '../assets/brands/levis.svg';

import shoe1Img from '../assets/data/shoe1.png';
import shoe2Img from '../assets/data/shoe2.png';
import shoe3Img from '../assets/data/shoe3.png';
import shoe4Img from '../assets/data/shoe4.png';

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


//Reviews/ Tesimonial
interface Customer {
  id: number;
  name: string;
  rate: number;
  text: string;
}

export const CUSTOMERS: Customer[] = [
  {
    id: 1,
    name: "John S.",
    rate: 5,
    text: "I'm blown away by the quality and style of the shoes I received from Shoe Shop. From casual wear to elegant shoe, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Sarah M.",
    rate: 4.8,
    text: "Finding shoes that align with my personal style used to be a challenge until I discovered Shop. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 3,
    name: "Michael B.",
    rate: 4.9,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shoe Shop. The selection of shoes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 4,
    name: "Emily L.",
    rate: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop. The selection of shoes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 5,
    name: "Meythli O.",
    rate: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shoe Shop. The selection of shoes is not only diverse but also on-point with the latest trends.",
  }
]
//Reviews/ Tesimonial end

interface Good {
  id: number;
  src: string;
  title: string;
  //rate: number;//will be added
  price: number;
  //discount: number;will be added
}

export const GOODS: Good[] = [
  {
    id: 1,
    src: shoe1Img,
    title: "Formal shoe",
    //rate: 4.8,
    price: 150,
    //discount: 0
  },
  {
    id: 2,
    src: shoe2Img,
    title: "Sneakers shoe",
    //rate: 5,
    price: 250,
    //discount: 0
  },
  {
    id: 3,
    src: shoe3Img,
    title: "Sneakers S.",
    //rate: 4.7,
    price: 100,
    //discount: 0
  },
  {
    id: 4,
    src: shoe4Img,
    title: "Le Sneakers",
    //rate: 5,
    price: 120,
    //discount: 0 
  }
]