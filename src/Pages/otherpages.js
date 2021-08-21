import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import LogoImg from '../Images/image.png'
import BannerImg from '../Images/bg.JPG'
import Products from '../Components/products'
import Levels from '../Components/levels'
import WebPageManagement from '../Components/webpage'
import Tables from '../Components/table'
import Timing from '../Components/timing'
const Otherpages = () => {
    return (
        <>
            <Container fluid>

                <div className="logo">
                    <img src={LogoImg}></img>
                </div>
                <Container className="banner-img">
                    <img src={BannerImg}></img>
                </Container>
                <Products />
                <Levels />
                <WebPageManagement />
                <Tables />
                <Timing />
            </Container>
        </>
    );
}

export default Otherpages;