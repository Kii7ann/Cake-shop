import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"
import cake from './Cake.json'
import "swiper/css";

const Home = () => {
    const [Cakes, SetCakes] = useState(cake)
    return (
        <>
            <div className='container py-5' data-aos="fade-up" data-aos-duration="3000">
                <div className="row align-items-center my-5">
                    <div className="col-12 col-lg-6 mb-4">
                        <p className="abtext text-center text-lg-start">
                            Cakes, Pies<br />& Tarts
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 text-center d-flex justify-content-center">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 1 }
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="mt-5"
                        >
                            <SwiperSlide>
                                <img src="https://websitedemos.net/cake-shop-04/wp-content/uploads/sites/537/2020/03/product-03-free-img.png" className="img-fluid slider-img" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://websitedemos.net/cake-shop-04/wp-content/uploads/sites/537/2020/03/product-02-free-img.png" className="img-fluid slider-img" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://websitedemos.net/cake-shop-04/wp-content/uploads/sites/537/2020/03/product-01-free-img.png" className="img-fluid slider-img" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div >
            <div className='d-flex justify-content-center my-5' data-aos="fade-up" data-aos-duration="3000">
                <img src="https://websitedemos.net/cake-shop-04/wp-content/uploads/sites/537/2020/03/bg-02-free-img.jpg" className='img-fluid' />
            </div>
            <div className='container py-5' data-aos="fade-up" data-aos-duration="3000">
                <p className='abtext text-lg-start py-3'>Welcome!</p>
                <p className='abtext2 p-0 py-3'>Cake with love</p>
                <p className='abtext6 p-0 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur saepe quae nulla eligendi enim.</p>
                <Link to=''><button className='btn btn-outline-dark my-3' style={{ width: 130 }}>Read more</button></Link>
            </div>

            <div className='container'>
                <p className='abtext d-flex justify-content-center' data-aos="fade-up" data-aos-duration="3000">Our Cakes</p>
                <div className='row my-5 ps-4' data-aos="fade-up" data-aos-duration="3000">
                    {Cakes.map(value => (<div className="col-md-4 mb-4 my-3" key={value.id}>
                        <Link to=''><img src={value.image} /></Link>
                        <div className='mt-4'>
                            <p className='abtext4'>INR {value.price}</p>
                            <p className='abtext6'>{value.cake}</p>
                            <p className='abtext5'>{value.cake_description}</p>
                        </div>
                    </div>))}
                </div>
            </div>

            <div className='container py-5' data-aos="fade-up" data-aos-duration="3000">
                <div className='d-flex justify-content-center'>
                    <img src="https://websitedemos.net/cake-shop-04/wp-content/uploads/sites/537/2020/03/testimonial-02-free-img.jpg" className='home-img my-5' />
                </div>
                <p className='abtext5 my-5' align="center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur optio facere deserunt quisquam sunt illum non odit consequatur illo earum"</p>
            </div>
        </>
    )
}

export default Home
