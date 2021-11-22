import { useState } from 'react';
import './App.css';

function App() {
  const [pricing, setPricing] = useState(null);

  function handleChange({ target }) {
    if (pricing === null) {
      setPricing(target.checked);
    } else {
      setPricing(null);
    }
  }

  return (
    <div className="container">
      <h1>Our Pricing</h1>
      <div className="priceType">
        <p>Annually</p>
        <label className="custom-radio-btn">
          <input
            type="checkbox"
            value="Pricing"
            checked={pricing}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
        </label>
        <p>Monthly</p>
      </div>
      {pricing === null ? (
        <section className="table">
          <div className="price">
            <h3>Basic</h3>
            <span>
              <p>$</p>199.99
            </span>
            <div>
              <p>500 GB Storage</p>
              <p>2 Users Allowed</p>
              <p>Send up to 3 GB</p>
            </div>
            <button>LEARN MORE</button>
          </div>
          <div className="mainPrice">
            <h3>Professional</h3>
            <span>
              <p>$</p> 249.99
            </span>
            <div>
              <p>1 TB Storage</p>
              <p>5 Users Allowed</p>
              <p>Send up to 10 GB</p>
            </div>
            <button>LEARN MORE</button>
          </div>
          <div className="price">
            <h3>Master</h3>
            <span>$399.99</span>
            <div>
              <p>2 TB Storage</p>
              <p>10 Users Allowed</p>
              <p>Send up to 20 GB</p>
            </div>
            <button>LEARN MORE</button>
          </div>
        </section>
      ) : (
        <section className="table">
          <div className="price">
            <h3>Basic</h3>
            <span>$19.99</span>
            <div>
              <p>500 GB Storage</p>
              <p>2 Users Allowed</p>
              <p>Send up to 3 GB</p>
            </div>
            <button>LEARN MORE</button>
          </div>
          <div className="mainPrice">
            <h3>Professional</h3>
            <span>$29.99</span>
            <div>
              <p>1 TB Storage</p>
              <p>5 Users Allowed</p>
              <p>Send up to 10 GB</p>
            </div>
            <button>LEARN MORE</button>
          </div>
          <div className="price">
            <h3>Master</h3>
            <span>$39.99</span>
            <div>
              <p>2 TB Storage</p>
              <p>10 Users Allowed</p>
              <p>Send up to 20 GB</p>
            </div>
            <button>LEARN MORE</button>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
