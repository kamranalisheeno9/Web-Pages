import React, { useState } from 'react';
import './levels.css'
import { Container, Form, Button } from 'react-bootstrap';
import Level1 from '../Images/r1.png'
import Level2 from '../Images/r2.png'
import Level3 from '../Images/r3.png'
import Level4 from '../Images/r4.png'
import Level5 from '../Images/r5.png'
import Level6 from '../Images/r6.png'
import LogoImg from '../Images/image.png'
import BannerImg from '../Images/bg.JPG'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Levels = () => {
    const [level1, setLevel1] = useState(false)
    const [level2, setLevel2] = useState(false)
    const [level3, setLevel3] = useState(false)
    const [level4, setLevel4] = useState(false)
    const [level5, setLevel5] = useState(false)
    const [level6, setLevel6] = useState(false)
    const [checkboxlist, setCheckboxlist] = useState([{
        value: "Youtube Strict",
        isChecked: false,
    },
    {
        value: "Google Search",
        isChecked: false,
    },
    ])

    const [userproducts, setUserproducts] = useState(["Product A", "Product B", "Product C"])



    const images = [
        { id: 6, src: Level6, title: 'image-6', toggle: level6, description: "Level  6 Description Here Level 6 Description Here" },
        { id: 5, src: Level5, title: 'image-5', toggle: level5, description: "Level 5 Description Here" },
        { id: 4, src: Level4, title: 'image-4', toggle: level4, description: "Level 4 Description Here Level 4 Description Here Level 4 Description Here" },
        { id: 3, src: Level3, title: 'image-3', toggle: level3, description: "Level  Description Here Level 3 Description Here" },
        { id: 2, src: Level2, title: 'image-2', toggle: level2, description: "Level 2 Description Here Level 2 Description Here Level 2 Description Here" },
        { id: 1, src: Level1, title: 'image-1', toggle: level1, description: "Level 1 Description Here Level 1 Description Here Level 1 Description Here" },

    ];
    const ImageToggle = (id) => {
        if (id === 1) {
            setLevel1(!level1)
            setLevel2(false)
            setLevel3(false)
            setLevel4(false)
            setLevel5(false)
            setLevel6(false)
        }
        else if (id === 2) {
            setLevel1(false)
            setLevel2(!level2)
            setLevel3(false)
            setLevel4(false)
            setLevel5(false)
            setLevel6(false)
        }
        else if (id === 3) {
            setLevel1(false)
            setLevel2(false)
            setLevel3(!level3)
            setLevel4(false)
            setLevel5(false)
            setLevel6(false)
        }
        else if (id === 4) {
            setLevel1(false)
            setLevel2(false)
            setLevel3(false)
            setLevel4(!level4)
            setLevel5(false)
            setLevel6(false)
        }
        else if (id === 5) {
            setLevel1(false)
            setLevel2(false)
            setLevel3(false)
            setLevel4(false)
            setLevel5(!level5)
            setLevel6(false)
        }
        else if (id === 6) {
            setLevel1(false)
            setLevel2(false)
            setLevel3(false)
            setLevel4(false)
            setLevel5(false)
            setLevel6(!level6)
        }
    }

    const handleCheckBox = (e, i) => {
        checkboxlist[i].isChecked = !(checkboxlist[i].isChecked)
        e.target.checked = (checkboxlist[i].isChecked)
    }

    const ProductFunction = (productIndex) => {
        alert(productIndex)

    }

    return (
        <Container className="levels-container" >

            <div className="logo">
                <img src={LogoImg}></img>
            </div>
            <Container className="banner-img">
                <img src={BannerImg}></img>
            </Container>
            <div className="level-container" >

                <p className="definition-username">definition for username </p>

                {/* LEVELS */}

                <Container className="images-level-container">


                
                <div className="img-des-container" >
<div className="column">

<img onClick={() => ImageToggle(images[0].id)} className={images[0].toggle ? "level-image-clicked" : "level-image"} src={images[0].src} />
                    <p className="level-description">{images[0].description}</p>
</div>
<div className="column">

<img onClick={() => ImageToggle(images[1].id)} className={images[1].toggle ? "level-image-clicked" : "level-image"} src={images[1].src} />
                    <p className="level-description">{images[1].description}</p>
</div>
<div className="column">

<img onClick={() => ImageToggle(images[2].id)} className={images[2].toggle ? "level-image-clicked" : "level-image"} src={images[2].src} />
                    <p className="level-description">{images[2].description}</p>
</div>

<div className="column">

<img onClick={() => ImageToggle(images[3].id)} className={images[3].toggle ? "level-image-clicked" : "level-image"} src={images[3].src} />
                    <p className="level-description">{images[3].description}</p>
</div>
<div>

<img onClick={() => ImageToggle(images[4].id)} className={images[4].toggle ? "level-image-clicked" : "level-image"} src={images[4].src} />
                    <p className="level-description">{images[4].description}</p>
</div>
<div className="column">

<img onClick={() => ImageToggle(images[5].id)} className={images[5].toggle ? "level-image-clicked" : "level-image"} src={images[5].src} />
                    <p className="level-description">{images[5].description}</p>
</div>

</div>


                   
                </Container>


                {/* ADVANCED SETTING */}

                <Container className="level-information">

                    <h6 className="advance">Advanced Setting</h6><br />
                    <ul className="radio-filter">
                        <li >
                            <Form.Check
                                inline
                                label="No"
                                name="filter"
                                type="radio"
                            />

                        </li>
                        <li>
                            <Form.Check
                                inline
                                label="Yes"
                                name="filter"
                                type="radio"
                            />

                        </li>
                        <li>Radio for filter mobile</li>
                    </ul>
                    <ul className="youtube-box">
                        {checkboxlist.map((y, i) => {
                            return (
                                <>
                                    <li key={i}>
                                        <Form.Check
                                            inline
                                            label={y.value}
                                            name={y.value}
                                            type="checkbox"
                                            onClick={(e) => handleCheckBox(e, i)}
                                        />
                                    </li>
                                </>

                            )
                        })}

                    </ul>

                    {/* PRODUCTS */}

                    <p className="product-header">For Product</p>
                    <ul className="product-list">

                        {userproducts.map((userProduct, index) => {
                            return (
                                <li key={index}>
                                    <Button onClick={() => ProductFunction(index)} className="btn-product">
                                        {userProduct}
                                    </Button>

                                </li>
                            )
                        })}
                    </ul>
                    <p className="tip-product">result of pressing one of the buttons above</p>
                </Container>


            </div>
            <Container className="next-container">

                <Link className="btn-working" to="/products">
                    <Button className="btn-next">
                        Previous
                    </Button>
                </Link>
                <Link className="btn-working" to="/tables">
                    <Button className="btn-previous">
                        Next
                    </Button>
                </Link>
            </Container>
        </Container>
    );
}

export default Levels;