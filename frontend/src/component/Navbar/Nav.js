import React, { useEffect, useState } from 'react';
import './Nav.css';

import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { Link, useHistory } from 'react-router-dom';

import onlinekinbechImg from '../../images/onlinekinbech.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';

function Nav({ hideNavbar }) {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.products);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const history = useHistory();

  const searchFunc = () => {
    setIsClicked(true);
    history.push('/search');
  };
  const cartFunc = () => {
    setIsClicked(true);
    history.push('/cart');
  };
  const accountFunc = () => {
    setIsClicked(true);
    history.push('/account');
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (hideNavbar) {
    return null;
  }

  <nav
    style={isScrolled || isClicked ? { background: '#2E3138' } : {}}
    className="nav-section"
    history={history}
  >
    <div className="nav-container">
      <Link onClick={() => setIsClicked(false)} to="/" className="brand-logo">
        {/* ONLINEKINBECH */}
        <img className="logo-img" src={onlinekinbechImg} alt="onlinekinbech" />
      </Link>
      <div className="nav-links-section">
        <ul className="nav-links">
          <Link onClick={() => setIsClicked(false)} to="/" className="nav-item">
            Home
          </Link>
          <Link
            onClick={() => setIsClicked(true)}
            to="/products"
            className="nav-item"
          >
            Products
          </Link>
          <Link
            onClick={() => setIsClicked(true)}
            to="/contact"
            className="nav-item"
          >
            Contact
          </Link>
          <Link
            onClick={() => setIsClicked(true)}
            to="/about"
            className="nav-item"
          >
            About
          </Link>
        </ul>
      </div>
      <div className="icons-section">
        <ShoppingCartIcon
          style={{
            color: '#bf452f',
            height: '100%',
            width: '40px',
            marginRight: '15px',
          }}
          onClick={cartFunc}
        />
        <PersonIcon
          style={{
            color: 'lightblue',
            height: '100%',
            width: '40px',
            marginRight: '15px',
          }}
          onClick={accountFunc}
        />
        <SearchIcon
          style={{
            color: 'purple',
            height: '100%',
            width: '40px',
            marginRight: '15px',
          }}
          onClick={searchFunc}
        />
      </div>
    </div>
  </nav>;

  return (
    <nav
      style={isScrolled || isClicked ? { background: '#2E3138' } : {}}
      className="nav-section"
      history={history}
    >
      <div className="nav-container">
        <Link onClick={() => setIsClicked(false)} to="/" className="brand-logo">
          {/* onlinekinbech */}
          <img className="logo-img" src={onlinekinbechImg} alt="onlinekinbech" />
        </Link>
        <div className="nav-links-section">
          <ul className="nav-links">
            <Link
              onClick={() => setIsClicked(false)}
              to="/"
              className="nav-item"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsClicked(true)}
              to="/products"
              className="nav-item"
            >
              Products
            </Link>
            <Link
              onClick={() => setIsClicked(true)}
              to="/contact"
              className="nav-item"
            >
              Contact
            </Link>
            <Link
              onClick={() => setIsClicked(true)}
              to="/about"
              className="nav-item"
            >
              About
            </Link>
          </ul>
        </div>
        <div className="icons-section">
          <ShoppingCartIcon
            style={{
              color: '#bf452f',
              height: '100%',
              width: '40px',
              marginRight: '15px',
            }}
            onClick={cartFunc}
          />
          <PersonIcon
            style={{
              color: 'lightblue',
              height: '100%',
              width: '40px',
              marginRight: '15px',
            }}
            onClick={accountFunc}
          />
          <SearchIcon
            style={{
              color: 'purple',
              height: '100%',
              width: '40px',
              marginRight: '15px',
            }}
            onClick={searchFunc}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
