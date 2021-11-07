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

const BuyingProcess = (props) => {
  let take = props.mydata.taken.find(
    (take) => take[0].DocumentNo === props.mydata.buyingItem
  );

  return (
    <div>
      <h3 className="mainHead"> Satın Alma Belgesi</h3>
      <br />
      <div style={{ border: "1px solid black", width: "90%", margin: "auto" }}>
        <div style={{ padding: "5px" }}>
          <h4 className="my-3">
            {" "}
            <b>Belge No: {take[0].DocumentNo}</b>
          </h4>
          <h6 className="my-2">
            {" "}
            <b> Alınan Şirket:</b> {take[0].company}
          </h6>
          <h6 className="my-2">
            {" "}
            <b> Tarih:</b> {take[0].shoppingData}
          </h6>
          <h6 className="my-2">
            {" "}
            <b>Satın Alan:</b> {take[0].costumer}
          </h6>
          <h6 className="my-2">
            {" "}
            <b>Satışı Yapan:</b> {take[0].seller}
          </h6>
          <h6 className="my-2">
            {" "}
            <b>Açıklama:</b> {take[0].explanation}
          </h6>
          <br />
          <h6>
            {" "}
            Bu belge <b>{take[0].userChecked}</b> tarafından{" "}
            <b>{take[0].dateChecked} </b> tarihinde sisteme girilmiştir
          </h6>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Seri No</th>
              <th scope="col">Ürün</th>
              <th scope="col">Fotograf</th>
              <th scope="col">Sınıf</th>
              <th scope="col">Alınan</th>
              <th scope="col">Birim</th>
            </tr>
          </thead>
          <tbody className="tbudyPr">
            {take[1].map((item) => (
              <tr key={Math.random()}>
                <th
                  onClick={(e) => props.product(e.target.innerHTML)}
                  className="margin"
                >
                  <Link className="links" to={`/${item.id}`.toLowerCase()}>
                    {item.id}
                  </Link>
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
                <td className="margin">{item.plus}</td>
                <td className="margin">{item.productUnit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="m-4">
        <Link
          to="/işlemler"
          className={props.mydata.user.authority ? " " : "disabled-link"}
        >
          <button
            className={`m-2 btn btn-danger ${
              props.mydata.user.authority ? "" : "disabled"
            } `}
            onClick={(e) => {
              let negative = 0;

              for (let i = 1; i < take[1].length + 1; i++) {
                if (
                  props.mydata.repository.find(
                    (kontrol) =>
                      kontrol.id ===
                      document.querySelector(
                        `.items > tr:nth-child( ${i} ) > th:nth-child(1) > a`
                      ).innerHTML
                  ).stock <
                  Number(
                    document.querySelector(
                      `.items > tr:nth-child( ${i} ) > td:nth-child(5)`
                    ).innerHTML
                  )
                ) {
                  negative = 1;
                  break;
                }
              }

              if (negative === 0) {
                if (
                  window.confirm("Belgeyi silmek istediğinizden emin misiniz ?")
                ) {
                  for (let i = 1; i < take[1].length + 1; i++) {
                    props.cancelPlus(
                      e,
                      document.querySelector(
                        `.items > tr:nth-child( ${i} ) > th:nth-child(1) > a`
                      ).innerHTML,
                      document.querySelector(
                        `.items > tr:nth-child( ${i} ) > td:nth-child(5)`
                      ).innerHTML
                    );
                  }
                  props.cancelBuyying(props.mydata.buyingItem);
                  props.deleteProductBuyying(take[0].DocumentNo);
                }
              }

              if (negative === 1) {
                negative = 0;
                if (
                  window.confirm(
                    "Bu belgeyi silerseniz bazı ürünler eksi (-) 'ye düşecek. yine de bu belgeyi silmek istiyor musunuz ?"
                  )
                ) {
                  for (let i = 1; i < take[1].length + 1; i++) {
                    props.cancelPlus(
                      e,
                      document.querySelector(
                        `.items > tr:nth-child( ${i} ) > th:nth-child(1) > a`
                      ).innerHTML,
                      document.querySelector(
                        `.items > tr:nth-child( ${i} ) > td:nth-child(5)`
                      ).innerHTML
                    );
                  }
                  props.cancelBuyying();
                  props.deleteProductBuyying(take[0].DocumentNo);
                }
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
})(BuyingProcess);
