import React, { useEffect, useRef, useState } from 'react';
import './recommend.css';
import ProductCard from '../Home/ProductCard';
import { useSelector } from 'react-redux';

function Recommend() {
  const containerRef = useRef(null);
  const [choice, setChoice] = useState('default');

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [render, setRender] = useState(false);

  //form parameters
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [formData, setFormData] = useState({});

  const recommendedProducts = useSelector(
    (state) => state.cart.recommendedProducts
  );

  const handleScroll = (e) => {
    const container = containerRef.current;
    container.scrollLeft += e.deltaY;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      choice,
      minPrice,
      maxPrice,
      category,
      // ageGroup,
    });
  };
  useEffect(() => {
    setRender(true);
  }, [recommendedProducts]);

  useEffect(() => {
    if (Object.keys(formData).length !== 0) {
      localStorage.setItem('user_choice', JSON.stringify(formData));
    }
  }, [formData]);

  const defaultHandler = (e) => {
    setChoice(e.target.value);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <>
      <section id="recommend">
        <div className="dropdown_container">
          <h2 className="recommend_title">
            Help us recommend the products for you!
          </h2>

          <select onChange={defaultHandler} id="age-dropdown">
            <option value="default">Default</option>
            <option value="customise">Customise</option>
          </select>
        </div>
        {/* overlay form  */}

        <div
          onClick={closeOverlay}
          style={{ display: isOverlayOpen ? 'flex' : 'none' }}
          className={
            choice === 'customise' ? `overlay overlay-effect` : 'overlay'
          }
        >
          <div
            className={
              choice === 'customise'
                ? `form_container form_container-effect`
                : 'form_container'
            }
          >
            <h2 style={{ marginBottom: '30px' }}>Fill your preferences</h2>
            <form onSubmit={submitHandler} onClick={(e) => e.stopPropagation()}>
              <div className="form_group price-range-container">
                <label for="price-range">Price Range:</label>
                <div className="price-inputs">
                  <input
                    type="number"
                    id="min-price"
                    placeholder="Min"
                    min="0"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <span className="dash">-</span>
                  <input
                    type="number"
                    id="max-price"
                    placeholder="Max"
                    min="0"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="form_group">
                <label for="category">Interests:</label>
                <input
                  className="input_option"
                  type="text"
                  id="category"
                  placeholder="Enter your interests"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              {/* <div className="form_group">
                <label for="age_group">Age Group:</label>
                <select
                  onChange={(e) => setAgeGroup(e.target.value)}
                  className="select_option"
                  id="age_group"
                >
                  <option value="any">Any</option>
                  <option value="0-10">0-20 years</option>
                  <option value="21-40">21-40 years</option>
                  <option value="40+">40+ years</option>
                </select>
              </div> */}
              <div className="form_group">
                <button
                  onClick={closeOverlay}
                  type="submit"
                  className="apply_btn"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* end ofoverlay form */}

        <div
          className="recommend_products_container"
          onWheel={handleScroll}
          ref={containerRef}
        >
          {recommendedProducts.length > 0 &&
            recommendedProducts.map((product) => {
              return <ProductCard key={product?._id} product={product} />;
            })}
        </div>
      </section>
    </>
  );
}

export default Recommend;
