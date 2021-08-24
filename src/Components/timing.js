import React, { useState } from 'react';
import { Container, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import './timing.css'
import { BiTime } from "react-icons/bi";
import LogoImg from '../Images/image.png'
import BannerImg from '../Images/bg.JPG'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Timing = () => {


    // Period Timing Button

    const [toggle1, setToggle1] = useState(false)

    const ToggleBtn1 = () => {
        setToggle1(!toggle1)
    }

    // One Time Timing Button

    const [toggle2, setToggle2] = useState(false)

    const ToggleBtn2 = () => {
        setToggle2(!toggle2)
    }

    const [from, setFrom] = useState("08:00")
    const [to, setTo] = useState("11:00")

    const [selectLevel, setSelectLevel] = useState(["Level 1", "Level 2", "Level 3"])

    const FromTime = (e) => {
        setFrom(e.target.value)
    }
    const ToTime = (e) => {
        setTo(e.target.value)
    }




    // Active Value

    const [active1, setActive1] = useState("Non active")
    const [active2, setActive2] = useState("Non active")

    // Active For className

    const [activetoggle2, setActivetoggle2] = useState(false)
    const [activetoggle1, setActivetoggle1] = useState(false)



    const Submit = () => {
        if (toggle1 === true) {
            setActive1("active")
            setActivetoggle1(true)


        }
        else if (toggle1 === false) {
            setActive1("Non active")
            setActivetoggle1(false)

        }
        if (toggle2 === true) {
            setActive2("active")
            setActivetoggle2(true)

        }
        else if (toggle2 === false) {
            setActive2("Non active")
            setActivetoggle2(false)
        }
    }



    return (
        <Container>
            <div className="logo">
                <img src={LogoImg}></img>
            </div>
            <Container className="banner-img">
                <img src={BannerImg}></img>
            </Container>
            <p className="definition-username">definition for username </p>

            <h4 className="app-header-name">TIMING</h4>
            <div className="btns">
                <div className="btn1">

                    <Button onClick={() => ToggleBtn1()} className={toggle1 ? "time-btn-clicked" : "time-btn"}>Period timimg</Button>
                    <p>defining two web browsing
                        statuses to be swapped
                        automatically according to the
                        hours the user chooses</p>
                </div>
                <div className="btn2">

                    <Button onClick={() => ToggleBtn2()} className={toggle2 ? "time-btn-clicked" : "time-btn"}>One time timing</Button>
                    <p>
                        changing the web browsing
                        status from the date and time the
                        user choose
                    </p>
                </div>

            </div>
            <Container className="timing-fileds">
                <p>choose the hours and level you want
                    at the first part of the day</p>
                <h6 className="first-part">First part of the day</h6>

                <Form>
                    <Form.Group className="select-level-container" >

                        <Form.Select className="dropdown-level" aria-label="Select From List of Levels">
                            <option>Select From List of Levels</option>
                            {selectLevel.map((level, index) => {
                                return (

                                    <option key={index} value={level}>{level}</option>
                                )

                            })}

                        </Form.Select>
                        <Form.Label className="level-label">Level</Form.Label>
                    </Form.Group>
                    <div className="time-select-inputs">

                        <InputGroup className="input-time">
                            <FormControl className="time" id="inlineFormInputGroupUsername" onChange={(e) => ToTime(e)} placeholder={to} />
                            <InputGroup.Text><BiTime /></InputGroup.Text>

                        </InputGroup>
                        <Form.Label className="time-label">To hour</Form.Label>

                        <InputGroup className="input-time">
                            <FormControl className="time" id="inlineFormInputGroupUsername" onChange={(e) => FromTime(e)} placeholder={from} />
                            <InputGroup.Text><BiTime /></InputGroup.Text>

                        </InputGroup>
                        <Form.Label className="time-label">From Hout</Form.Label>

                    </div>

                    <Form.Group className="select-level-container" >

                        <Form.Select className="dropdown-level" aria-label="Select From List of Levels">
                            <option>Select From List of Levels</option>
                            {selectLevel.map((level, index) => {
                                return (

                                    <option key={index} value={level}>{level}</option>
                                )

                            })}

                        </Form.Select>
                        <Form.Label className="level-label">Level</Form.Label>
                    </Form.Group>
                    <div className="submit-container">

                        <Button className="submit-btn" onClick={() => Submit()} >
                            Submit
                        </Button>
                    </div>
                    <h6 className="first-part">some header - constant text</h6>
                    <div className="active-container">

                        <p className={activetoggle2 ? "active-status" : "non-active-status"}>{active2}  <span className="status-name" >Onetime Timing Status</span></p>
                        <p className={activetoggle1 ? "active-status" : "non-active-status"}>{active1} &nbsp; &nbsp;  <span className="status-name" >Period Timing Status</span></p>
                    </div>
                </Form>
            </Container>

            <Container className="next-container">

                <Link className="btn-working" to="/tables">
                    <Button className="btn-next">
                        Previous
                    </Button>
                </Link>
            
            </Container>
        </Container>
    );
}

export default Timing;