import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Repo from "./components/Repo";
import Buying from "./components/Buying";
import Selling from "./components/Selling";
import Processes from "./components/Processes";
import Authority from "./components/Authority";
import LogOut from "./components/LogOut";
import BuyingProcess from "./components/BuyingProcess";
import SellingProcess from "./components/SellingProcess";
import Product from "./components/Product";
import { Link } from "react-router-dom";
import depo from "../src/depo.png"

const App = (props) => {

  return (
    <div className="App">
      <div className="apply">
        <div className="logo">
          <img src={depo} alt="" />
        </div>

        <nav className="navbar ">
          <div className="">
            <Link to="/">
              <button className="btn btn-primary">
                <span>Depo</span>
              </button>
            </Link>

            <Link
              to="/alış"
              className={props.mydata.user.entry ? " " : "disabled-link"}
            >
              <button
                className={`btn btn-primary ${
                  props.mydata.user.entry ? " " : "disabled"
                } `}
              >
                <span>Alış</span>
              </button>
            </Link>

            <Link
              to="/satış"
              className={props.mydata.user.checkOut ? " " : "disabled-link"}
            >
              <button
                className={`btn btn-primary ${
                  props.mydata.user.checkOut ? " " : "disabled"
                } `}
              >
                <span>Satış</span>
              </button>
            </Link>

            <Link
              to="/işlemler"
              className={props.mydata.user.processes ? " " : "disabled-link"}
            >
              <button
                className={`btn btn-primary ${
                  props.mydata.user.processes ? "" : "disabled"
                } `}
              >
                <span>İşlemler</span>
              </button>
            </Link>

            <Link to="/yetkilendirme">
              <button
                className={`btn btn-warning ${
                  props.mydata.user.authority ? "" : "d-none"
                } `}
              >
                <span>Yetkilendirme</span>
              </button>
            </Link>
            {/* <button onClick={()=>console.log(props.mydata)}>state</button> */}
          </div>
        </nav>

        <div className="login">
          {props.mydata.login ? <LogOut /> : <Login />}
        </div>
      </div>
      <Route
        path={`/işlemler/alış_${props.mydata.buyingItem}`.toLowerCase()}
        exact
        component={BuyingProcess}
      />
      <Route
        path={`/işlemler/satış_${props.mydata.sellingItem}`.toLowerCase()}
        exact
        component={SellingProcess}
      />
      <Route path="/" exact component={Repo} />
      <Route path="/alış" exact component={Buying} />
      <Route path="/satış" exact component={Selling} />
      <Route path="/işlemler" exact component={Processes} />
      <Route path="/yetkilendirme" exact component={Authority} />
      <Route
        path={`/${props.mydata.product}`.toLowerCase()}
        exact
        component={Product}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps)(App);
