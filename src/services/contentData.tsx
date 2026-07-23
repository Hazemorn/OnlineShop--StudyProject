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
    "id": 1,
    "title": "Sneakers Black Edition",
    "price": 100,
    //"size": [38, 39, 40, 41, 42, 43, 44, 45],
    //"rate": 4.8,
   // "sex": "male",
    //"color": "black",
    "imageUrl": "https://air-shop.by/image/cache/catalog/IMG38206111zon-1774711417-1000x1000.png"
  
  },
  {
    "id": 2,
    "title": "Nike Air Max 270",
    "price": 150,
    // "size": [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    // "rate": 5,
    // "sex": "male",
    // "color": "grey",
    "imageUrl": "https://slamdunk.shop/wp-content/uploads/2025/09/air-max-270-futura-ao1569-004.webp"
  },
  {
    "id": 3,
    "title": "Nike Air Max 277",
    "price": 190,
    // "size": [36, 37, 38, 39, 40, 41, 42, 43],
    // "rate": 5,
    // "sex": "male",
    // "color": "white",
    "imageUrl": "https://cdn-img.thepoizon.ru/pro-img/cut-img/20250611/96da271a7f3e429c93d0673f5b0c6272.jpg?x-oss-process=image/resize,s_720/format,webp"
  
  },
  {
   "id": 4,
    "title": "Puma X Aka Boku Future Rider",
    "price": 250,
    // "size": [39, 40, 41, 42, 43, 44, 45],
    // "rate": 4,
    // "sex": "male",
    // "color": "beige",
    "imageUrl": "https://sneaker-head.by/uploads/Goods/5559/GnL0zUwS5HwtSfj4L40q.jpg"
 
  }
]

interface Size {
  id: number;
  size: number;
  value: string;
}

export const SIZES: Size[] = [
  {
    id: 1,
    size: 36,
    value: '36',
  },
  {
    id: 2,
    size: 37,
    value: '37',
  },
  {
    id: 3,
    size: 38,
    value: '38',
  },
  {
    id: 4,
    size: 39,
    value: '39',
  },
  {
    id: 5,
    size: 40,
    value: '40',
  },
  {
    id: 6,
    size: 41,
    value: '41',
  },
  {
    id: 7,
    size: 42,
    value: '42',
  },
  {
    id: 8,
    size: 43,
    value: '43',
  },
  {
    id: 9,
    size: 44,
    value: '44',
  },
  {
    id: 10,
    size: 45,
    value: '45',
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

type Option = {
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