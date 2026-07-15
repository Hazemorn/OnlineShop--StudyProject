import s from "./Home.module.scss";
import Testimonial from "../../components/Testimonial/Testimonial";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Button from "../../components/Button/Button";
import HeroImg from "../../assets/shoes/shoeHero.png";

import { COMPANIES } from "../../store/homepageData";

const Homepage = () => {
  return (
    <>
      <div className={s.hero}>
        <section className={s.hero__wrapper}>
          <div className={s.hero__text}>
            <h1>Find Your Sole Mate with Us</h1>
            {/* <div className={`${s.hero__img} ${s.hero__img_mobile}`}>
                <img src={HeroImg} alt="heroImg" loading='lazy'/>
              </div> */}
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button title="Shop now" bgColor='var(--black)' color='var(--white)'/>
          </div>
          <div className={`${s.hero__img} ${s.hero__img_desktop}`}>
            <img src={HeroImg} alt="heroImg" loading="lazy" />
          </div>
        </section>
        <section className={s.companies}>
          <div className={s.companies__wrapper}>
            {COMPANIES.map((company) => {
              return (
                <div key={company.id} className={s.logo_companies__item}>
                  <img src={company.src} alt={company.name} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      {/* <Sector
         title="New Arrivals"
      >

      </Sector> */}
       {/* <Sector
           title="Top Selling"
      >

      </Sector> */}
      <GetInTouch/>

      {/* <div></div> */}
      <Testimonial />
    </>
  );
};

export default Homepage;
