import React from 'react'
import { useDevice } from '../../hooks/useDevice'
import sprite from "../../icons/sprite.svg"
import styles from "./TickerItem.module.css"


const TickerItem = ({ ticker, price, change, change_percent, }) => {

    const { isMobileDevice, isTabletAndDesktop } = useDevice()
    
    const isGrow = change > 0;

    return (
        <div className={isGrow ? styles.cardWrapper : styles.cardWrapperLoss}>
            {isMobileDevice && <>
                <h4 className={styles.name}>{ticker}</h4>
                <span>price: {price}</span>
                <div className={isGrow ? styles.changeWrapper : styles.changeWrapperLoss}>
                    <svg height={20} width={ 20}>
                        <use href={isGrow ? `${sprite}#icon-up` : `${sprite}#icon-down`}  />
                    </svg>
                    <span>{change_percent}</span>
                </div>
            </>}
            {isTabletAndDesktop && <>
                <div className={isGrow ? styles.changeWrapper : styles.changeWrapperLoss}>
                    <svg  height={20} width={ 20}>
                        <use href={isGrow ? `${sprite}#icon-up` : `${sprite}#icon-down`}/>
                    </svg>
                </div>
                <div>
                    <h4>{ticker}</h4>
                    <span>price: {price}</span>
                </div>
                <div>
                    <span>change:</span>

                    <span> {change}</span>
                    <span>: {change_percent}</span>
                    

                </div>
            </>}

        </div>
    );
};

export default TickerItem
