import styles from './LugarCeremonia.module.css';

export function LugarCeremonia() {
    function openInNewTab(url) {
        window.open(url, '_blank').focus();
    } 

    return (
        <div className={`flex flex-column align-items-center my-4 pt-2 pb-4 gap-2 ${styles.lugarCeremoniaContainer}`}>
            <i className={`pi pi-map section-icon`}></i>
            <div className={`${styles.LugarText} font-bold`}>Lugar de la ceremonia</div>
            <div className={`${styles.FincaText}`}>Finca Prados Moros, Guadarrama</div>
            <div className={`${styles.HoraText}`}>17:30 p.m.</div>
            <div onClick={() => openInNewTab("https://goo.gl/maps/G6h8WogChinmm8TJ6")} className={`p-2 ${styles.verMapaContainer}`}>Ver en el mapa</div>
        </div>
    )
}