import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './page2.jsx'; // Mengimpor komponen Login
import ProductDetail from './ProductDetail'; // Mengimpor komponen ProductDetail

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredProduct: null,
    };
  }

  handleMouseEnter = (productId) => {
    this.setState({ hoveredProduct: productId });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredProduct: null });
  };

  renderHomePage() {
    const { hoveredProduct } = this.state;

    return (
      <div className="homepage">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <img src="/asset/estilo-logo.png" alt="Estilo Logo" className="logo-img" />
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#cat-product">Products</a>
            <a href="#promo-section">Sale</a>
            <Link to="/login">Login</Link>
          </nav>
        </header>

        {/* Home Section */}
        <section id="home" className="home">
          <Carousel style={{ width: '70%', margin: '0 auto', marginTop: '45px' }} interval={3000} controls={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/asset/estilo-white.png"
                alt="First slide" style={{ borderRadius: '20px' }}
              />
              <Carousel.Caption>
                <h3>Welcome to Our Store</h3>
                <p>Discover our amazing products!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/asset/estilo-color.png"
                alt="Second slide" style={{ borderRadius: '20px' }}
              />
              <Carousel.Caption>
                <h3>Special Offers</h3>
                <p>Check out our latest discounts!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        {/* Promo Section */}
        <section className="promo-section" id="promo-section">
          <h2>Special Petshop Discounts and Offers!</h2>
          <p>Save up to 50% on all pet accessories and food. Limited-time offers, don't miss out!</p>
          <div className="promo-list">
            <div className="promo-card">
              <img src="/asset/dogFood.png" alt="Dog Food Promo" className="promo-img" />
              <h3>Discount on Dog Food</h3>
              <p>Get 30% off on all brands of dog food. Offer valid till the end of the month.</p>
            </div>
            <a href="#cat-product" className="promo-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src="/asset/catToys.png" alt="Cat Toys Promo" className="promo-img" />
              <h3>Cat Toys Sale</h3>
              <p>Buy 1, Get 1 Free on all cat toys. Perfect for your feline friends!</p>
            </a>
            <div className="promo-card">
              <img src="/asset/fishTank.png" alt="Fish Tank Promo" className="promo-img" />
              <h3>Fish Tank Combo</h3>
              <p>20% off on fish tanks and aquarium supplies. Make your aquatic pets happy!</p>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section id="banner" className="banner">
          <h1>Welcome to Estilo Pet</h1>
          <p>Purr-fect Products for Your Furry Friends!</p>
        </section>

        {/* Product Section */}
        <section id="cat-product" className="cat-product">
          <div className="product-list">
            <div className="product-card">
              <img
                src={hoveredProduct === 1 ? '/asset/egghover.png' : '/asset/eggProduct.png'}
                alt="Product 1"
                onMouseEnter={() => this.handleMouseEnter(1)}
                onMouseLeave={this.handleMouseLeave}
              />
              <div className="product-info">
                <h3>Egg Cat Scratcher</h3>
                <p>$29.99</p>
                <Link to="/product-detail">
                  <button>Add to Cart</button>
                </Link>
              </div>
            </div>

            <div className="product-card">
              <img
                src={hoveredProduct === 2 ? '/asset/mushroomhover.png' : '/asset/catProduct.png'}
                alt="Product 2"
                onMouseEnter={() => this.handleMouseEnter(2)}
                onMouseLeave={this.handleMouseLeave}
              />
              <div className="product-info">
                <h3>Mushroom Cat Scratcher</h3>
                <p>$39.99</p>
                <Link to="/product-detail">
                  <button>Add to Cart</button>
                </Link>
              </div>
            </div>

            <div className="product-card">
              <img
                src={hoveredProduct === 3 ? '/asset/carrothover.png' : '/asset/carrotProduct.png'}
                alt="Product 3"
                onMouseEnter={() => this.handleMouseEnter(3)}
                onMouseLeave={this.handleMouseLeave}
              />
              <div className="product-info">
                <h3>Carrot Cat Scratcher</h3>
                <p>$19.99</p>
                <Link to="/product-detail">
                  <button>Add to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 Estilo Pet. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={this.renderHomePage()} />
          <Route path="/login" element={<Login />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
