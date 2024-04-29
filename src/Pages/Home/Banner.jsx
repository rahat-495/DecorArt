
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Button } from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Fade>

      <div className='flex flex-col gap-5 items-start my-20 px-8 justify-between lg:items-center overflow-hidden lg:flex-row '>

        <div className="flex-1 w-2/4 gap-3 flex flex-col md:gap-3 lg:gap-10">
          <h1 data-aos="fade-right" data-aos-duration="700" className='mon font-medium'>FEATURED AIM</h1>
          <p data-aos="fade-right" data-aos-duration="700" data-aos-delay="100" className="text-2xl leading-[40px] w-auto md:text-4xl md:leading-[55px] lg:w-[450px] lg:text-5xl lg:leading-[68px] mon">Discover Our Skilled Team Crafting Stunning Decor Art Pieces</p>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
            <Button className='mon w-fit btn border hover:text-gray-900 hover:bg-transparent  text-white'>Explore All</Button>
          </div>
        </div>

        <div className="w-[100%] lg:w-[60%]">
          <Swiper
          data-aos="fade-left" data-aos-duration="700" data-aos-delay="300"
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          pagination={false}
          spaceBetween={30}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img className='rounded-xl w-[600px] h-[120px] md:w-[600px] md:h-[350px] lg:w-[750px] lg:h-[450px]' src='https://img.freepik.com/premium-photo/row-vases-are-lined-up-wooden-table_865967-597218.jpg?size=626&ext=jpg' alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className='rounded-xl w-[600px] h-[120px] md:w-[600px] md:h-[350px] lg:w-[700px] lg:h-[450px] ' src="https://png.pngtree.com/background/20230612/original/pngtree-long-row-of-brown-pottery-wares-in-a-workshop-picture-image_3371995.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className='rounded-xl w-[600px] h-[120px] md:w-[600px] md:h-[350px] lg:w-[700px] lg:h-[450px] ' src="https://static.toiimg.com/photo/108252156.cms" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className='rounded-xl w-[600px] h-[120px] md:w-[600px] md:h-[350px] lg:w-[700px] lg:h-[450px] ' src="https://as2.ftcdn.net/v2/jpg/03/15/68/05/1000_F_315680531_ym2Xi2OOSXokDDM82z2LfJi0ftwGsXJg.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className='rounded-xl w-[600px] h-[120px] md:w-[600px] md:h-[350px] lg:w-[700px] lg:h-[450px] ' src='https://img.freepik.com/premium-photo/cropped-image-unrecognizable-pottery-woman-working-with-pottery-wheel-cozy-workshop-making-vase-mug-creative-people_115318-4110.jpg' alt="" />
          </SwiperSlide>

          </Swiper> 
        </div>

      </div>

    </Fade>
  );
};

export default Banner;
