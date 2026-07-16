import s from "./Home.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Sector from "../../components/Sector/Sector";
import Button from "../../components/Button/Button";

import HeroImg from "../../assets/shoes/shoeHero.png";
import ArrowLeftImg from "../../assets/icons/arrowLeft.svg";
import ArrowRightImg from "../../assets/icons/arrowRight.svg";

import { COMPANIES, GOODS, CUSTOMERS } from "../../store/homepageData";
import CardItem from "../../components/CardItem/CardItem";
import CardReview from "../../components/CardReview/CardReview";

const Homepage = () => {
  const navigate = useNavigate();
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  return (
    <>
      <div className={s.hero}>
        <section className={s.hero__wrapper}>
          <div className={s.hero__text}>
            <h1>Find Your Sole Mate with Us</h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button
              title="Shop now"
              bgColor="var(--black)"
              color="var(--white)"
              onClick={() => navigate("/catalog")}
            />
          </div>
          <div className={`${s.hero__img}`}>
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
      <Sector
        title="Top Selling"
        body={
          <div className={s.topSelling}>
            <div className={s.topSelling__content}>
              {GOODS.map((item) => (
                <CardItem
                  key={item.id}
                  title={item.title}
                  src={item.src}
                  price={item.price}
                />
              ))}
            </div>
            <div className={s.topSelling__btn}>
              <Button title="View all" onClick={() => navigate("/catalog")} />
            </div>
          </div>
        }
      />
      <GetInTouch />
      <Sector
        title="Client Testimonial"
        id="reviews"
        body={
          <div className={s.swiper_reviews}>
            <div className={s.swiper_reviews__wrapper}>
              <Swiper
                loop={true}
                modules={[Pagination]}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                centeredSlides={true}
                pagination={{
                  el: `.${s.controls__customPagination}`,
                  clickable: true,
                }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
              >
                {CUSTOMERS.map((c) => (
                  <SwiperSlide key={c.id}>
                    <CardReview name={c.name} text={c.text} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={s.controls}>
              <div className={s.controls__wrapper}>
                <button
                  className={`${s.navBtn} ${s.customPrev}`}
                  onClick={() => swiperInstance?.slidePrev()}
                  type="button"
                >
                  <img src={ArrowLeftImg} alt="Previous slide" loading="lazy" />
                </button>

                <button
                  className={`${s.navBtn} ${s.customNext}`}
                  onClick={() => swiperInstance?.slideNext()}
                  type="button"
                >
                  <img src={ArrowRightImg} alt="Next slide" loading="lazy" />
                </button>
              </div>
            </div>
          </div>
        }
      />

    </>
  );
};

export default Homepage;
