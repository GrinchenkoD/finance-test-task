import React from 'react'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import tickersOperations from "../../redux/tickers/tickers-operations";
import Container from '../../components/Container/Container'
import TickerList from '../../components/TickersList/TickerList';


const Finance = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tickersOperations.getTickers());
    }, [dispatch]);
    return (
        <Container>
            <TickerList/>
        </Container>
    );
};

export default Finance
