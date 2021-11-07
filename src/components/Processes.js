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

const Processes = (props) => {
  return (
    <div>
      <div
        style={{
          width: "95%",
          border: "1px, solid, black",
          margin: "auto",
        }}
      >
        <h2
          className="mainHead mb-2"
          style={{
            backgroundColor: "#00FFFF",
            marginBottom: "0px",
            padding: "5px",
          }}
        >
          Yapılan Alış İşlemlerin Listesi
        </h2>
        <div>
          <table className="table" style={{ backgroundColor: "#7FFFD4" }}>
            <thead>
              <tr>
                <th scope="col">Belge No</th>
                <th scope="col">Alınan Şirket</th>
                <th scope="col">Tarih</th>
                <th scope="col">Belgeleyen</th>
              </tr>
            </thead>

            <tbody>
              {props.mydata.taken.map((item) => (
                <tr key={Math.random()}>
                  <th
                    className="linked"
                    onClick={() => props.buyyingLink(`${item[0].DocumentNo}`)}
                  >
                    <Link
                      className="linked"
                      to={`/işlemler/alış_${item[0].DocumentNo.toLowerCase()}`}
                    >
                      {item[0].DocumentNo}
                    </Link>
                  </th>{" "}
                  <td>{item[0].company}</td>
                  <td>{item[0].shoppingData}</td>
                  <td>{item[0].userChecked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div
        style={{
          width: "95%",
          border: "1px, solid, black",
          margin: "auto",
        }}
      >
        <h2
          className="mainHead mb-2"
          style={{
            backgroundColor: "#f08080",
            marginBottom: "0px",
            padding: "5px",
          }}
        >
          Yapılan Satış İşlemlerin Listesi
        </h2>
        <div>
          <table className="table" style={{ backgroundColor: "#f08090" }}>
            <thead>
              <tr>
                <th scope="col">Belge No</th>
                <th scope="col">Satılan Şirket</th>
                <th scope="col">Tarih</th>
                <th scope="col">Belgeleyen</th>
              </tr>
            </thead>

            <tbody>
              {props.mydata.sellingProcess.map((item) => (
                <tr key={Math.random()}>
                  <th
                    className="linked"
                    onClick={() => props.sellingLink(`${item[0].DocumentNo}`)}
                  >
                    <Link
                      className="linked"
                      to={`/işlemler/satış_${item[0].DocumentNo.toLowerCase()}`}
                    >
                      {item[0].DocumentNo}
                    </Link>
                  </th>{" "}
                  <td>{item[0].company}</td>
                  <td>{item[0].shoppingData}</td>
                  <td>{item[0].userChecked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
})(Processes);
