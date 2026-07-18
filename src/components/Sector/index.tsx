import s from './Sector.module.scss';

interface Sector {
    id?: string;
    title?: string;
    body: React.ReactNode;
}


const Sector = ({ id, title, body}: Sector) => {
    return (
         <>
        <section className={s.sections} id={id}>
            <div className={s.sections__wrapper}>
                <div className={s.sections__top}>
                    <h2>{title}</h2>
                </div>
                <div className={s.sections__body}>{body}</div>
            </div>
        </section>
    </> 
    );
}
 
export default Sector;