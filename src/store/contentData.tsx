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
  imageUrl: string;
  title: string;
  //rate: number;//will be added
  price: number;
  //discount: number;will be added
}

export const GOODS: Good[] = [
  {
    id: 1,
    imageUrl: shoe1Img,
    title: "Formal shoe",
    //rate: 4.8,
    price: 150,
    //discount: 0
  },
  {
    id: 2,
    imageUrl: shoe2Img,
    title: "Sneakers shoe",
    //rate: 5,
    price: 250,
    //discount: 0
  },
  {
    id: 3,
    imageUrl: shoe3Img,
    title: "Sneakers S.",
    //rate: 4.7,
    price: 100,
    //discount: 0
  },
  {
    id: 4,
    imageUrl: shoe4Img,
    title: "Le Sneakers",
    //rate: 5,
    price: 120,
    //discount: 0 
  }
]

interface Size {
  id: number;
  size: number;
  available: boolean;
}

export const SIZES: Size[] = [
  {
    id: 1,
    size: 36,
    available: false,
  },
  {
    id: 2,
    size: 37,
    available: true,
  },
  {
    id: 3,
    size: 38,
    available: true,
  },
  {
    id: 4,
    size: 39,
    available: true,
  },
  {
    id: 5,
    size: 40,
    available: true,
  },
  {
    id: 6,
    size: 41,
    available: true,
  },
  {
    id: 7,
    size: 42,
    available: true,
  },
  {
    id: 8,
    size: 43,
    available: true,
  },
  {
    id: 9,
    size: 44,
    available: true,
  },
  {
    id: 10,
    size: 45,
    available: false,
  }

]

interface Colour {
  id: number;
  colour: string;
  available: boolean;
}

export const COLOURS: Colour[] = [
  {
    id: 1,
    colour: 'var(--white)',
    available: false,
  },
  {
    id: 2,
    colour: 'var(--black)',
    available: true,
  },
  {
    id: 3,
    colour: 'var(--beige)',
    available: true,
  },
  {
    id: 4,
    colour: 'var(--brown)',
    available: true,
  },
  {
    id: 5,
    colour: 'var(--grey)',
    available: true,
  }
]


interface Option {
  id: number;
  name: string;
  value: string;
}

export const OPTIONS: Option[] = [
  {
    id: 1,
    name: 'Cheap first',
    value: 'asc',
  },
  {
    id: 2,
    name: 'Expensive first',
    value: 'desc',
  }
]


interface Sex {
  id: number;
  name: string;
}

export const SEXES: Sex[] = [
  {
    id: 1,
    name: 'both',
  },
  {
    id: 2,
    name: 'male',
  },
  {
    id: 3,
    name: 'female',
  }

]