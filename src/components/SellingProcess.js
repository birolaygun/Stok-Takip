import React from "react";
import { Link } from "react-router-dom";
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

const SellingProcess = (props) => {
  let sell = props.mydata.sellingProcess.find(
    (sell) => sell[0].DocumentNo === props.mydata.sellingItem
  );

  return (
    <div>
      <h3 className="mainHead"> Satış Yapma Belgesi</h3>
      <br />
      <div style={{ border: "1px solid black", width: "90%", margin: "auto" }}>
        <div style={{ padding: "5px" }}>
          <h4 className="my-3">
            {" "}
            <b>Belge No: {sell[0].DocumentNo}</b>
          </h4>
          <h6 className="my-2">
            {" "}
            <b> Satılan Şirket:</b> {sell[0].company}
          </h6>
          <h6 className="my-2">
            {" "}
            <b> Tarih:</b> {sell[0].shoppingData}
          </h6>
          <h6 className="my-2">
            {" "}
            <b>Satın Alan:</b> {sell[0].costumer}
          </h6>
          <h6 className="my-2">
            {" "}
            <b>Satışı Yapan:</b> {sell[0].seller}
          </h6>
          <h6 className="my-2">
            {" "}
            <b>Açıklama:</b> {sell[0].explanation}
          </h6>
          <br />
          <h6>
            {" "}
            Bu belge <b>{sell[0].userChecked}</b> tarafından{" "}
            <b>{sell[0].dateChecked} </b> tarihinde sisteme girilmiştir
          </h6>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Seri No</th>
              <th scope="col">Ürün</th>
              <th scope="col">Fotograf</th>
              <th scope="col">Sınıf</th>
              <th scope="col">Satılan</th>
              <th scope="col">Birim</th>
            </tr>
          </thead>
          <tbody className="tbudyPr">
            {sell[1].map((item) => (
              <tr key={Math.random()}>
                <th
                  onClick={(e) => props.product(e.target.innerHTML)}
                  className="margin center"
                >
                  <Link className="margins" to={`/${item.id}`.toLowerCase()}>
                    {item.id}
                  </Link>{" "}
                </th>
                <td className="margin">{item.productName}</td>
                <td className="margin">
                  <img
                    className="list"
                    width={"40"}
                    src={item.productPhoto}
                    alt="photo1"
                  />
                </td>
                <td className="margin">{item.productClass}</td>
                <td className="margin">{item.minus}</td>
                <td className="margin">{item.productUnit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="m-4">
        <Link
          to="/işlemler"
          className={`${props.mydata.user.authority ? "" : "disabled"} `}
        >
          <button
            className={`m-2 btn btn-danger ${
              props.mydata.user.authority ? "" : "disabled"
            } `}
            onClick={(e) => {
              if (
                window.confirm("Belgeyi silmek istediğinizden emin misiniz ?")
              ) {
                for (let i = 1; i < sell[1].length + 1; i++) {
                  props.cancelMinus(
                    e,
                    document.querySelector(
                      `.deneme3 > tr:nth-child( ${i} ) > th:nth-child(1) > a`
                    ).innerHTML,
                    document.querySelector(
                      `.deneme3 > tr:nth-child( ${i} ) > td:nth-child(5)`
                    ).innerHTML
                  );
                }

                props.cancelSelling();
                props.deleteProductSelling(sell[0].DocumentNo);
              }
            }}
          >
            Belgeyi Sil
          </button>
        </Link>

        <p style={{ color: "grey" }}>
          {" "}
          <b className="m-2 ">Bu belgeyi yalnızca Admin silebilir.</b>{" "}
        </p>
      </div>
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
})(SellingProcess);
