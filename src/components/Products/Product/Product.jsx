import React from "react";
import "./Product.scss";
import product from '../../../assets/products/earbuds-prod-1.webp'

const Product = ({ data, id }) => {
    return (
        <div
            className="product-card" >
            <div className="thumbnail">
                <img src={product} alt="Product Banner" />
            </div>
            <div className="prod-details">
                <span className="name">Airbuds Prods</span>
                <span className="price">&#8377;280</span>
            </div>
        </div>
    );
};

export default Product;
