import { useContext, useState } from "react";
// import { Context } from "../../utils/context";
// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import singlePropduct from '../../assets/products/earbuds-prod-1.webp'
// import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    // const { id } = useParams();
    // const { handleAddToCart } = useContext(Context);
    // const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    const decrement =  () =>{
        
        setQuantity( (prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        })
    }
    const increment = ()=>{
        setQuantity( (prevState) =>{
            return prevState + 1;
        } )
    }

    // if (!data) return;
    // const product = data?.data?.[0]?.attributes;

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={singlePropduct}
                        />
                    </div>
                    <div className="right">
                        <span className="name">Category Name</span>
                        <span className="price">&#8377;Price</span>
                        <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat cumque sunt, dicta laborum accusantium repellendus sapiente debitis. Numquam quaerat minus sed eveniet ipsa ut amet eligendi molestias officia minima?</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button
                                className="add-to-cart-button"
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>
                                    Category Name
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* <RelatedProducts
                    productId={id}
                    categoryId={product.categories.data[0].id}
                /> */}
            </div>
        </div>
    );
};

export default SingleProduct;
