import React, { useState, useEffect } from 'react';
import './products.css'
import { Container, Form } from 'react-bootstrap';

const ProductsData = [
    { value: "product A", isChecked: false, id: 1 },
    { value: "product B", isChecked: false, id: 2 },
    { value: "product C", isChecked: false, id: 3 },
    { value: "product D", isChecked: false, id: 4 }]
const Products = () => {
    const [username, setUsername] = useState("username")
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(ProductsData)
    }, [])
    const handleCheckedAll = (e) => {
        if (e.target.name = "SelectAll") {

            let selectedUser = products.map((product) => {
                return { ...product, isChecked: e.target.checked }
            })

            setProducts(selectedUser)
        }
    }
    const handlecheck = (e, index) => {
        let selectedUser = products.map((product) =>
            product.value === e.target.name ? { ...product, isChecked: e.target.checked } : product

        )
        setProducts(selectedUser)
    }

    return (
        <Container className="products-container">
            <div className="products-inner-container" >

                <p className="username">hello {username}</p>
                <h6 className="selection">Please select products</h6><br />
                <ul className="product-list">
                    {products.map((product, index) => {
                        return (
                            <>
                                <li className="product" key={index}>{product.value} &nbsp;
                                    <input type="checkbox" onChange={(e) => handlecheck(e, index)} checked={product.isChecked} name={product.value} class="formCheck" />

                                </li>
                            </>

                        )
                    })}
                    <br />
                    <li className="product">all products &nbsp;
                        <input type="checkbox" class="formCheck" onChange={(e) => handleCheckedAll(e)} name="SelectAll" />
                    </li>

                </ul>
            </div>

        </Container>
    );
}

export default Products;