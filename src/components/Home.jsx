import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="home-container container-fluid">
      {/* Features on top */}
      <div className="row justify-content-center text-center feature-row py-4">
        <div className="col-md-3 col-6 feature-box">
          🚀 <br /> <span>Fast Delivery</span>
        </div>
        <div className="col-md-3 col-6 feature-box">
          🔒 <br /> <span>Secure Payments</span>
        </div>
        <div className="col-md-3 col-6 feature-box">
          💬 <br /> <span>24/7 Support</span>
        </div>
      </div>

      {/* Hero section */}
      <div className="row align-items-center hero-row py-5 px-3 px-md-5">
        <div className="col-md-6 text-section">
          <h1 className="hero-title">📖 Discover, Order & Read</h1>
          <p className="hero-subtitle">
            Your premium destination for bestselling books and timeless classics.
          </p>
          <a href="/signin" className="btn btn-warning hero-btn">Explore Now</a>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80"
            alt="Books"
            className="img-fluid hero-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;