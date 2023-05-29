import { Carousel } from "react-responsive-carousel";
import juntosGrecia from '../../assets/imgs/juntos/apaisada_grecia.PNG';
import marApaisada from '../../assets/imgs/juntos/mar-apaisada-edit.jpg';
import skyApaisada from '../../assets/imgs/juntos/sky-apaisada-edit.jpg';
import blancoApaisada from '../../assets/imgs/juntos/blanco-apaisada-edit.jpg';
import besoApaisada from '../../assets/imgs/juntos/beso-apaisada-edit.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from './Galeria.module.css'
import './galeria.css';

export function Galeria() {
/*     function onChange() {
        console.log('');
    }

    function onClickItem() {
        console.log('');
    }

    function onClickThumb() {
        console.log('');
    } */

    return (
        <div className="flex flex-column align-items-center my-4">
            <div className={`${styles.sectionTitle} font-bold mb-5`}>Galeria</div>
            <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} width={"75%"}>
                <div>
                    <img className={`${styles.carouselFoto}`} alt="" src={juntosGrecia} />
                    <p className={`legend ${styles.legendCarousel}`}>"Tu corazón es libre, ten el valor de hacerle caso."</p>
                </div>
                <div>
                    <img className={`${styles.carouselFoto}`} alt="" src={marApaisada} />
                    <p className={`legend ${styles.legendCarousel}`}>"Lo que hacemos en la vida, tiene su eco en la eternidad."</p>
                </div>
                <div>
                    <img className={`${styles.carouselFoto}`} alt="" src={skyApaisada} />
                    <p className={`legend ${styles.legendCarousel}`}>"Preferiría compartir una vida contigo que enfrentar todas las edades de este mundo sola."</p>
                </div>
                <div>
                    <img className={`${styles.carouselFoto}`} alt="" src={blancoApaisada} />
                    <p className={`legend ${styles.legendCarousel}`}>"Cuando estoy cerca de ti, mi mente ya no es mía."</p>
                </div>
                <div>
                    <img className={`${styles.carouselFoto}`} alt="" src={besoApaisada} />
                    <p className={`legend ${styles.legendCarousel}`}>"Hay otras maneras de volar, no solo con escobas mágicas."</p>
                </div>
            </Carousel>
        </div>
    )
}