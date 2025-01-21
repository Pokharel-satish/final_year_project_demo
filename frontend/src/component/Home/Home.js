import React, { Fragment, useEffect, useState } from 'react';
import './Home.css';
import ProductCard from './ProductCard.js';
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';

import Contact from '../layout/Contact/Contact';
import About from '../layout/About/About';
import Recommend from '../Recommend/recommend';

const Home = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ONLINEKINBECH" />
          <div className="banner">
            <p>Welcome to ONLINEKINBECH.</p>
            <h1>Reduce,Reuse,Recycle.Don't throw it away,sell it today.</h1>

            <a href="#container">
              <button>
                Scroll 
                {/* <CgMouse /> */}
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <Recommend />

          <Contact />

          <About />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
