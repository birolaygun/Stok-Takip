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

const Product = (props) => {
  return (
    <div>
      <h2 className="mainHead">{props.mydata.product}</h2>

      {props.mydata.repository.find(
        (item) => item.id === props.mydata.product
      ) ? (
        <div className="m-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column  justify-content-around">
              <p>
                <b>Seri No: </b>{" "}
                {
                  props.mydata.repository.find(
                    (item) => item.id === props.mydata.product
                  ).id
                }
              </p>
              <p>
                <b> Ürün Adı:</b>{" "}
                {
                  props.mydata.repository.find(
                    (item) => item.id === props.mydata.product
                  ).productName
                }
              </p>
              <p>
                <b>Birimi: </b>{" "}
                {
                  props.mydata.repository.find(
                    (item) => item.id === props.mydata.product
                  ).productUnit
                }
              </p>
              <p>
                <b> Sınıfı:</b>{" "}
                {
                  props.mydata.repository.find(
                    (item) => item.id === props.mydata.product
                  ).productClass
                }
              </p>
            </div>
            <div>
              <img
                width="300px"
                src={
                  props.mydata.repository.find(
                    (item) => item.id === props.mydata.product
                  ).productPhoto
                }
                alt=""
              />
            </div>
          </div>
          <hr />
          <div className="özet">
            <h2 className="mainHead my-2">Ürün Hareketleri</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Belge No</th>
                  <th scope="col">İşlem</th>
                  <th scope="col">Şirket</th>
                  <th scope="col">Tarih</th>
                  <th scope="col">Miktar</th>
                  <th scope="col">Birim</th>
                </tr>
              </thead>

              <tbody className="tbudyPr">
                {props.mydata.productProcess
                  .filter((move) => move.id === props.mydata.product)
                  .map((movement) => (
                    <tr
                      key={Math.random()}
                      className={` ${
                        movement.process === "alış" ? "buying" : "selling"
                      } `}
                    >
                        <th
                          onClick={(e) => {
                            if (movement.process === "alış") {
                              props.buyyingLink(e.target.innerHTML);
                            } else if (movement.process === "satış") {
                              props.sellingLink(e.target.innerHTML);
                            }
                          }}
                          className="margin"
                        >
                      <Link
                        className="links"
                        to={`/işlemler/${
                          movement.process === "alış" ? "alış_" : "satış_"
                        }${movement.DocumentNo}`.toLowerCase()}
                      >

                          {movement.DocumentNo}
                                                </Link>

                        </th>
                      <td className="margin">{movement.process}</td>
                      <td className="margin">{movement.company}</td>
                      <td className="margin">{movement.shoppingData}</td>
                      <td className="margin">
                        {` ${movement.process === "satış" ? "-" : ""} `}
                        {movement.values}
                      </td>
                      <td className="margin">
                        {
                          props.mydata.repository.find(
                            (find) => find.id === movement.id
                          ).productUnit
                        }
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <p className="m-4 sum">
              Bu üründen stoğunuzda şu anda{" "}
              <b className="summary">
                {
                  props.mydata.repository.find(
                    (bul) => bul.id === props.mydata.product
                  ).stock
                }{" "}
                {
                  props.mydata.repository.find(
                    (bul) => bul.id === props.mydata.product
                  ).productUnit
                }
              </b>{" "}
              bulunmaktadır.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
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
})(Product);
