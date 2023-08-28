
import catBanner from '../../../assets/category/cat-1.jpg'
import "./Category.scss";

const Category = () => {

    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={catBanner} alt='Cat' />
                </div>
                <div className="category">
                    <img src={catBanner} alt='Cat' />
                </div>
                <div className="category">
                    <img src={catBanner} alt='Cat' />
                </div>
                <div className="category">
                    <img src={catBanner} alt='Cat' />
                </div>
            </div>
        </div>
    );
};

export default Category;
