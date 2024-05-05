import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Signup_main1">
      <div className="login_container1">
        <div className="navbar">
          <h1>Pocket Saving</h1>
          <div className="user-name">
            <h2>G</h2>
          </div>
        </div>

        <div className="account_saving">
          <h2>Account Balance</h2>
          <div className="amount">
            <h2>2000</h2>
            <i class="fa-solid fa-pen"></i>
          </div>
        </div>
        <div className="content_text">
          <h4>Spending Money</h4>
          <div className="input_form1">
            <input type="text" placeholder="Products..." />
            <input type="number" placeholder="Amounts..." />
          </div>
          <button>Submit</button>
        </div>

        <div className="transaction_details">
          <p>Today Transactions</p>
          <Link to="/alllist">
            {" "}
            <p>View All</p>
          </Link>
        </div>
        <div className="products_details_list">
          <h4>Products</h4>
          <ul>
            <li>
              <span>Grosories</span>
              <span>- 200</span>
            </li>
            <li>
              <span>Grosories</span>
              <span>- 200</span>
            </li>
            <li>
              <span>Grosories</span>
              <span>- 200</span>
            </li>
            <li>
              <span>Grosories</span>
              <span>- 200</span>
            </li>
            <li>
              <span>Grosories</span>
              <span>- 200</span>
            </li>
            <li>
              <span>Grosories</span>
              <span>- 200</span>
            </li>
          </ul>
          <div className="total_ammount">
            <span>Total</span>
            <sapn>- 800</sapn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
