import s from './CartHeader.module.scss';

const CartHeader = () => {
    return (  
        <header className={s.cart_header}>
            <div className={s.cart_header__title}><h4>Name</h4></div>
            <div className={s.cart_header__option}><h4>Options</h4></div>
            <div className={s.cart_header__count}><h4>Quantity</h4></div>
            <div className={s.cart_header__cost}><h4>Price</h4></div>
        </header>
    );
}
 
export default CartHeader;