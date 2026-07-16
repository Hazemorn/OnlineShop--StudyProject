import s from './CardItem.module.scss';

interface itemProps {
    title: string;
    src: string;
    price: number;
}

const CardItem = ({title, src, price}: itemProps) => {

    return (
    <div className={s.cardItem}>
        <div className={s.cardItem__wrapper}>
            <div className={s.cardItem__img}>
                <img src={src} alt={src} loading='lazy'/>
            </div>
            <div className={s.cardItem__text}>
                <h4>{title}</h4>
                {/* <div className={s.cardItem__rate}></div> */}
                <div className={s.cardTem__price}>$ {price}</div>
            </div>
        </div>
    </div> );
}
 
export default CardItem;