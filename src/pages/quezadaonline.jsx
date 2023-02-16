import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";

import Loading from "../components/pageLoading/Loading";

import NavBar from '../../src/components/navbar/NavBar';
import styles from "./styles_pages/styles_pages.module.css";

const Image_dispositivos = require.context("../../public/online_acq", true);

const Quezadaonline = () => {

    // State loadPage
const [load, setLoad] = useState('Load');

if(load === 'Load'){
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setLoad('false');
      }, 1500);
    }
  }
}

useEffect(() => {
  if (document.readyState === 'complete') {
    setTimeout(() => {
      setLoad('false');
    }, 1500);
  }
})
//END State loadPage


  return (
    <>
    <Loading load={load} />
      <Helmet>
        <title>Quezada Online</title>
        <meta name="description" content="Quienes somos" />
      </Helmet>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.header_online}>
          <div className={styles.container_header_online}>
            {/* Dispositivos */}
            <div className={styles.image_dispositivos}>
              <div className={styles.image_container_d}>
                <img src={Image_dispositivos`./android.png`} alt="android" />
              </div>
              <div className={styles.image_container_d}>
                <img src={Image_dispositivos`./iphone.png`} alt="iphone" />
              </div>
            </div>

            {/* info header online */}
            <div className={styles.info_header_online}>
              <h1>¡Bienvenidos a nuestra sucursal Online! </h1>
              <h2>¡DESCARGA NUESTRA APP!</h2>
              <p>
                Accede a nuestros servicios desde la comodida de tu smartphone
                con nuestra app disponible tanto en Android como en Iphone.
              </p>
              <div className={styles.header_download}>
                <img
                  src={Image_dispositivos`./google_play.png`}
                  alt="android_download"
                />
                <img
                  src={Image_dispositivos`./apple_store.png`}
                  alt="iphone_download"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.message_online}>
          <span>
            En la situación en la que nos encontramos actualmente a nivel
            mundial, nos hemos dado cuenta de la importancia de la tecnología.
            Como empresa innovadora les queremos dar a conocer nuestro nuevo
            proyecto, Quezada Online. ¡Le invitamos a ser parte!
          </span>
        </div> */}
        <br /><br /><br /><br />

        <br />
        <br />
        <br />
        <br />

        <div className={styles.sib_info}>
          <div className={styles.container_sib}>
          <div className={styles.info_sib}>
            <h2>¿Qué es Quezada Online?</h2>
            <p>
              ¡Ahora no tienes que salir de tu casa u oficina para hacer una
              operación con nosotros!
            </p>
            <p>
              Con tan solo con unos clicks en nuestra página web o app móvil
              puedes consultar las tasas, solicitar tasa preferencial y
              solicitar tu operación de cambio por transferencia, servicio a
              domicilio o en unas de nuestras sucursales. ¡Siempre con el mejor
              servicio!
            </p>
            <p>
              Hemos actualizado nuestra página web y creado una App móvil para
              que puedas comunicarte de manera más fácil con nosotros.
            </p>
          </div>

          <div className={styles.sib_image}>
          <div className={styles.about__player}>
              <iframe src="https://www.youtube.com/embed/gCNvvUsXh6g?controls=0" title="Quezada Agente de cambio" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          </div>
        </div>

        <br /><br /><br /><br />


        <div className={styles.forma}>
          <h3>Forma parte de Quezada Online</h3>

          <p>Solo le pedimos un minuto de su tiempo para dejarnos su información. Favor pulsar el butón para verificar sus datos.</p>

          <button>SER PARTE</button>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Quezadaonline;
