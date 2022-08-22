import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ textAlign: "center", marginBottom: 10}}>
            Made with 😎 by{" "}
            <a href="https://www.youtube.com/roadsidercoder"
            style={{ cursor: "pointer"}}
            >
                Toshal Lubana
            </a>
        </div>
    )
}
export default Footer;