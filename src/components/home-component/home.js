import Countdown from 'react-countdown';
import styles from './home.module.css'

export function Home() {
    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if(completed) {

        } else {
            return (
                <div className={`w-full flex flex-row align-items-center justify-content-center gap-5 ${styles.countDownContainer}`}>
                    <div className={`flex flex-column align-items-center`}><div className={`flex flex-row align-items-center justify-content-center ${styles.countDownNumbersContainer}`}>{days}</div> <div>dias</div></div>
                    <div className={`flex flex-column align-items-center`}><div className={`flex flex-row align-items-center justify-content-center ${styles.countDownNumbersContainer}`}>{hours}</div> <div>horas</div></div>
                    <div className={`flex flex-column align-items-center`}><div className={`flex flex-row align-items-center justify-content-center ${styles.countDownNumbersContainer}`}>{minutes}</div> <div>minutos</div></div>
                    <div className={`flex flex-column align-items-center`}><div className={`flex flex-row align-items-center justify-content-center ${styles.countDownNumbersContainer}`}>{seconds}</div> <div>segundos</div></div>
                </div>
            )
        }
    }

    return (
        <div className={`pt-3 font-bold ${styles.homeContainer}`}>
            <Countdown date={new Date("2023/09/15 16:00:00")} renderer={renderer}/>
        </div>
    )
}