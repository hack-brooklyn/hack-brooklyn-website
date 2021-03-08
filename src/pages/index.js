import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';


import '../styles/scss/Reset.module.scss';
const IndexPage = () => {
    const [root_container, setRoot] = useState(null);
    // waiting for the document
    useEffect(() => {
        setRoot(document.getElementById('root'))
        // setRoot(true)
    }, []);
    // console.log(root)
    return <HomePage />
    // return (ReactDOM.render(<HomePage />, root_container));
}
// const root = get_root();
export default IndexPage