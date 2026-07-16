import s from './CardReview.module.scss';

interface reviewProps {
    name: string;
    //rate: number;//will be added
    text: string;
}

const CardReview = ({name, text}: reviewProps) => {
    return (
        <div className={s.cardReview}>
        <div className={s.cardReview__wrapper}>
            {/* <div className={s.cardReview__rate}></div> */}
            <div className={s.cardReview__name}>
                <h3>{name}</h3>
            </div>
            <div className={s.cardReview__text}>
               <p>{text}</p>
            </div>
        </div>
    </div>);
}
 
export default CardReview;