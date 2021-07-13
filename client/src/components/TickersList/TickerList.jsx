import React from 'react'
import { useSelector } from 'react-redux'
import tickersSelectors from '../../redux/tickers/tickers-selectors'
import TickerItem from '../TickerItem/TickerItem'




const TickerList = () => {

    const tickers = useSelector(tickersSelectors.actualTickersSelector)

    console.log(tickers)
    return (
        <div>
            {tickers && tickers.map(ticker => <TickerItem
                key={ticker.ticker }
            {...ticker}
            />)}
            
        </div>
    )
}

export default TickerList
