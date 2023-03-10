import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import tw from "tailwind-styled-components";
import styled from "styled-components";

function TabPhoto() {
  return (
    <div>
      <span className="text-xl sm:text-2xl font-extrabold">TAB μ¬μ§μ²© π·</span>
      <Swiper
        className="mt-5 rounded-3xl bg-[#F3F3F3]"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="h-96 object-contain" src="TabAlbum/2022μ¬λ¦μ ν°.jpg"></img>
          
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-96 object-contain" src="TabAlbum/μ ν°.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-96 object-contain" src="TabAlbum/κ΅¬λ₯μ λ€μ¬μ§.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-96 object-contain" src="TabAlbum/μλλ‘μ΄λμ λ€μ¬μ§.jpg"></img>
        </SwiperSlide>
      </Swiper>
      <div className="grid bg-[#F3F3F3] rounded-3xl	 p-5 mt-5">
        <span className="sm:ml-3 text-xs sm:text-base">
          π TAB ννμλ€κ³Ό μμ§ λͺ»ν  νΉλ³ν μΆμ΅μ λ§λ€μ΄κ°μ!
        </span>
      </div>
    </div>
  );
}

export default TabPhoto;
