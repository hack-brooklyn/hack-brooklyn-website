import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';


import '../styles/scss/Reset.module.scss';
const IndexPage = () => {

    if (typeof document !== 'undefined') {
        const root_document = document.getElementById('__next');
        console.log("Log 1")
        return (ReactDOM.render(<HomePage />, root_document));
    };

    return <HomePage />

}
// const root = get_root();
export default IndexPage