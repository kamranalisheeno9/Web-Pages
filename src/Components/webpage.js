import React, { useState } from 'react';
import './webpage.css'
import { Container, Form, Button } from 'react-bootstrap';

const Webpage = () => {
    const [search, setSearch] = useState("")
    const SearchFunc = (e) => {
        setSearch(e.target.value)
    }
    return (
        <Container className="web-page-container">
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