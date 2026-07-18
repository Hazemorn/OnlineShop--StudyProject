import s from "./CardItem.module.scss";

interface itemProps {
  title: string;
  imageUrl: string;
  price: number;
}

const CardItem = ({ title, imageUrl, price }: itemProps) => {
  return (
    <div className={s.cardItem}>
      <div className={s.cardItem__wrapper}>
        <div className={s.cardItem__img}>
          <img src={imageUrl} alt={imageUrl} loading="lazy" />
        </div>
        <div className={s.cardItem__bottom}>
          <div className={s.cardItem__text}>
            <h4>{title}</h4>
            {/* <div className={s.cardItem__rate}></div> */}
            <div className={s.cardItem__price}>$ {price}</div>
          </div>
          <button> + Add </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
