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
import BuyingCanvas from "./BuyingCanvas";
import BuyingValue from "./BuyingValue";

const Buying = (props) => {
  const [docNo, setDocNo] = useState("");
  const [company, setCompany] = useState("");
  const [seller, setSeller] = useState("");
  const [costumer, setCostumer] = useState("");
  const [explatation, setExplatation] = useState("");
  const [shoppingDate, setShoppingDate] = useState("");


  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;


  return (
    <div>
      <br />
      <h2 className="mainHead">Satın Alma Belgesi Oluştur</h2>
      <div
        style={{
          margin: "20px",
          border: "2px solid black",
          borderRadius: "3px",
        }}
      >
        <form className="m-2">
          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <span>
              <label
                htmlFor="exampleInputE1"
                className="form-label d-inline"
                style={{ text: "center" }}
              >
                Belge Numarası *
              </label>
            </span>
            <span>
              <input
                type="text"
                className="form-control d-inline exampleInputEmail1"
                id="exampleInputE1"
                value={docNo}
                onChange={(e) => setDocNo(e.target.value)}
              />
            </span>
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <span>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label d-inline"
                style={{ text: "center" }}
              >
                Ürünlerin Alındığı Şirket *
              </label>
            </span>
            <span>
              <input
                type="text"
                className="form-control d-inline exampleInputEmail1"
                id="exampleInputEmail1"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </span>
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label htmlFor="exampleInputPassword1" className="form-label">
              Satcının İsmi
            </label>
            <input
              type="name"
              className="form-control exampleInputEmail1"
              id="exampleInputPassword1"
              value={seller}
              onChange={(e) => setSeller(e.target.value)}
            />
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label htmlFor="exampleInputPassword" className="form-label">
              Alıcının İsmi
            </label>
            <input
              type="name"
              className="form-control exampleInputEmail1"
              id="exampleInputPassword"
              value={costumer}
              onChange={(e) => setCostumer(e.target.value)}
            />
          </div>
          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label htmlFor="exampleInputPasswo" className="form-label">
              Açıklama
            </label>
            <input
              type="name"
              className="form-control exampleInputEmail1"
              id="exampleInputPasswo"
              value={explatation}
              onChange={(e) => setExplatation(e.target.value)}
            />
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label htmlFor="exampleInputPasswoq" className="form-label">
              Alış Tarihi *
            </label>
            <input
              min="1899-01-01"
              max={today}
              type="date"
              className="form-control exampleInputEmail1"
              id="exampleInputPasswoq"
              value={shoppingDate}
              onChange={(e) => setShoppingDate(e.target.value)}
            />
          </div>
          <span style={{ color: "rgba(0, 0, 0, 0.452)" }}>
            * işaretli olanlar doldurulması mecburi alanlardır
          </span>
        </form>
        <BuyingCanvas />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sil</th>
              <th scope="col">Seri No</th>
              <th scope="col">Ürün</th>
              <th scope="col">Fotograf</th>
              <th scope="col">Sınıf</th>
              <th scope="col">Alınan</th>
              <th scope="col">Birim</th>
            </tr>
          </thead>
          <tbody className="margin deneme2">
            {props.mydata.buyingNow.map((item) => (
              <tr key={Math.random()}>
                <th className="margin">
                  <svg
                    className="margin bi bi-x-lg"
                    onClick={() => props.del(item.id)}
                    style={{ cursor: "pointer" }}
                    color="red"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </th>
                <th className="margin">{item.id}</th>
                <td className="margin">{item.productName}</td>
                <td className="margin">
                  <img
                    className="list"
                    width={"40"}
                    src={item.productPhoto}
                    alt="photo3"
                  />
                </td>
                <td className="margin">{item.productClass}</td>
                <td className="margin">
                  <BuyingValue props={props} item={item} />
                </td>

                <td className="margin">{item.productUnit}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            margin: "20px 10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>Belgeleyen:</h4>
          <div>
            <h4>{props.mydata.user.userName}</h4>
            <h5>{new Date().toLocaleDateString()} </h5>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={(enn) => {
            let boş = 0;

            const adım = () => {
              for (let i = 1; i < props.mydata.buyingNow.length + 1; i++) {
                if (
                  document.querySelector(
                    `.deneme2 > tr:nth-child( ${i} ) > td:nth-child(6) > div > input`
                  ).value === ""
                ) {
                  alert(
                    "lütfen eklediğiniz ürünlere ne kadar ekleme yapacaksanız yazınız"
                  );
                  boş = 1;
                  break;
                }
                if (
                  document.querySelector(
                    `.deneme2 > tr:nth-child( ${i} ) > td:nth-child(6) > div > input`
                  ).value === "0"
                ) {
                  alert(
                    "lütfen eklediğiniz ürünlere 0'dan yüksek bir sayı yazınız"
                  );
                  boş = 1;
                  break;
                }
              }

              if (boş === 1) {
                boş = 0;
              } else {
                let onay = window.confirm(
                  "Satın Alma İşlemini Onaylıyor Musunuz ?"
                );

                if (onay === true) {
                  for (let i = 1; i < props.mydata.buyingNow.length + 1; i++) {
                    props.plus(
                      enn,
                      document.querySelector(
                        `.deneme2 > tr:nth-child( ${i} ) > th:nth-child(2)`
                      ).innerHTML,
                      document.querySelector(
                        `.deneme2 > tr:nth-child( ${i} ) > td:nth-child(6) > div > input`
                      ).value
                    );
                  }

                  for (let i = 1; i < props.mydata.buyingNow.length + 1; i++) {
                    props.addProductProcess(
                      enn,
                      costumer,
                      company,
                      explatation,
                      docNo,
                      seller,
                      shoppingDate,
                      document.querySelector(
                        `.deneme2 > tr:nth-child( ${i} ) > th:nth-child(2)`
                      ).innerHTML,
                      document.querySelector(
                        `.deneme2 > tr:nth-child( ${i} ) > td:nth-child(6) > div > input`
                      ).value
                    );
                  }

                  props.add(
                    enn,
                    costumer,
                    company,
                    explatation,
                    docNo,
                    seller,
                    shoppingDate
                  );

                  setDocNo("");
                  setCompany("");
                  setSeller("");
                  setCostumer("");
                  setExplatation("");
                  setShoppingDate("");
                }
              }
            };
            let docNoControl = 0;

            props.mydata.taken.find((take) =>
              take[0].DocumentNo === docNo
                ? props.mydata.taken.find((take) =>
                    take[0].DocumentNo === docNo ? (docNoControl = 1) : {}
                  )
                : {}
            );

            if (docNoControl === 1) {
              alert("Bu Belge Numarası İle Zaten Evrak Düzenlenmiş");
              docNoControl = 0;
            } else {
              docNo === ""
                ? alert("Lütfen Belge Numarası Giriniz")
                : company === ""
                ? alert("Lütfen Şirket Adı Giriniz")
                : shoppingDate === ""
                ? alert("Lütfen Alış Tarihi Giriniz")
                : document.querySelector(
                    `.deneme2 > tr:nth-child( 1 ) > th:nth-child(2)`
                  ) === null
                ? alert("Lütfen Depodan Ekle butonu ile ürün ekleyiniz")
                : adım();
            }
          }}
        >
          Belgeyi Onayla
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            setDocNo("");
            setCompany("");
            setSeller("");
            setCostumer("");
            setExplatation("");
            setShoppingDate("");

            props.clearDocBuy();
          }}
        >
          {" "}
          Belgeyi Temizle{" "}
        </button>
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
})(Buying);
