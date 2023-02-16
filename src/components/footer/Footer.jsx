import React from "react";

// styles css
import "../../components/footer/footer.css";
import ima_sello from '../../assets/sello.png'


// icons Redes
import {FaFacebookF,FaLocationArrow, FaLinkedinIn, FaPhoneSquareAlt, FaWhatsapp} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {MdOutlineMail} from 'react-icons/md';

const Footer = () => {
  return (
    <>
  {
    <script>
      alert('Hola');
    </script>
  }
      <footer className="footer">
        <div className="container_footer">
          {/* contacto */}
          <div className="footer_logo">
            <h2>QUEZADA</h2>
            <p>
              Con nosotros, nuestro servicio de cambio a dólar, euro y peso es
              mas rápido y fácil que nunca! Contáctenos o pasa por nuestros
              sucursales.
            </p>
          </div>

          {/* Icons redes */}
          <div className="footer_redes">
            <ul className="footer_list">
                <li><a href="/#" className="facebook"><FaFacebookF /></a></li>
                <li><a href="/#" className="linkedin"><FaLinkedinIn /></a></li>
                <li><a href="/#" className="instagram"><BsInstagram /></a></li>
            </ul>
          </div>

          {/* Logotipo footer */}
          <div className="footer_contact">
          <div className="footer_sucursal">
                <h3>Ubicaciones</h3>
                <span><a href="/#">LA ROMANA</a>&nbsp; &nbsp;  <FaLocationArrow /></span>
                <span><a href="/#">FRIUSA</a>&nbsp; &nbsp;  <FaLocationArrow /></span>
                <span><a href="/#">SANTO DOMINGO</a>&nbsp; &nbsp;  <FaLocationArrow /></span>
                <span><a href="/#">HIGÜEY</a>&nbsp; &nbsp;  <FaLocationArrow /></span>
                <span><a href="/#">DOWN TOWN</a>&nbsp; &nbsp;  <FaLocationArrow /></span>
            </div>


            <div className="Contacto">
                <h3>Contacto</h3>
                <span>Oficina Principal  &nbsp; <FaPhoneSquareAlt />:  809 556 2702</span>
                <span>Mesa de Divisas  &nbsp; <FaWhatsapp />: 809 556 5111</span>
                <span>Oficinas Bávaro y Punta Cana &nbsp; <FaPhoneSquareAlt />: 809 552 1517</span>
                <span>E-Mail  &nbsp; <MdOutlineMail />: @agentedecambioquezada.com</span>
            </div>
            
            <div className="certification">
                <div className="image_footer">
                    <img className="image_footer" src={ima_sello} alt="SIB" />
                </div>
                <div className="rnc">
                    <span>RNC: 1-12-10601-2</span>
                    <span>No. de registro <br /> SIB: Z1-093-1-00-1201</span>
                </div>
            </div>
          </div>
        </div>
        <div className="copyritgh">
            <span>Copyright ©  Agentes de Cambio Quezada 2022</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
