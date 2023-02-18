// Import Swiper React components
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./swiper.css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Solicitar from "../Modal/Solicitar";

// import image header
const ImaSwiper = require.context("../../assets", true);

const SwiperNav = () => {

  // const solicitar = "https://quezada.do/divisas.html";
  // const whatsapp = "https://api.whatsapp.com/send/?phone=18095565111&text&app_absent=0";
  //Configuracion del Swiper Slider
  const params = {
    modules: [EffectFade, Autoplay],
    effect: "fade",
    spaceBetween: 0,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  };

  return (
    <Swiper {...params} className="Header_swipe">
      <div className="caja_"></div>
      <div className="container_button_swiper">
        <div className="container_item_swiper">
          <h1 className="item-title">Cambiar divisas fácil y rápido, online o en una de nuestras oficinas</h1>
          <p className="info"></p>

          
            {/* <a href={solicitar}>Solicitar Tasa <FcCurrencyExchange /></a>
            <a href={whatsapp}>Solicitar Tasa via WhatsApp <AiOutlineWhatsApp /></a> */}
            <Solicitar />
        </div>
      </div>
      <SwiperSlide className="quezada__principal image_header_swiper">
        <img src={ImaSwiper`./negocios1.webp`} alt="header" />
      </SwiperSlide>
      <SwiperSlide className="quezada__principal image_header_swiper">
        <img src={ImaSwiper`./quezada1.webp`} alt="header" />
      </SwiperSlide>
      <SwiperSlide className="quezada__principal image_header_swiper">
        <img src={ImaSwiper`./confianza1.webp`} alt="header" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperNav;
