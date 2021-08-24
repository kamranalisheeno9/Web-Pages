import React, { useState } from 'react';
import './webpage.css'
import { Container, Button } from 'react-bootstrap';
import LogoImg from '../Images/image.png'
import BannerImg from '../Images/bg.JPG'
const Webpage = () => {
    const [search, setSearch] = useState("")
    const SearchFunc = (e) => {
        setSearch(e.target.value)
    }
    return (
        <Container className="web-page-container">
              <div className="logo">
                    <img src={LogoImg}></img>
                </div>
                <Container className="banner-img">
                    <img src={BannerImg}></img>
                </Container>
                <p className="definition-username">definition for username </p>
            <div className="web-page-inner-container">
                <h4 className="Web-page-header">personal App/ web page management</h4>
                <div className="buttons">

                    <Button className="btn-application">
                        Application
                    </Button>
                    <Button className="btn-url">
                        URL
                    </Button>
                </div>



            </div>
            <Container className="search-line">

                <p >Search Line : <input type="text" value={search} onChange={(e) => SearchFunc(e)} /></p>

            </Container>

        </Container>

    );
}

export default Webpage;