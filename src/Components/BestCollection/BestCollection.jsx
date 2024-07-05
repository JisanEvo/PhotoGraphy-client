import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Styles.css'
import b1 from'../../../public/Documents/b1.jpg'
import b2 from'../../../public/Documents/b2.jpg'
import b3 from'../../../public/Documents/b3.jpg'
import b4 from'../../../public/Documents/b4.jpg'
// import b4 from'../../../public/Documents/b4.webp'
const BestCollection = () => {
    return (
        <div>
            <div>
                <h1 className='text-xl font-bold text-center'>Best Collection in this Month</h1>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={b1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={b4}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={b3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={b2} />
                </SwiperSlide>
            </Swiper>


        </div >
    );
};

export default BestCollection;