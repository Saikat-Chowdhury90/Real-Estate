import React from "react";
import "./FeaturedCategories.css";

const FeaturedCategoriesComponent = () => {
  return (
    <div className="featured-categories-section">
      <div className="featured-categories-title">
        <h2 className="heading-primary">Featured Categories</h2>
      </div>
      <div className="featured-categories-card-slider-container">
        <div className="featured-categories-card-slider-wrapper">
          <div className="featured-categories-card-slider">
            <div className="featured-categoires--card">
              <img
                src="https://static-x.jamesedition.com/assets/popular_categories/real_estate-7a4a7367b1d6b97d9d7dbdb8d57f85a51fa898a677e6089ba3655e288d22a6e5.jpg"
                alt="product1"
              />
              <div className="featured-categories-card-details">
                <p className="real-state--text">Real State</p>
                <p className="real-state--listings"> 210,000 Listings</p>
              </div>
            </div>
            <div className="featured-categoires--card">
              <img
                src="https://static-x.jamesedition.com/assets/popular_categories/cars-5bb2092e58079f93ea6e7729be57515f1601e0b959e82603d6d0d14e78c3d2a7.jpg"
                alt="product1"
              />
              <div className="featured-categories-card-details">
                <p className="real-state--text">Cars</p>
                <p className="real-state--listings"> 210,000 Listings</p>
              </div>
            </div>
            <div className="featured-categoires--card">
              <img
                src="https://static-x.jamesedition.com/assets/popular_categories/yachts-4b4b2c8f828090f5777414d801801581c0703feaec89fde2ff26ca03c7fd1fd8.jpg"
                alt="product1"
              />
              <div className="featured-categories-card-details">
                <p className="real-state--text">Yachts</p>
                <p className="real-state--listings"> 210,000 Listings</p>
              </div>
            </div>
            <div className="featured-categoires--card">
              <img
                src="https://static-x.jamesedition.com/assets/popular_categories/jets-db92caef80c84457403908cab6cc3694414fa678ff2a30a202ba7fecbc4ff376.jpg"
                alt="product1"
              />
              <div className="featured-categories-card-details">
                <p className="real-state--text">Jets</p>
                <p className="real-state--listings"> 210,000 Listings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategoriesComponent;
