import styles from './ConfirmarAsistencia.module.css';

export function ConfirmarAsistencia() {

    function openInNewTab(url) {
        window.open(url, '_blank').focus();
    } 

    return (
        <div className="flex flex-column align-items-center">
            <div className={`${styles.sectionTitle} font-bold`}>¡Confirma tu asistencia!</div>
            <div className={`${styles.sectionText} w-10 text-center mt-3`}>Por favor, confirma tu asistencia a través del formulario que encontrará clicando en el siguiente botón (el formulario debe ser rellenado de manera individual).</div>
            <div onClick={() => openInNewTab("https://forms.gle/NespDUJPVA2SP2oY8")} className={`${styles.formBtn}`}>Confirma tu asistencia</div>
        </div>
    )
}