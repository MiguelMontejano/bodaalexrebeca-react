import styles from './MasInfo.module.css';
import girlImg from '../../assets/svgs/girl.svg';
import boyImg from '../../assets/svgs/boy.svg';


export function MasInfo() {
    return (
        <div className={`w-12 pt-2 pb-4 flex flex-column align-items-center ${styles.masInfoContainer}`}>
            <div className={`${styles.sectionTitle} font-bold mt-2 mb-1`}>Mas Información</div>
            <h3 className={styles.ibanContainer}>ES05 2100 3548 5913 0045 7694</h3>
            <div className={`w-12 flex align-items-center gap-3 ${styles.cardsContainer}`}>
                <div className={`p-3 flex flex-column align-items-center justify-content-center gap-3 font-bold ${styles.contactCard}`}>
                    <div className='pt-2 flex flex-row align-items-center justify-content-center gap-3 font-bold'>
                        <img src={girlImg} className={`${styles.rebecaImg}`} alt='' />
                        <div className={`${styles.cardText}`}>Rebeca</div>
                    </div>
                    <div className={`${styles.phoneNumber}`}>+34 638 16 99 05</div>
                </div>
                <div className={`flex flex-column align-items-center justify-content-center gap-3 font-bold ${styles.contactCard}`}>
                    <div className='pt-2 flex flex-row align-items-center justify-content-center gap-3 font-bold'>
                        <img src={boyImg} className={`${styles.alexImg}`} alt='' />
                        <div className={`${styles.cardText}`}>Alex</div>
                    </div>
                    <div className={`${styles.phoneNumber}`}>+34 664 68 76 01</div>
                </div>
            </div>
        </div>
    )
}