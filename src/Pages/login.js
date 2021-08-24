import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoImg from '../Images/image.png'
import BannerImg from '../Images/bg1.JPG'
import Products from '../Components/products'
import Levels from '../Components/levels'
import WebPageManagement from '../Components/webpage'
import Tables from '../Components/table'
import Timing from '../Components/timing'
import './login.css'

const Allpages = () => {
    return (


        // NAVIGATION

        <Router>

            <Switch>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/levels">
                    <Levels />
                </Route>
                <Route path="/tables">
                    <WebPageManagement />
                    <Tables />

                </Route>
                <Route path="/timing">
                    <Timing />

                </Route>
                <Route path="/">

                    {/* LOGIN PAGE */}


                    <Container fluid>
                        <div className="logo">
                            <img src={LogoImg}></img>
                        </div>
                        <Container className="banner-img">
                            <img src={BannerImg}></img>
                        </Container>
                        <Container >

                            <div className="login-content">
                                <h1 className="header-welcome">Welcome</h1>
                                <input type="text" ></input><span> : Username/Email</span><br />
                                <input type="password" ></input><span> : Password</span><br />
                                <Button className="btn-login">
                                    <Link className="btn-pages" to="/products">Login</Link>
                                </Button>

                            </div>
                        </Container>


                    </Container>

                </Route>
            </Switch>


        </Router>
    );
}

export default Allpages;