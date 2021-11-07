import React, { useState } from "react";
import { connect } from "react-redux";
import {
  login,
  logout,
  del,
  deleteItem,
  buying,
  selling,
  newProduct,
  productClass,
  unit,
  addNewProduct,
  plus,
  minus,
  add,
  push,
  
  
  clearDocBuy,
  clearDocSell,
  buyyingLink,
  sellingLink,
  cancelBuyying,
  cancelSelling,
  cancelPlus,
  cancelMinus,
  changeEntery,
  changeEscape,
  changeProcess,
  addPersonel,
  deletePersonel,
  product,
  addProductProcess,
  addingProductProcess,
  deleteProductBuyying,
  deleteProductSelling,
} from "../actions";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.login(e, userName, password);
          setUserName("");
          setPassword("");
        }}
      >
        <input
          className="d-block"
          type="name"
          placeholder="kullanıcı Adı"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ width: "150px" }}
        />

        <input
          style={{ width: "150px" }}
          className="d-block"
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="w-100 btn btn-primary">
          Gönder
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps, {
  login,
  logout,
  del,
  deleteItem,
  buying,
  selling,
  newProduct,
  productClass,
  unit,
  addNewProduct,

  plus,
  minus,
  add,
  push,

  clearDocBuy,
  clearDocSell,
  buyyingLink,
  sellingLink,
  cancelBuyying,
  cancelSelling,
  cancelPlus,
  cancelMinus,
  changeEntery,
  changeEscape,
  changeProcess,
  addPersonel,
  deletePersonel,
  product,
  addProductProcess,
  addingProductProcess,
  deleteProductBuyying,
  deleteProductSelling,
})(Login);
