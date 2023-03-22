import styles from './header.module.css';

export function Header() {
    return (
        <div className={`w-full h-3rem flex flex-row align-items-center justify-content-center gap-3 text-3xl ${styles.headerContainer}`}>
            <div>Formulario</div>
            <div>Sobre Nosotros</div>
            <div>Detalles</div>
        </div>
    )
}