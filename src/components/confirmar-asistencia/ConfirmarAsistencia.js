import { useEffect, useRef, useState } from 'react';
import styles from './ConfirmarAsistencia.module.css';

export function ConfirmarAsistencia() {
    const [formAccepted, setFormAccepted] = useState(false);

    const [nombreAccepted, setNombreAccepted] = useState(false);
    const nombreRef = useRef();

    const [intoleranciaAccepted, setIntoleranciaAccepted] = useState(false);
    const intoleranciaRef = useRef();

    const [alergiaAccepted, setAlergiaAccepted] = useState(false);
    const alergiaRef = useRef();

    useEffect(() => {
        setFormAccepted(nombreAccepted && intoleranciaAccepted && alergiaAccepted);
    }, [nombreAccepted, intoleranciaAccepted, alergiaAccepted])

    function validateForm(setNombreAccepted, setIntoleranciaAccepted, setAlergiaAccepted) {
        if(nombreRef.current.value.length > 10)  setNombreAccepted(true);
        else setNombreAccepted(false)

        if (intoleranciaRef.current.value.length > 4) setIntoleranciaAccepted(true);
        else setIntoleranciaAccepted(false);
        
        if (alergiaRef.current.value.length > 4) setAlergiaAccepted(true);
        else setAlergiaAccepted(false);
    }

    function submitForm(e) {
        if(formAccepted !== true) e.preventDefault();
    }

    return (
        <div className="flex flex-column align-items-center">
            <div className={`${styles.sectionTitle} font-bold`}>¡Confirma tu asistencia!</div>
            <form onSubmit={submitForm} onChange={() => validateForm(setNombreAccepted, setIntoleranciaAccepted, setAlergiaAccepted)} className={`flex flex-column align-items-center`} action="">
                <label className={`w-12 text-left font-bold ${styles.formLabel}`} for="fnombre">Nombre y Apellidos:</label>
                <input ref={nombreRef} className={`w-12 ${styles.formInput}`} type="text" id="idName" name="name" />
                <label className={`w-12 text-left font-bold ${styles.formLabel}`} for="fintolerancias">¿Presentas alguna alergia alimenticia?:</label>
                <input ref={intoleranciaRef} className={`w-12 ${styles.formInput}`} type="text" id="idIntolerancia" name="intolerancia" />
                <label className={`w-12 text-left font-bold ${styles.formLabel}`} for="falergias">¿Presentas alguna intolerancia alimenticia?:</label>
                <input ref={alergiaRef} className={`w-12 ${styles.formInput}`} type="text" id="idIntolerancia" name="intolerancia" />
                <input className={`mt-4 ${styles.formSubmit} ${(formAccepted === false)?`${styles.formSubmitDisabled}`:''}`} type="submit" value="Enviar" />
            </form>
        </div>
    )
}