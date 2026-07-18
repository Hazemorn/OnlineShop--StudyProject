import s from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return ( 
    <div className={s.root}>
        <h2>
            Opps...
            <br/>
            The page is not found
        </h2>
        <h4>This page is not created yet. Please try again</h4>
    </div> );
}
 
export default NotFoundBlock;